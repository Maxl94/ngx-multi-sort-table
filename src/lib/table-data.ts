import { Subject, BehaviorSubject, delay, filter, tap } from 'rxjs';
import { MatMultiSortTableDataSource } from './mat-multi-sort-data-source';
import { SortDirection } from '@angular/material/sort';
import { Settings } from './utils';
import { PageEvent } from '@angular/material/paginator';

export class TableData<T> {
    private _dataSource!: MatMultiSortTableDataSource<T>;
    private readonly _columns: BehaviorSubject<{ id: string, name: string, isActive?: boolean }[]>;
    private _displayedColumns: string[];
    pageSize!: number;
    pageIndex!: number;
    private _pageSizeOptions: number[];
    private _totalElements!: number;
    private _sortParams: string[];
    private _sortDirs: string[];
    private _key!: string;

    private _nextObservable: Subject<void> = new Subject<void>();
    private _previousObservable: Subject<void> = new Subject<void>();
    private _sizeObservable: Subject<void> = new Subject<void>();
    private _sortObservable: Subject<void> = new Subject<void>();
    private _displayedSortDirs?: string[]
    private _displayedSortParams?: string[]

    private _sortHeadersObservable: Subject<string[]> = new Subject<string[]>();

    // TODO refactor
    constructor(columns: { id: string, name: string, isActive?: boolean }[],
        options?: {
            defaultSortParams?: string[],
            defaultSortDirs?: string[],
            pageSizeOptions?: number[],
            totalElements?: number,
            localStorageKey?: string
        }) {
        this._columns = new BehaviorSubject(columns.map(c => { if (c.isActive === undefined) { c.isActive = true; } return c; }));
        this._displayedColumns = this._columns.value.filter(c => c.isActive).map(c => c.id);

        if (options) {
            if (options.pageSizeOptions && options.pageSizeOptions.length < 1) {
                throw Error('Array of pageSizeOptions must contain at least one entry');
            }

            if (options.defaultSortParams) {
                options.defaultSortParams.map(s => {
                    if (!this._displayedColumns.includes(s)) {
                        throw Error(`Provided sort parameter "${s}" is not a column.`);
                    }
                });
            }

            this._sortParams = options.defaultSortParams || [];
            this._sortDirs = options.defaultSortDirs || [];

            if (this._sortParams.length !== this._sortDirs.length) {
                this._sortDirs = this._sortParams.map(() => 'asc');
            }

            this._totalElements = options.totalElements || 0;
            this._pageSizeOptions = options.pageSizeOptions || [10, 20, 50, 100];
            this._key = options.localStorageKey!;
        } else {
            this._pageSizeOptions = [10, 20, 50, 100];
            this._sortParams = [];
            this._sortDirs = [];
        }
        this.init();
    }

    public onSortEvent() {
        this._sortParams = this._dataSource.sort['actives'];
        this._sortDirs = this._dataSource.sort['directions'];
        this._clientSideSort();
        this._sortObservable.next();
        this.storeTableSettings();
    }

    public onPaginationEvent($event: PageEvent) {
        const tmpPageSize: number = this.pageSize;
        this.pageSize = $event.pageSize;
        this.pageIndex = $event.pageIndex;

        if (tmpPageSize !== this.pageSize) {
            this._sizeObservable.next();
        } else if ($event.previousPageIndex !== undefined && $event.previousPageIndex < $event.pageIndex) {
            this._nextObservable.next();
        } else if ($event.previousPageIndex !== undefined && $event.previousPageIndex > $event.pageIndex) {
            this._previousObservable.next();
        }
    }

    public updateSortHeaders(): void {
        // Dirty hack to display default sort column(s)
        const temp = Object.assign([], this._displayedColumns);
        this._sortHeadersObservable.next([]);
        this._sortHeadersObservable.next(temp);
        this._clientSideSort();
        this._sortObservable.next();
        this.storeTableSettings();1
    }

