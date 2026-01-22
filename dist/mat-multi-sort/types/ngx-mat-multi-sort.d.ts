import * as i0 from '@angular/core';
import { OnInit, ElementRef, TemplateRef } from '@angular/core';
import { MatSort, SortDirection, MatSortable, MatSortHeader, MatSortHeaderIntl } from '@angular/material/sort';
import * as i3 from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { OverlayRef, ScrollStrategy } from '@angular/cdk/overlay';
import * as i1 from '@angular/common';
import * as i2 from '@angular/material/divider';
import * as i4 from '@angular/material/icon';
import * as i5 from '@angular/material/checkbox';
import * as i6 from '@angular/material/menu';
import * as i7 from '@angular/material/button';
import * as i8 from '@angular/forms';
import * as i9 from '@angular/material/chips';
import * as i10 from '@angular/material/tooltip';
import * as i11 from '@angular/material/dialog';

declare class MatMultiSort extends MatSort implements OnInit {
    start: "asc" | "desc";
    private _allDirections;
    directions: SortDirection[];
    actives: string[];
    ngOnInit(): void;
    sort(sortable: MatSortable): void;
    updateMultipleSorts(sortable: MatSortable): void;
    isActive(sortable: MatSortable): boolean;
    activeDirection(sortable: MatSortable): 'asc' | 'desc';
    getNextSortDirection(sortable: MatSortable): SortDirection;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatMultiSort, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatMultiSort, "[matMultiSort]", ["matMultiSort"], {}, {}, never, never, true, never>;
}

/** Column definition associated with a `MatSortHeader`. */
interface C2MatSortHeaderColumnDef {
    name: string;
}
declare class MatMultiSortHeaderComponent extends MatSortHeader {
    _intl: MatSortHeaderIntl;
    _mySort?: MatMultiSort;
    _myColumnDef?: C2MatSortHeaderColumnDef;
    start: "asc" | "desc";
    id: string;
    constructor();
    _isSorted(): boolean;
    _sortId(): number | false;
    _renderArrow(): boolean;
    getSortDirection(): 'asc' | 'desc' | '';
    static ɵfac: i0.ɵɵFactoryDeclaration<MatMultiSortHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatMultiSortHeaderComponent, "[mat-multi-sort-header]", ["matMultiSortHeader"], { "id": { "alias": "mat-multi-sort-header"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class MatMultiSortTableDataSource<T> extends DataSource<T> {
    private _data;
    private clientSideSorting;
    sort: MatMultiSort;
    constructor(sort: MatMultiSort, clientSideSorting?: boolean);
    set data(data: T[]);
    get data(): T[];
    connect(): BehaviorSubject<T[]>;
    disconnect(): void;
    orderData(): void;
    sortData(data: T[], actives: string[], directions: string[]): T[];
    _sortData(d1: T, d2: T, params: string[], dirs: string[]): number;
}

declare class TableData<T> {
    private _dataSource;
    private readonly _columns;
    private _displayedColumns;
    pageSize: number;
    pageIndex: number;
    private _pageSizeOptions;
    private _totalElements;
    private _sortParams;
    private _sortDirs;
    private _key;
    private _nextObservable;
    private _previousObservable;
    private _sizeObservable;
    private _sortObservable;
    private _displayedSortDirs?;
    private _displayedSortParams?;
    private _sortHeadersObservable;
    constructor(columns: {
        id: string;
        name: string;
        isActive?: boolean;
    }[], options?: {
        defaultSortParams?: string[];
        defaultSortDirs?: string[];
        pageSizeOptions?: number[];
        totalElements?: number;
        localStorageKey?: string;
    });
    onSortEvent(): void;
    onPaginationEvent($event: PageEvent): void;
    updateSortHeaders(): void;
    private subscribeSortHeaders;
    private init;
    private _clientSideSort;
    private _isLocalStorageSettingsValid;
    storeTableSettings(): void;
    set totalElements(totalElements: number);
    get totalElements(): number;
    set displayedColumns(displayedColumns: string[]);
    get displayedColumns(): string[];
    set dataSource(dataSource: MatMultiSortTableDataSource<T>);
    get dataSource(): MatMultiSortTableDataSource<T>;
    set data(data: T[]);
    set columns(v: {
        id: string;
        name: string;
        isActive?: boolean;
    }[]);
    onColumnsChange(): BehaviorSubject<{
        id: string;
        name: string;
        isActive?: boolean;
    }[]>;
    updateColumnNames(v: {
        id: string;
        name: string;
    }[]): void;
    get nextObservable(): Subject<void>;
    get previousObservable(): Subject<void>;
    get sizeObservable(): Subject<void>;
    get sortObservable(): Subject<void>;
    get sortParams(): string[];
    get sortDirs(): string[];
    get columns(): {
        id: string;
        name: string;
        isActive?: boolean;
    }[];
    get pageSizeOptions(): number[];
    set sortParams(v: string[]);
    set sortDirs(v: string[]);
}

declare class MatMultiSortTableSettingsComponent<T> implements OnInit {
    private overlay;
    private viewContainerRef;
    private viewportRuler;
    _tableData: TableData<T>;
    sort: {
        id: string;
        name: string;
        direction: string;
    }[];
    overlayRef: OverlayRef;
    private templateRef;
    buttonRef: ElementRef;
    sortIndicatorRef: TemplateRef<{
        direction: string;
        columnName: string;
    }>;
    sortToolTip: string;
    closeDialogOnChoice: boolean;
    scrollStrategy: ScrollStrategy;
    set tableData(tableData: TableData<T>);
    disableSortIndicators: boolean;
    ngOnInit(): void;
    openDialog(): void;
    drop(event: CdkDragDrop<string[]>): void;
    toggle(): void;
    dropSort(event: CdkDragDrop<string[]>): void;
    getSort(): {
        id: string;
        name: string;
        direction: string;
    }[];
    remove(id: string): void;
    updateDirection(id: string): void;
    private updateSort;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatMultiSortTableSettingsComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatMultiSortTableSettingsComponent<any>, "mat-multi-sort-table-settings", never, { "sortToolTip": { "alias": "sortToolTip"; "required": false; }; "closeDialogOnChoice": { "alias": "closeDialogOnChoice"; "required": false; }; "scrollStrategy": { "alias": "scrollStrategy"; "required": false; }; "tableData": { "alias": "tableData"; "required": false; }; "disableSortIndicators": { "alias": "disableSortIndicators"; "required": false; }; }, {}, ["sortIndicatorRef"], ["*"], true, never>;
}

declare class MatMultiSortModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatMultiSortModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatMultiSortModule, never, [typeof i1.CommonModule, typeof i2.MatDividerModule, typeof i3.DragDropModule, typeof i4.MatIconModule, typeof i5.MatCheckboxModule, typeof i6.MatMenuModule, typeof i7.MatButtonModule, typeof i8.FormsModule, typeof i9.MatChipsModule, typeof i10.MatTooltipModule, typeof i11.MatDialogModule, typeof MatMultiSort, typeof MatMultiSortHeaderComponent, typeof MatMultiSortTableSettingsComponent], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatMultiSortModule>;
}

export { MatMultiSort, MatMultiSortHeaderComponent, MatMultiSortModule, MatMultiSortTableDataSource, MatMultiSortTableSettingsComponent, TableData };
//# sourceMappingURL=ngx-mat-multi-sort.d.ts.map
