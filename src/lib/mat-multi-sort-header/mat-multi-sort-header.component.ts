import {
  Component,
  Input,
  ChangeDetectorRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  inject,
  InjectionToken
} from '@angular/core';
import {MatSort, MatSortHeader, MatSortHeaderIntl} from '@angular/material/sort';
import { MatMultiSort } from '../mat-multi-sort.directive';
import { FocusMonitor } from '@angular/cdk/a11y';


/** Column definition associated with a `MatSortHeader`. */
interface C2MatSortHeaderColumnDef {
  name: string;
}

@Component({
// eslint-disable-next-line @angular-eslint/component-selector
  selector: '[mat-multi-sort-header]',
  exportAs: 'matMultiSortHeader',
  templateUrl: './mat-multi-sort-header.component.html',
  styleUrls: ['./mat-multi-sort-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [],
  providers: [{provide: MatSort, useExisting: MatMultiSort}],
})
export class MatMultiSortHeaderComponent extends MatSortHeader {
  _intl: MatSortHeaderIntl;
  _mySort?: MatMultiSort;
  _myColumnDef?: C2MatSortHeaderColumnDef;

  start = 'asc' as 'asc' | 'desc';
  @Input('mat-multi-sort-header') id: string = '';

  constructor() {
    const _intl = inject(MatSortHeaderIntl);
    const changeDetectorRef = inject(ChangeDetectorRef);
    const _sort = inject(MatMultiSort, { optional: true });
    const _columnDef = inject<C2MatSortHeaderColumnDef>(new InjectionToken('C2_SORT_HEADER_COLUMN_DEF'), { optional: true });
    const _focusMonitor = inject(FocusMonitor);
    const _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

    super(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef);

    this._intl = _intl;
    if(_sort) this._mySort = _sort;
    if(_columnDef) this._myColumnDef = _columnDef;
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

  getSortDirection(): 'asc' | 'desc' | '' {
    const i = this._mySort ? this._mySort.actives.findIndex(activeIds => activeIds === this.id) : 0;
    const direction = this._mySort ? this._mySort.directions[i] : 'asc';
    return this._isSorted() ? direction : (this.start || (this._mySort && this._mySort.start));
  }
}
