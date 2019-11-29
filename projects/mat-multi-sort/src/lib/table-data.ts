import { MatTableDataSource, PageEvent } from '@angular/material';

import { Subject } from 'rxjs';
import { MatMultiSortTableDataSource } from './mat-multi-sort-data-source';

export class TableData<T> {
    dataSource: MatMultiSortTableDataSource<T>;
    columns: { id: string, name: string }[];
    displayedColumns: string[];
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: number[];
    totalElements: number;
    sortParams: string[];
    sortDirs: string[];

    nextObservable: Subject<any> = new Subject<any>();
    previousObservable: Subject<any> = new Subject<any>();
    sizeObservable: Subject<any> = new Subject<any>();
    sortObservable: Subject<void> = new Subject<void>();


    // TODO refactor
    constructor(columns: { id: string, name: string }[], totalElements: number,
        options?: {
            defaultSortParams?: string[],
            defaultSortDirs?: string[],
            pageSizeOptions: number[]
        }) {
        this.totalElements = totalElements;
        this.columns = columns;
        this.displayedColumns = this.columns.map(c => c.id);

        if (options) {
            this.sortParams = options.defaultSortParams || [];
            this.sortDirs = options.defaultSortDirs || [];
            if (options.pageSizeOptions && options.pageSizeOptions.length > 1) {
                throw Error('Array of pageSizeOptions must contain at least one entry');
            }
            this.pageSizeOptions = options.pageSizeOptions;
        } else {
            this.pageSizeOptions = [10, 20, 50, 100];
        }
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
