import {AfterViewInit, Directive, OnChanges, OnInit} from '@angular/core';
import { MatSort, MatSortable, SortDirection } from '@angular/material/sort';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[matMultiSort]',
    exportAs: 'matMultiSort'
})
export class MatMultiSort extends MatSort implements OnInit {

  start = 'asc' as 'asc' | 'desc';
  private _allDirections: SortDirection[] = ['asc', 'desc'];

  directions: SortDirection[] = [];
  actives: string[] = [];

  ngOnInit(): void {
    super.ngOnInit();
  }

  sort(sortable: MatSortable): void {
    this.updateMultipleSorts(sortable);
    super.sort(sortable);
  }

  updateMultipleSorts(sortable: MatSortable): void {
    const i = this.actives.findIndex(activeId => activeId === sortable.id);

    if (this.isActive(sortable)) {
      if (this.activeDirection(sortable) === (sortable.start ? sortable.start : this.start)) {
        this.directions.splice(i, 1, this.getNextSortDirection(sortable));
      } else {
        this.actives.splice(i, 1);
        this.directions.splice(i, 1);
      }
    } else {
      this.actives.push(sortable.id);
      this.directions.push(sortable.start ? sortable.start : this.start);
    }
  }

  isActive(sortable: MatSortable) {
    const i = this.actives.findIndex(activeId => activeId === sortable.id);
    return i > -1;
  }

  activeDirection(sortable: MatSortable): 'asc' | 'desc' {
    const i = this.actives.findIndex(activeId => activeId === sortable.id);
    return this.directions[i] || (sortable.start ? sortable.start : this.start);
  }

  getNextSortDirection(sortable: MatSortable): SortDirection {
    const i = this._allDirections.indexOf(this.activeDirection(sortable));
    return this._allDirections[(i + 1) % this._allDirections.length];
  }
}
