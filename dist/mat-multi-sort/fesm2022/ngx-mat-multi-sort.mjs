import * as i0 from '@angular/core';
import { Directive, inject, ChangeDetectorRef, InjectionToken, ElementRef, ViewEncapsulation, Component, Input, ViewContainerRef, ContentChild, ViewChild, NgModule } from '@angular/core';
import { MatSort, MatSortHeader, MatSortHeaderIntl } from '@angular/material/sort';
import { FocusMonitor } from '@angular/cdk/a11y';
import { moveItemInArray, CdkDropList, CdkDrag, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { Overlay, ViewportRuler, BlockScrollStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipSet, MatChipRow, MatChipsModule } from '@angular/material/chips';
import { NgTemplateOutlet, CommonModule } from '@angular/common';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { Subject, BehaviorSubject, delay, filter, tap } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

class MatMultiSort extends MatSort {
    constructor() {
        super(...arguments);
        this.start = 'asc';
        this._allDirections = ['asc', 'desc'];
        this.directions = [];
        this.actives = [];
    }
    ngOnInit() {
        super.ngOnInit();
    }
    sort(sortable) {
        this.updateMultipleSorts(sortable);
        super.sort(sortable);
    }
    updateMultipleSorts(sortable) {
        const i = this.actives.findIndex(activeId => activeId === sortable.id);
        if (this.isActive(sortable)) {
            if (this.activeDirection(sortable) === (sortable.start ? sortable.start : this.start)) {
                this.directions.splice(i, 1, this.getNextSortDirection(sortable));
            }
            else {
                this.actives.splice(i, 1);
                this.directions.splice(i, 1);
            }
        }
        else {
            this.actives.push(sortable.id);
            this.directions.push(sortable.start ? sortable.start : this.start);
        }
    }
    isActive(sortable) {
        const i = this.actives.findIndex(activeId => activeId === sortable.id);
        return i > -1;
    }
    activeDirection(sortable) {
        const i = this.actives.findIndex(activeId => activeId === sortable.id);
        return this.directions[i] || (sortable.start ? sortable.start : this.start);
    }
    getNextSortDirection(sortable) {
        const i = this._allDirections.indexOf(this.activeDirection(sortable));
        return this._allDirections[(i + 1) % this._allDirections.length];
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵMatMultiSort_BaseFactory; return function MatMultiSort_Factory(__ngFactoryType__) { return (ɵMatMultiSort_BaseFactory || (ɵMatMultiSort_BaseFactory = i0.ɵɵgetInheritedFactory(MatMultiSort)))(__ngFactoryType__ || MatMultiSort); }; })(); }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MatMultiSort, selectors: [["", "matMultiSort", ""]], exportAs: ["matMultiSort"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSort, [{
        type: Directive,
        args: [{
                // eslint-disable-next-line @angular-eslint/directive-selector
                selector: '[matMultiSort]',
                exportAs: 'matMultiSort'
            }]
    }], null, null); })();

