import {
  Component,
  Input,
  ChangeDetectorRef,
  Optional,
  Inject,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef
} from '@angular/core';
import {MatSort, matSortAnimations, MatSortHeader, MatSortHeaderIntl} from '@angular/material/sort';
import { MatMultiSort } from '../mat-multi-sort.directive';
import { FocusMonitor } from '@angular/cdk/a11y';


/** Column definition associated with a `MatSortHeader`. */
interface C2MatSortHeaderColumnDef {
  name: string;
}

@Component({
  selector: '[mat-multi-sort-header]',
  exportAs: 'matMultiSortHeader',
  templateUrl: './mat-multi-sort-header.component.html',
  styleUrls: ['./mat-multi-sort-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  animations: [
    matSortAnimations.indicator,
    matSortAnimations.leftPointer,
    matSortAnimations.rightPointer,
    matSortAnimations.arrowOpacity,
    matSortAnimations.arrowPosition,
    matSortAnimations.allowChildren
  ],
  providers: [{provide: MatSort, useExisting: MatMultiSort}],
})
export class MatMultiSortHeaderComponent extends MatSortHeader {
  start = 'asc' as 'asc' | 'desc';
  @Input('mat-multi-sort-header') id!: string;

  constructor(public _intl: MatSortHeaderIntl,
    changeDetectorRef: ChangeDetectorRef,
    @Optional() public _sort: MatMultiSort,
    @Inject('C2_SORT_HEADER_COLUMN_DEF') @Optional() public _columnDef: C2MatSortHeaderColumnDef,
    _focusMonitor: FocusMonitor,
    _elementRef: ElementRef<HTMLElement>) {
    super(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef);
  }

  _disableViewStateAnimation = false;

  _isSorted() {
    return this._sort.actives.findIndex(activeId => activeId === this.id) > -1;
  }

  _sortId() {
    return this._sort.actives.findIndex(activeId => activeId === this.id) + 1;
  }

  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }

  getSortDirection(): 'asc' | 'desc' | '' {
    const i = this._sort.actives.findIndex(activeIds => activeIds === this.id);
    const direction = this._sort.directions[i];
    return this._isSorted() ? direction : (this.start || this._sort.start);
  }

  _getArrowViewState() {
    return undefined;
  }

  _getArrowDirectionState() {
    return undefined;
  }
}
