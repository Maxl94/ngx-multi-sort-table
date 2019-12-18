import { MatTableDataSource, PageEvent, SortDirection } from '@angular/material';

import { Subject } from 'rxjs';
import { MatMultiSortTableDataSource } from './mat-multi-sort-data-source';

export class TableData<T> {
    private _dataSource: MatMultiSortTableDataSource<T>;
    private _columns: { id: string, name: string }[];
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
    constructor(columns: { id: string, name: string }[],
        options?: {
            defaultSortParams?: string[],
            defaultSortDirs?: string[],
            pageSizeOptions?: number[],
            totalElements?: number
        }) {
        this._columns = columns;
        this._displayedColumns = this._columns.map(c => c.id);

        if (options) {
            if (options.pageSizeOptions && options.pageSizeOptions.length > 1) {
                throw Error('Array of pageSizeOptions must contain at least one entry');
            }
            options.defaultSortParams.map(s => {
                if (!this._displayedColumns.includes(s)) {
                    throw Error(`Provided sort paramerter "${s}" is not a column.`);
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
        }
        this.pageSize = this._pageSizeOptions[0];
    }

    public onSortEvent() {
        this._sortParams = this._dataSource.sort['actives'];
        this._sortDirs = this._dataSource.sort['directions'];
        this._sortObservable.next();
    }

    public onPagnationEvent($event: PageEvent) {
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
        // this.updateSortheaders();
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
        this._displayedColumns = []; // temp_revers.reverse();
        setTimeout(() => this._displayedColumns = temp, 0);
        this._sortObservable.next();
    }

    public get dataSource(): MatMultiSortTableDataSource<T> {
        return this._dataSource;
    }

    public set data(data: T[]) {
        this._dataSource.setTableData(data);
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

    public get columns(): { id: string, name: string }[] {
        return this._columns;
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
        this._dataSource.sort.directions = this._sortDirs.map(v => v as SortDirection);
    }


}