const _c0$1 = ["mat-multi-sort-header", ""];
const _c1$1 = ["*"];
function MatMultiSortHeaderComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 2);
    i0.ɵɵanimateLeave("opacity: 0; transform: translateY(-25%)");
    i0.ɵɵanimateEnter("opacity: 1; transform: translateY(0)");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(1, "svg", 3);
    i0.ɵɵdomElement(2, "path", 4);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("asc", ctx_r0.getSortDirection() === "asc")("desc", ctx_r0.getSortDirection() === "desc");
} }
function MatMultiSortHeaderComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0._sortId());
} }
class MatMultiSortHeaderComponent extends MatSortHeader {
    constructor() {
        const _intl = inject(MatSortHeaderIntl);
        const changeDetectorRef = inject(ChangeDetectorRef);
        const _sort = inject(MatMultiSort, { optional: true });
        const _columnDef = inject(new InjectionToken('C2_SORT_HEADER_COLUMN_DEF'), { optional: true });
        const _focusMonitor = inject(FocusMonitor);
        const _elementRef = inject(ElementRef);
        super(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef);
        this.start = 'asc';
        this.id = '';
        this._intl = _intl;
        if (_sort)
            this._mySort = _sort;
        if (_columnDef)
            this._myColumnDef = _columnDef;
    }
    _isSorted() {
        return this._mySort ? this._mySort.actives.findIndex(activeId => activeId === this.id) > -1 : false;
    }
    _sortId() {
        return this._mySort ? this._mySort.actives.findIndex(activeId => activeId === this.id) + 1 : false;
    }
    _renderArrow() {
        return !this._isDisabled() || this._isSorted();
    }
    getSortDirection() {
        const i = this._mySort ? this._mySort.actives.findIndex(activeIds => activeIds === this.id) : 0;
        const direction = this._mySort ? this._mySort.directions[i] : 'asc';
        return this._isSorted() ? direction : (this.start || (this._mySort && this._mySort.start));
    }
    static { this.ɵfac = function MatMultiSortHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MatMultiSortHeaderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatMultiSortHeaderComponent, selectors: [["", "mat-multi-sort-header", ""]], inputs: { id: [0, "mat-multi-sort-header", "id"] }, exportAs: ["matMultiSortHeader"], features: [i0.ɵɵProvidersFeature([{ provide: MatSort, useExisting: MatMultiSort }]), i0.ɵɵInheritDefinitionFeature], attrs: _c0$1, ngContentSelectors: _c1$1, decls: 5, vars: 10, consts: [[1, "mat-sort-header-container"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], ["viewBox", "0 -960 960 960", "focusable", "false", "aria-hidden", "true"], ["d", "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]], template: function MatMultiSortHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(3, MatMultiSortHeaderComponent_Conditional_3_Template, 3, 4, "div", 2);
            i0.ɵɵconditionalCreate(4, MatMultiSortHeaderComponent_Conditional_4_Template, 2, 1, "div");
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before")("mat-sort-header-ascending", ctx.getSortDirection() === "asc")("mat-sort-header-deascending", ctx.getSortDirection() === "desc");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx._renderArrow() && ctx._isSorted() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx._isSorted() ? 4 : -1);
        } }, styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex}.mat-sort-header-arrow svg{width:24px;height:24px;position:absolute;top:50%;left:50%;transform:translate(-50%) translateY(-50%);transform-origin:top left}.mat-sort-header-arrow svg.asc{rotate:0}.mat-sort-header-arrow svg.desc{rotate:180deg}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}\n"], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSortHeaderComponent, [{
        type: Component,
        args: [{ selector: '[mat-multi-sort-header]', exportAs: 'matMultiSortHeader', encapsulation: ViewEncapsulation.None, imports: [], providers: [{ provide: MatSort, useExisting: MatMultiSort }], template: "<div class=\"mat-sort-header-container\"\n  [class.mat-sort-header-sorted]=\"_isSorted()\"\n  [class.mat-sort-header-position-before]=\"arrowPosition === 'before'\"\n  [class.mat-sort-header-ascending]=\"getSortDirection() === 'asc'\"\n  [class.mat-sort-header-deascending]=\"getSortDirection() === 'desc'\">\n\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n  @if (_renderArrow() && _isSorted()) {\n    <div class=\"mat-sort-header-arrow\"\n         animate.enter=\"opacity: 1; transform: translateY(0)\"\n         animate.leave=\"opacity: 0; transform: translateY(-25%)\">\n      <svg [class.asc]=\"getSortDirection() === 'asc'\"\n        [class.desc]=\"getSortDirection() === 'desc'\"\n        viewBox=\"0 -960 960 960\" focusable=\"false\" aria-hidden=\"true\">\n        <path d=\"M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z\"></path>\n      </svg>\n    </div>\n  }\n  @if (_isSorted()) {\n    <div>{{_sortId()}}</div>\n  }\n</div>\n", styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex}.mat-sort-header-arrow svg{width:24px;height:24px;position:absolute;top:50%;left:50%;transform:translate(-50%) translateY(-50%);transform-origin:top left}.mat-sort-header-arrow svg.asc{rotate:0}.mat-sort-header-arrow svg.desc{rotate:180deg}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}\n"] }]
    }], () => [], { id: [{
            type: Input,
            args: ['mat-multi-sort-header']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatMultiSortHeaderComponent, { className: "MatMultiSortHeaderComponent", filePath: "lib/mat-multi-sort-header/mat-multi-sort-header.component.ts", lineNumber: 30 }); })();

