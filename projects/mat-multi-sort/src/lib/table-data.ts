import { MatTableDataSource, PageEvent } from '@angular/material';

import { Subject } from 'rxjs';
import { MatMultiSortTableDataSource } from './mat-multi-sort-data-source';

export class TableData<T> {
    dataSource: MatMultiSortTableDataSource<T>;
    readonly columns: { id: string, name: string }[];
    displayedColumns: string[];
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: number[];
    totalElements: number;
    sortParams: string[];
    sortDirs: string[];

    readonly nextObservable: Subject<any> = new Subject<any>();
    readonly previousObservable: Subject<any> = new Subject<any>();
    readonly sizeObservable: Subject<any> = new Subject<any>();
    readonly sortObservable: Subject<void> = new Subject<void>();


    // TODO refactor
    constructor(columns: { id: string, name: string }[],
        options?: {
            defaultSortParams?: string[],
            defaultSortDirs?: string[],
            pageSizeOptions?: number[],
            totalElements?: number
        }) {
        this.columns = columns;
        this.displayedColumns = this.columns.map(c => c.id);

        if (options) {
            this.sortParams = options.defaultSortParams || [];
            this.sortDirs = options.defaultSortDirs || [];
            this.totalElements = options.totalElements || 0;
            if (options.pageSizeOptions && options.pageSizeOptions.length > 1) {
                throw Error('Array of pageSizeOptions must contain at least one entry');
            }
            this.pageSizeOptions = options.pageSizeOptions;
        } else {
            this.pageSizeOptions = [10, 20, 50, 100];
        }
        this.pageSize = this.pageSizeOptions[0];
    }

    public setTotalElements(totalElements: number) {
        this.totalElements = totalElements;
    }

    public onSortEvent() {
        this.sortParams = this.dataSource.sort['actives'];
        this.sortDirs = this.dataSource.sort['directions'];
        this.sortObservable.next();
    }

    public onPagnationEvent($event: PageEvent) {
        const tmpPageSize: number = this.pageSize;
        this.pageSize = $event.pageSize;
        this.pageIndex = $event.pageIndex;

        if (tmpPageSize !== this.pageSize) {
            this.sizeObservable.next();
        } else if ($event.previousPageIndex < $event.pageIndex) {
            this.nextObservable.next();
        } else if ($event.previousPageIndex > $event.pageIndex) {
            this.previousObservable.next();
        }
    }

    public setDisplayedColumns(columns: string[]) {
        this.displayedColumns = columns;
    }
}
