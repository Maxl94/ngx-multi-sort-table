import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { MatMultiSort } from "./mat-multi-sort.directive";

export class MatMultiSortTableDataSource<T> extends DataSource<T> {
    private tableDataSubject = new BehaviorSubject<T[]>([]);
    private tableData: T[] = [];
    private clientSideSorting;
    sort: MatMultiSort;

    constructor(sort: MatMultiSort, clientSideSorting = false) {
        super();
        this.sort = sort;
        this.clientSideSorting = clientSideSorting;
    }

    public setTableData(data: T[]) {
        this.tableData = Object.assign([], data);
        this.tableDataSubject.next(this.tableData);
    }

    public getTableData(): T[] {
        return Object.assign(new Array<T>(), this.tableData);
    }

    connect(): BehaviorSubject<T[]> {
        return this.tableDataSubject;
    }

    disconnect(): void {
        this.tableDataSubject.complete();
    }

    orderData() {
        this.tableDataSubject.next(this.sortData(this.tableData, this.sort.actives, this.sort.directions));
    }

    sortData(data: T[], actives: string[], directions: string[]): T[] {
        const _data = Object.assign(new Array<T>(), data);
        if (this.clientSideSorting) {
            return _data.sort((i1, i2) => {
                return this._sortData(i1, i2, actives, directions);
            });
        }
        return _data;
    }

    _sortData(d1: T, d2: T, params: string[], dirs: string[]): number {
        if (d1[params[0]] > d2[params[0]]) {
            return dirs[0] === 'asc' ? 1 : -1;
        } else if (d1[params[0]] < d2[params[0]]) {
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