const _c0 = ["sortIndicator"];
const _c1 = ["templateRef"];
const _c2 = ["settingsMenu"];
const _c3 = ["*"];
const _c4 = (a0, a1) => ({ direction: a0, columnName: a1 });
const _forTrack0 = ($index, $item) => $item.id;
function MatMultiSortTableSettingsComponent_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 10);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.sortIndicatorRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c4, item_r3.direction, item_r3.name));
} }
function MatMultiSortTableSettingsComponent_For_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r3.name, ": ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("matTooltip", ctx_r3.sortToolTip);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r3.direction, " ");
} }
function MatMultiSortTableSettingsComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip-row", 8);
    i0.ɵɵlistener("removed", function MatMultiSortTableSettingsComponent_For_4_Template_mat_chip_row_removed_0_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.remove(item_r3.id)); })("click", function MatMultiSortTableSettingsComponent_For_4_Template_mat_chip_row_click_0_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateDirection(item_r3.id)); });
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵconditionalCreate(2, MatMultiSortTableSettingsComponent_For_4_Conditional_2_Template, 1, 5, "ng-container", 10)(3, MatMultiSortTableSettingsComponent_For_4_Conditional_3_Template, 4, 3, "div");
    i0.ɵɵelementStart(4, "mat-icon", 11);
    i0.ɵɵlistener("click", function MatMultiSortTableSettingsComponent_For_4_Template_mat_icon_click_4_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.remove(item_r3.id)); });
    i0.ɵɵtext(5, "cancel");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r3.sortIndicatorRef ? 2 : 3);
} }
function MatMultiSortTableSettingsComponent_ng_template_9_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "mat-icon", 15);
    i0.ɵɵtext(2, "drag_indicator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-checkbox", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function MatMultiSortTableSettingsComponent_ng_template_9_For_2_Template_mat_checkbox_ngModelChange_3_listener($event) { const column_r7 = i0.ɵɵrestoreView(_r6).$implicit; i0.ɵɵtwoWayBindingSet(column_r7.isActive, $event) || (column_r7.isActive = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function MatMultiSortTableSettingsComponent_ng_template_9_For_2_Template_mat_checkbox_change_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.toggle()); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", column_r7.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(column_r7.name);
} }
function MatMultiSortTableSettingsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("cdkDropListDropped", function MatMultiSortTableSettingsComponent_ng_template_9_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.drop($event)); });
    i0.ɵɵrepeaterCreate(1, MatMultiSortTableSettingsComponent_ng_template_9_For_2_Template, 5, 2, "div", 14, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r3._tableData.columns);
} }
class MatMultiSortTableSettingsComponent {
    constructor() {
        this.overlay = inject(Overlay);
        this.viewContainerRef = inject(ViewContainerRef);
        this.viewportRuler = inject(ViewportRuler);
        this.sort = [];
        this.sortToolTip = '';
        this.closeDialogOnChoice = true;
        this.scrollStrategy = new BlockScrollStrategy(this.viewportRuler, document);
        this.disableSortIndicators = false;
    }
    set tableData(tableData) {
        this._tableData = tableData;
    }
    ngOnInit() {
        this.sort = this.getSort();
        this._tableData.sortObservable.subscribe(() => this.sort = this.getSort());
        this._tableData.onColumnsChange().subscribe(() => this.sort = this.getSort());
    }
    openDialog() {
        const button = this.buttonRef.nativeElement;
        const positionStrategyBuilder = this.overlay.position();
        const positionStrategy = positionStrategyBuilder
            .flexibleConnectedTo(button)
            .withFlexibleDimensions(true)
            .withViewportMargin(10)
            .withGrowAfterOpen(true)
            .withPush(true)
            .withPositions([{
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            }]);
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            panelClass: 'column-overlay',
            positionStrategy,
            scrollStrategy: this.scrollStrategy
        });
        const templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);
        this.overlayRef.attach(templatePortal);
        this.overlayRef.backdropClick().subscribe(() => {
            this.overlayRef.dispose();
        });
    }
    drop(event) {
        moveItemInArray(this._tableData.columns, event.previousIndex, event.currentIndex);
        this._tableData.displayedColumns = this._tableData.columns.filter(c => c.isActive).map(c => c.id);
        this._tableData.storeTableSettings();
    }
    toggle() {
        this._tableData.displayedColumns = this._tableData.columns.filter(c => {
            if (!c.isActive) {
                this.sort = this.sort.filter(s => s.id !== c.id);
            }
            return c.isActive;
        }).map(c => c.id);
        this.updateSort();
        if (this.closeDialogOnChoice) {
            this.overlayRef.dispose();
        }
    }
    dropSort(event) {
        moveItemInArray(this.sort, event.previousIndex, event.currentIndex);
        this.updateSort();
    }
    getSort() {
        const sorting = [];
        for (let i = 0; i < this._tableData.sortParams.length; i++) {
            sorting.push({
                id: this._tableData.sortParams[i],
                name: this._tableData.columns.find(c => c.id === this._tableData.sortParams[i])?.name ?? '',
                direction: this._tableData.sortDirs[i]
            });
        }
        return sorting;
    }
    remove(id) {
        this.sort = this.sort.filter(v => v.id !== id);
        this.updateSort();
    }
    updateDirection(id) {
        const i = this.sort.findIndex(v => v.id === id);
        if (i !== -1) {
            if (this.sort[i].direction === 'asc') {
                this.sort[i].direction = 'desc';
            }
            else {
                this.sort[i].direction = 'asc';
            }
        }
        this.updateSort();
    }
    updateSort() {
        this._tableData.sortParams = this.sort.map(v => v.id);
        this._tableData.sortDirs = this.sort.map(v => v.direction);
        this._tableData.updateSortHeaders();
    }
    static { this.ɵfac = function MatMultiSortTableSettingsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MatMultiSortTableSettingsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatMultiSortTableSettingsComponent, selectors: [["mat-multi-sort-table-settings"]], contentQueries: function MatMultiSortTableSettingsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sortIndicatorRef = _t.first);
        } }, viewQuery: function MatMultiSortTableSettingsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c1, 7)(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttonRef = _t.first);
        } }, inputs: { sortToolTip: "sortToolTip", closeDialogOnChoice: "closeDialogOnChoice", scrollStrategy: "scrollStrategy", tableData: "tableData", disableSortIndicators: "disableSortIndicators" }, ngContentSelectors: _c3, decls: 11, vars: 1, consts: [["settingsMenu", ""], ["templateRef", ""], [1, "table-settings"], [1, "table-settings-sort"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "drag-chip-list", 3, "cdkDropListDropped", "disabled"], ["cdkDrag", "", 1, "drag-chip"], [2, "flex", "1 1 auto"], [1, "table-settings-menu", 3, "click"], ["cdkDrag", "", 1, "drag-chip", 3, "removed", "click"], [1, "chip-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-mdc-chip-trailing-icon", 3, "click"], [1, "sorting", 3, "matTooltip"], ["cdkDropList", "", 1, "column-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "column-item"], ["cdkDragHandle", ""], [3, "ngModelChange", "change", "ngModel"]], template: function MatMultiSortTableSettingsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "mat-chip-set", 4);
            i0.ɵɵlistener("cdkDropListDropped", function MatMultiSortTableSettingsComponent_Template_mat_chip_set_cdkDropListDropped_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.dropSort($event)); });
            i0.ɵɵrepeaterCreate(3, MatMultiSortTableSettingsComponent_For_4_Template, 6, 1, "mat-chip-row", 5, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(5, "div", 6);
            i0.ɵɵelementStart(6, "div", 7, 0);
            i0.ɵɵlistener("click", function MatMultiSortTableSettingsComponent_Template_div_click_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.openDialog()); });
            i0.ɵɵprojection(8, 0, ["#menuRef", ""]);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, MatMultiSortTableSettingsComponent_ng_template_9_Template, 3, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disableSortIndicators);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.sort);
        } }, dependencies: [MatCheckboxModule, i1.MatCheckbox, CdkDropList, NgTemplateOutlet, MatTooltip, MatIcon, CdkDrag, CdkDragHandle, FormsModule, i2.NgControlStatus, i2.NgModel, MatChipSet, MatChipRow], styles: [".table-settings[_ngcontent-%COMP%]{display:flex}.table-settings[_ngcontent-%COMP%]   .table-settings-menu[_ngcontent-%COMP%]{margin:8px 16px}.table-settings-sort[_ngcontent-%COMP%]{margin:auto 0}.chip-content[_ngcontent-%COMP%]{display:flex;align-items:center}.chip-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{opacity:.6}.sorting[_ngcontent-%COMP%]{display:inline-block;margin:0 6px}.sorting[_ngcontent-%COMP%]:hover{cursor:pointer}.drag-chip[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12);background-color:#fff}.drag-chip[_ngcontent-%COMP%]:hover{cursor:move;background-color:#fff}.drag-chip[_ngcontent-%COMP%]:hover:after{opacity:0}.drag-chip[_ngcontent-%COMP%]:focus:after{opacity:0}.drag-chip-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .drag-chip[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list[_ngcontent-%COMP%]{max-height:70vh;overflow:auto;border-radius:4px;padding:1rem;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background-color:#fff;color:#000000de}.column-item[_ngcontent-%COMP%]{height:48px;display:flex;justify-content:flex-start;align-items:center;margin:1px;padding:0 16px 0 8px}.column-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:16px}.column-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{line-height:48px;color:#000000de;font-size:14px;font-weight:400}.column-item[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]:hover{cursor:grab;border-top:solid 1px rgba(0,0,0,.12);border-bottom:solid 1px rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:var(--mat-chip-container-shape-radius, 8px);box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;overflow:hidden}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-item[_ngcontent-%COMP%]:last-child{border:none}.column-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .column-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSortTableSettingsComponent, [{
        type: Component,
        args: [{ selector: 'mat-multi-sort-table-settings', imports: [MatCheckboxModule, CdkDropList, NgTemplateOutlet, MatTooltip, MatIcon, CdkDrag, CdkDragHandle, FormsModule, MatChipSet, MatChipRow], template: "<div class=\"table-settings\">\n  <div class=\"table-settings-sort\">\n    <mat-chip-set class=\"drag-chip-list\" cdkDropList cdkDropListOrientation='horizontal'\n      (cdkDropListDropped)=\"dropSort($event)\" [disabled]=\"disableSortIndicators\">\n      @for (item of sort; track item.id) {\n        <mat-chip-row class=\"drag-chip\" cdkDrag (removed)=\"remove(item.id)\"\n          (click)=\"updateDirection(item.id)\">\n          <div class=\"chip-content\">\n            @if (sortIndicatorRef) {\n              <ng-container\n                [ngTemplateOutlet]=\"sortIndicatorRef\"\n                [ngTemplateOutletContext]=\"{direction:item.direction, columnName: item.name }\">\n              </ng-container>\n            } @else {\n              <div>\n                {{item.name}}:\n                <div class=\"sorting\" [matTooltip]=\"sortToolTip\">\n                  {{item.direction}}\n                </div>\n              </div>\n            }\n            <mat-icon class=\"mat-mdc-chip-trailing-icon\" (click)=\"remove(item.id)\">cancel</mat-icon>\n          </div>\n        </mat-chip-row>\n      }\n    </mat-chip-set>\n  </div>\n  <div style=\"flex: 1 1 auto;\"></div>\n  <div #settingsMenu (click)=\"openDialog()\" class=\"table-settings-menu\">\n    <ng-content #menuRef></ng-content>\n  </div>\n</div>\n\n<ng-template #templateRef>\n  <div cdkDropList class=\"column-list\" (cdkDropListDropped)=\"drop($event)\">\n    @for (column of _tableData.columns; track column) {\n      <div class=\"column-item\" cdkDrag>\n        <mat-icon cdkDragHandle>drag_indicator</mat-icon>\n        <mat-checkbox [(ngModel)]=\"column.isActive\" (change)=\"toggle()\">{{column.name}}</mat-checkbox>\n      </div>\n    }\n  </div>\n</ng-template>\n", styles: [".table-settings{display:flex}.table-settings .table-settings-menu{margin:8px 16px}.table-settings-sort{margin:auto 0}.chip-content{display:flex;align-items:center}.chip-content mat-icon{opacity:.6}.sorting{display:inline-block;margin:0 6px}.sorting:hover{cursor:pointer}.drag-chip{border:solid 1px rgba(0,0,0,.12);background-color:#fff}.drag-chip:hover{cursor:move;background-color:#fff}.drag-chip:hover:after{opacity:0}.drag-chip:focus:after{opacity:0}.drag-chip-list.cdk-drop-list-dragging .drag-chip:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list{max-height:70vh;overflow:auto;border-radius:4px;padding:1rem;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background-color:#fff;color:#000000de}.column-item{height:48px;display:flex;justify-content:flex-start;align-items:center;margin:1px;padding:0 16px 0 8px}.column-item mat-icon{margin-right:16px}.column-item mat-checkbox{line-height:48px;color:#000000de;font-size:14px;font-weight:400}.column-item>mat-icon:hover{cursor:grab;border-top:solid 1px rgba(0,0,0,.12);border-bottom:solid 1px rgba(0,0,0,.12)}.cdk-drag-preview{box-sizing:border-box;border-radius:var(--mat-chip-container-shape-radius, 8px);box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;overflow:hidden}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-item:last-child{border:none}.column-list.cdk-drop-list-dragging .column-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
    }], null, { templateRef: [{
            type: ViewChild,
            args: ['templateRef', { static: true }]
        }], buttonRef: [{
            type: ViewChild,
            args: ['settingsMenu']
        }], sortIndicatorRef: [{
            type: ContentChild,
            args: ['sortIndicator', { static: false }]
        }], sortToolTip: [{
            type: Input
        }], closeDialogOnChoice: [{
            type: Input
        }], scrollStrategy: [{
            type: Input
        }], tableData: [{
            type: Input
        }], disableSortIndicators: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatMultiSortTableSettingsComponent, { className: "MatMultiSortTableSettingsComponent", filePath: "lib/mat-multi-sort-table-settings/mat-multi-sort-table-settings.component.ts", lineNumber: 21 }); })();