    // this fixes an infine loop of rerendering
    private subscribeSortHeaders(): void {
        this._sortHeadersObservable.pipe(
            delay(0),
            // ignore when there is no update in the sort (params or dirs)
            filter(() => this._displayedSortDirs !== this.sortDirs && this._displayedSortParams !== this.sortParams),
            tap((column) => {
                // update the displayed sort when it is not the empty array
                if(column.length > 0) {
                    this._displayedSortDirs = this.sortDirs;
                    this._displayedSortParams = this.sortParams;
                }
            })
        ).subscribe(columns => this._displayedColumns = columns)
    }

    private init() {
        this.subscribeSortHeaders();
        if (this._key) {
            const settings = new Settings(this._key);
            settings.load();
            if (this._isLocalStorageSettingsValid(settings)) {
                this.columns = settings.columns;
                this._sortDirs = settings.sortDirs;
                this._sortParams = settings.sortParams;
            } else {
                console.warn("Stored tableSettings are invalid. Using default");
            }
        }
    }

    private _clientSideSort() {
        this._dataSource.orderData();
    }

    private _isLocalStorageSettingsValid(settings: Settings): boolean {
        // check if number of columns matching
        if (settings.columns.length !== this._columns.value.length) {
            return false;
        }

        // check if columns are the same
        for (var column of settings.columns) {
            var match = this._columns.value.filter(c => c.id == column.id && c.name == column.name);
            if (match === undefined) {
                return false;
            }
        }
        return true;
    }

    public storeTableSettings(): void {
        console.log("Store")
        if (this._key) {
            const settings: Settings = new Settings(this._key);
            settings.columns = this._columns.value;
            settings.sortParams = this._sortParams;
            settings.sortDirs = this._sortDirs;
            settings.save();
        }
    }

    public set totalElements(totalElements: number) {
        this._totalElements = totalElements;
    }

    public get totalElements(): number {
        return this._totalElements;
    }

    public set displayedColumns(displayedColumns: string[]) {
        this._displayedColumns = displayedColumns;
        this._columns.next(this._columns.value.map(c => {
            if (this._displayedColumns.includes(c.id)) {
                c.isActive = true;
            } else c.isActive = false;
            return c;
        }));
    }

    public get displayedColumns(): string[] {
        return this._displayedColumns;
    }

    public set dataSource(dataSource: MatMultiSortTableDataSource<T>) {
        this._dataSource = dataSource;
        if (this._sortParams.length > 0) {
            this._dataSource.sort.actives = this._sortParams;
            this._dataSource.sort.directions = this._sortDirs.map(v => v as SortDirection);
            this.updateSortHeaders();
        }
    }

    public get dataSource(): MatMultiSortTableDataSource<T> {
        return this._dataSource;
    }

    public set data(data: T[]) {
        this._dataSource.data = data;
        this._clientSideSort();
    }

    public set columns(v: { id: string, name: string, isActive?: boolean }[]) {
        this._columns.next(v.map(c => { if (c.isActive === undefined) { c.isActive = true; } return c; }));
    }

    public onColumnsChange(): BehaviorSubject<{ id: string, name: string, isActive?: boolean }[]> {
        return this._columns;
    }

    public updateColumnNames(v: { id: string, name: string }[]) {
        const dict: { [key: string]: any } = {};
        v.forEach(c => dict[c.id] = c.name);
        this._columns.next(this._columns.value.map(c => { c.name = dict[c.id] || c.name; return c; }));
    }

    public get nextObservable(): Subject<any> {
        return this._nextObservable;
    }

    public get previousObservable(): Subject<any> {
        return this._previousObservable;
    }

    public get sizeObservable(): Subject<any> {
        return this._sizeObservable;
    }

    public get sortObservable(): Subject<any> {
        return this._sortObservable;
    }

    public get sortParams(): string[] {
        return this._sortParams;
    }

    public get sortDirs(): string[] {
        return this._sortDirs;
    }

    public get columns(): { id: string, name: string, isActive?: boolean }[] {
        return this._columns.value;
    }

    public get pageSizeOptions(): number[] {
        return this._pageSizeOptions;
    }

    public set sortParams(v: string[]) {
        this._sortParams = v;
        this._dataSource.sort.actives = this._sortParams;
    }

    public set sortDirs(v: string[]) {
        this._sortDirs = v;
        this._dataSource.sort.directions = this._sortDirs.map(elem => elem as SortDirection);
    }
}
