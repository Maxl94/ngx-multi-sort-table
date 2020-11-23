import { Subject, BehaviorSubject } from 'rxjs';
import { MatMultiSortTableDataSource } from './mat-multi-sort-data-source';
import { PageEvent } from '@angular/material/paginator';
import { SortDirection } from '@angular/material/sort';

export class TableData<T> {
    private _dataSource: MatMultiSortTableDataSource<T>;
    private readonly _columns: BehaviorSubject<{ id: string, name: string, isActive?: boolean  }[]>;
    private _displayedColumns: string[];
    pageSize: number;
    pageIndex: number;
    private _pageSizeOptions: number[];
    private _totalElements: number;
    private _sortParams: string[];
    private _sortDirs: string[];

    private _nextObservable: Subject<void> = new Subject<void>();
    private _previousObservable: Subject<void> = new Subject<void>();
    private _sizeObservable: Subject<void> = new Subject<void>();
    private _sortObservable: Subject<void> = new Subject<void>();


    // TODO refactor
    constructor(columns: { id: string, name: string, isActive?: boolean }[],
        options?: {
            defaultSortParams?: string[],
            defaultSortDirs?: string[],
            pageSizeOptions?: number[],
            totalElements?: number,
        }) {
        this._columns = new BehaviorSubject(columns.map(c => { if (c.isActive === undefined) { c.isActive = true; } return c; }));
        this._displayedColumns = this._columns.value.filter(c => c.isActive).map(c => c.id);

        if (options) {
            if (options.pageSizeOptions && options.pageSizeOptions.length > 1) {
                throw Error('Array of pageSizeOptions must contain at least one entry');
            }
            options.defaultSortParams.map(s => {
                if (!this._displayedColumns.includes(s)) {
                    throw Error(`Provided sort parameter "${s}" is not a column.`);
                }
            });

            this._sortParams = options.defaultSortParams || [];
            this._sortDirs = options.defaultSortDirs || [];

            if (this._sortParams.length !== this._sortDirs.length) {
                this._sortDirs = this._sortParams.map(() => 'asc');
            }

            this._totalElements = options.totalElements || 0;
            this._pageSizeOptions = options.pageSizeOptions || [10, 20, 50, 100];
        } else {
            this._pageSizeOptions = [10, 20, 50, 100];
            this._sortParams = [];
            this._sortDirs = [];
        }
        this.pageSize = this._pageSizeOptions[0];
    }

    private _clientSideSort() {
        this._dataSource.orderData();
    }

    public onSortEvent() {
        this._sortParams = this._dataSource.sort['actives'];
        this._sortDirs = this._dataSource.sort['directions'];
        this._clientSideSort();
        this._sortObservable.next();
    }

    public onPaginationEvent($event: PageEvent) {
        const tmpPageSize: number = this.pageSize;
        this.pageSize = $event.pageSize;
        this.pageIndex = $event.pageIndex;

        if (tmpPageSize !== this.pageSize) {
            this._sizeObservable.next();
        } else if ($event.previousPageIndex < $event.pageIndex) {
            this._nextObservable.next();
        } else if ($event.previousPageIndex > $event.pageIndex) {
            this._previousObservable.next();
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
    }

    public get displayedColumns(): string[] {
        return this._displayedColumns;
    }

    public set dataSource(dataSource: MatMultiSortTableDataSource<T>) {
        this._dataSource = dataSource;
        if (this._sortParams.length > 0) {
            this._dataSource.sort.actives = this._sortParams;
            this._dataSource.sort.directions = this._sortDirs.map(v => v as SortDirection);
            this.updateSortheaders();
        }
    }

    public updateSortheaders(): void {
        // Dirty hack to display default sort column(s)
        const temp = Object.assign([], this._displayedColumns);
        this._displayedColumns = [];
        setTimeout(() => this._displayedColumns = temp, 0);
        this._clientSideSort();
        this._sortObservable.next();
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

    public onColumnsChange(): BehaviorSubject<{ id: string, name: string, isActive?: boolean  }[]> {
        return this._columns;
    }

    public updateColumnNames(v: { id: string, name: string }[]) {
        const dict = {};
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