class MatMultiSortModule {
    static { this.ɵfac = function MatMultiSortModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MatMultiSortModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MatMultiSortModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MatDividerModule,
            DragDropModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatButtonModule,
            FormsModule,
            MatChipsModule,
            MatTooltipModule,
            MatDialogModule,
            MatMultiSortTableSettingsComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSortModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                exports: [],
                imports: [
                    CommonModule,
                    MatDividerModule,
                    DragDropModule,
                    MatIconModule,
                    MatCheckboxModule,
                    MatMenuModule,
                    MatButtonModule,
                    FormsModule,
                    MatChipsModule,
                    MatTooltipModule,
                    MatDialogModule,
                    MatMultiSort,
                    MatMultiSortHeaderComponent,
                    MatMultiSortTableSettingsComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatMultiSortModule, { imports: [CommonModule,
        MatDividerModule,
        DragDropModule,
        MatIconModule,
        MatCheckboxModule,
        MatMenuModule,
        MatButtonModule,
        FormsModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule,
        MatMultiSort,
        MatMultiSortHeaderComponent,
        MatMultiSortTableSettingsComponent] }); })();

class Settings {
    constructor(key) {
        this._key = key;
        this._columns = [];
        this._sortParams = [];
        this._sortDirs = [];
    }
    load() {
        const storedValue = localStorage.getItem(this._key);
        const value = storedValue ? JSON.parse(storedValue) : undefined;
        if (value) {
            this._columns = value._columns || [];
            this._sortDirs = value._sortDirs || [];
            this._sortParams = value._sortParams || [];
        }
    }
    save() {
        const settingsString = JSON.stringify(this);
        localStorage.setItem(this._key, settingsString);
    }
    get columns() {
        return this._columns;
    }
    get sortParams() {
        return this._sortParams;
    }
    get sortDirs() {
        return this._sortDirs;
    }
    get key() {
        return this._key;
    }
    set columns(columns) {
        this._columns = columns;
    }
    set sortParams(sortParams) {
        this._sortParams = sortParams;
    }
    set sortDirs(sortDirs) {
        this._sortDirs = sortDirs;
    }
}

