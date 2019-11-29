import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { MatMultiSort } from "./mat-multi-sort.directive";

export class MatMultiSortTableDataSource<T> implements DataSource<T> {
    private tableDataSubject = new BehaviorSubject<T[]>([]);
    private tableData: T[] = [];
    private enableClientSideSorting;
    sort: MatMultiSort;

    constructor(sort: MatMultiSort, enableClientSideSorting = false) {
        this.sort = sort;
        this.enableClientSideSorting = enableClientSideSorting;
    }

    public setTableData(data: T[]) {
        this.tableData = Object.assign([], data);
        this.tableDataSubject.next(this.tableData);
    }

    connect(): BehaviorSubject<T[]> {
        return this.tableDataSubject;
    }

    disconnect(): void {
        this.tableDataSubject.complete();
    }

    sortData(data: T[], sort: MatMultiSort): T[] {
        console.log('Sorting');
        if (this.enableClientSideSorting) {
            return data.sort((i1, i2) => {
                return this._sortData(i1, i2, sort.actives, sort.directions);
            });
        }
        return this.tableData;
    }

    _sortData(d1: T, d2: T, params: string[], dirs: string[]): number {
        console.log('Sorting data');

        if (d1[params[0]] > d2[params[0]]) {
            return dirs[0] === 'asc' ? 1 : -1;
        } else if (d1[params[0]] > d2[params[0]]) {
            return dirs[0] === 'asc' ? -1 : 1;
        } else {
            if (params.length > 1) {
                params = params.slice(1, params.length);
                dirs = dirs.slice(1, dirs.length);
                return this._sortData(d1, d2, params, dirs);
            } else {
                return 0;
            }
        }
    }
}