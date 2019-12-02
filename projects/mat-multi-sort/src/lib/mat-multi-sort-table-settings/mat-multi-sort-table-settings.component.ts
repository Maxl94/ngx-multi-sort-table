import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'mat-multi-sort-table-settings',
  templateUrl: './mat-multi-sort-table-settings.component.html',
  styleUrls: ['./mat-multi-sort-table-settings.component.scss']
})
export class MatMultiSortTableSettingsComponent {
  _columns: { id: string, name: string, isActive: boolean }[];

  @Input() set columns(columns: { id: string, name: string, pipe?: string }[]) {
    this._columns = columns.map(c => {
      return { id: c.id, name: c.name, pipe: c.pipe ? c.pipe : '', isActive: true };
    });
  }
  @Output() activeColumnsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this._columns, event.previousIndex, event.currentIndex);
    this.activeColumnsChange.emit(this._columns.filter(c => c.isActive).map(c => c.id));
  }

  toggle() {
    this.activeColumnsChange.emit(this._columns.filter(c => c.isActive).map(c => c.id));
  }
}