class TableData {
    // TODO refactor
    constructor(columns, options) {
        this._displayedColumns = [];
        this.pageSize = 0;
        this.pageIndex = 0;
        this._totalElements = 0;
        this._key = '';
        this._nextObservable = new Subject();
        this._previousObservable = new Subject();
        this._sizeObservable = new Subject();
        this._sortObservable = new Subject();
        this._sortHeadersObservable = new Subject();
        this._columns = new BehaviorSubject(columns.map(c => { if (c.isActive === undefined) {
            c.isActive = true;
        } return c; }));
        if (options) {
            if (options.pageSizeOptions && options.pageSizeOptions.length < 1) {
                throw Error('Array of pageSizeOptions must contain at least one entry');
            }
            if (options.defaultSortParams) {
                options.defaultSortParams.map(s => {
                    if (this._columns.value.find(column => column.id === s) === undefined) {
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
            this._key = options.localStorageKey ?? '';
        }
        else {
            this._pageSizeOptions = [10, 20, 50, 100];
            this._sortParams = [];
            this._sortDirs = [];
        }
        this.init();
    }
    onSortEvent() {
        this._sortParams = this._dataSource.sort['actives'];
        this._sortDirs = this._dataSource.sort['directions'];
        this._clientSideSort();
        this._sortObservable.next();
        this.storeTableSettings();
    }
    onPaginationEvent($event) {
        const tmpPageSize = this.pageSize;
        this.pageSize = $event.pageSize;
        this.pageIndex = $event.pageIndex;
        if (tmpPageSize !== this.pageSize) {
            this._sizeObservable.next();
        }
        else if ($event.previousPageIndex !== undefined && $event.previousPageIndex < $event.pageIndex) {
            this._nextObservable.next();
        }
        else if ($event.previousPageIndex !== undefined && $event.previousPageIndex > $event.pageIndex) {
            this._previousObservable.next();
        }
    }
    updateSortHeaders() {
        // Dirty hack to display default sort column(s)
        const temp = Object.assign([], this._displayedColumns);
        this._sortHeadersObservable.next([]);
        this._sortHeadersObservable.next(temp);
        this._clientSideSort();
        this._sortObservable.next();
        this.storeTableSettings();
    }
    // this fixes an infine loop of rerendering
    subscribeSortHeaders() {
        this._sortHeadersObservable.pipe(delay(0), 
        // ignore when there is no update in the sort (params or dirs)
        filter(() => this._displayedSortDirs !== this.sortDirs && this._displayedSortParams !== this.sortParams), tap((column) => {
            // update the displayed sort when it is not the empty array
            if (column.length > 0) {
                this._displayedSortDirs = this.sortDirs;
                this._displayedSortParams = this.sortParams;
            }
        })).subscribe(columns => this._displayedColumns = columns);
    }
    init() {
        this.subscribeSortHeaders();
        if (this._key) {
            const settings = new Settings(this._key);
            settings.load();
            if (this._isLocalStorageSettingsValid(settings)) {
                // load column configuration from localstorage and update the name
                this.columns = settings.columns.map(storedColumn => {
                    return { ...storedColumn, name: this.columns.find(column => column.id === storedColumn.id)?.name ?? storedColumn.name };
                });
                this._sortDirs = settings.sortDirs;
                this._sortParams = settings.sortParams;
            }
            else {
                console.warn("Stored tableSettings are invalid. Using default");
            }
        }
        this.displayedColumns = this.columns.filter(c => c.isActive).map(c => c.id);
    }
    _clientSideSort() {
        this._dataSource.orderData();
    }
    _isLocalStorageSettingsValid(settings) {
        // check if number of columns matching
        if (settings.columns.length !== this._columns.value.length) {
            return false;
        }
        // check if columns are the same
        for (const column of settings.columns) {
            const match = this._columns.value.find(c => c.id === column.id);
            if (match === undefined) {
                return false;
            }
        }
        return true;
    }
    storeTableSettings() {
        if (this._key) {
            const settings = new Settings(this._key);
            settings.columns = this._columns.value;
            settings.sortParams = this._sortParams;
            settings.sortDirs = this._sortDirs;
            settings.save();
        }
    }
    set totalElements(totalElements) {
        this._totalElements = totalElements;
    }
    get totalElements() {
        return this._totalElements;
    }
    set displayedColumns(displayedColumns) {
        this._displayedColumns = displayedColumns;
        this._columns.next(this._columns.value.map(c => {
            c.isActive = this._displayedColumns.includes(c.id);
            return c;
        }));
    }
    get displayedColumns() {
        return this._displayedColumns;
    }
    set dataSource(dataSource) {
        this._dataSource = dataSource;
        if (this._sortParams.length > 0) {
            this._dataSource.sort.actives = this._sortParams;
            this._dataSource.sort.directions = this._sortDirs.map(v => v);
            this.updateSortHeaders();
        }
    }
    get dataSource() {
        return this._dataSource;
    }
    set data(data) {
        this._dataSource.data = data;
        this._clientSideSort();
    }
    set columns(v) {
        this._columns.next(v.map(c => { if (c.isActive === undefined) {
            c.isActive = true;
        } return c; }));
    }
    onColumnsChange() {
        return this._columns;
    }
    updateColumnNames(v) {
        const dict = {};
        v.forEach(c => dict[c.id] = c.name);
        this._columns.next(this._columns.value.map(c => { c.name = dict[c.id] || c.name; return c; }));
    }
    get nextObservable() {
        return this._nextObservable;
    }
    get previousObservable() {
        return this._previousObservable;
    }
    get sizeObservable() {
        return this._sizeObservable;
    }
    get sortObservable() {
        return this._sortObservable;
    }
    get sortParams() {
        return this._sortParams;
    }
    get sortDirs() {
        return this._sortDirs;
    }
    get columns() {
        return this._columns.value;
    }
    get pageSizeOptions() {
        return this._pageSizeOptions;
    }
    set sortParams(v) {
        this._sortParams = v;
        this._dataSource.sort.actives = this._sortParams;
    }
    set sortDirs(v) {
        this._sortDirs = v;
        this._dataSource.sort.directions = this._sortDirs.map(elem => elem);
    }
}

class MatMultiSortTableDataSource extends DataSource {
    constructor(sort, clientSideSorting = false) {
        super();
        this._data = new BehaviorSubject([]);
        this.sort = sort;
        this.clientSideSorting = clientSideSorting;
    }
    set data(data) {
        this._data.next(data);
    }
    get data() {
        return this._data.value;
    }
    connect() {
        return this._data;
    }
    disconnect() {
        this._data.complete();
    }
    orderData() {
        this._data.next(this.sortData(this._data.value, this.sort.actives, this.sort.directions));
    }
    sortData(data, actives, directions) {
        const _data = Object.assign(new Array(), data);
        if (this.clientSideSorting) {
            return _data.sort((i1, i2) => {
                return this._sortData(i1, i2, actives, directions);
            });
        }
        return _data;
    }
    _sortData(d1, d2, params, dirs) {
        // @ts-expect-error -- need a typesafe way to express these accessor operations, ts-ignore could be a solution
        // if there's not a suitable solution offered by typescript
        if (d1[params[0]] > d2[params[0]]) {
            return dirs[0] === 'asc' ? 1 : -1;
            // @ts-expect-error --- same
        }
        else if (d1[params[0]] < d2[params[0]]) {
            return dirs[0] === 'asc' ? -1 : 1;
        }
        else {
            if (params.length > 1) {
                params = params.slice(1, params.length);
                dirs = dirs.slice(1, dirs.length);
                return this._sortData(d1, d2, params, dirs);
            }
            else {
                return 0;
            }
        }
    }
}

/*
 * Public API Surface of mat-multi-sort
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatMultiSort, MatMultiSortHeaderComponent, MatMultiSortModule, MatMultiSortTableDataSource, MatMultiSortTableSettingsComponent, TableData };
//# sourceMappingURL=ngx-mat-multi-sort.mjs.map
