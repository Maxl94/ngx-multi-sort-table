import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TableData } from '../table-data';


@Component({
  selector: 'mat-multi-sort-table-settings',
  templateUrl: './mat-multi-sort-table-settings.component.html',
  styleUrls: ['./mat-multi-sort-table-settings.component.scss']
})
export class MatMultiSortTableSettingsComponent implements OnInit {
  _columns: { id: string, name: string, isActive: boolean }[];
  _tableData: TableData<any>;
  sort = [];

  @Input()
  sortToolTip: string;

  @Input()
  set tableData(tableData: TableData<any>) {
    this._tableData = tableData;
    this._columns = tableData.columns.map(c => {
      return { id: c.id, name: c.name, isActive: true };
    });
  }


  constructor() { }

  ngOnInit(): void {
    this.sort = this.getSort();
    this._tableData.sortObservable.subscribe(() => this.sort = this.getSort());
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this._columns, event.previousIndex, event.currentIndex);
    this._tableData.displayedColumns = this._columns.filter(c => c.isActive).map(c => c.id);
  }

  dropSort(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sort, event.previousIndex, event.currentIndex);
    this.updateSort();
  }

  toggle() {
    this._tableData.displayedColumns = this._columns.filter(c => {
      if (!c.isActive) {
        this.sort = this.sort.filter(s => s.id !== c.id);
        console.log(this.sort, c.id);
      }

      return c.isActive;
    }).map(c => c.id);
    this.updateSort();
  }

  getSort(): { id: string, name: string, direction: string }[] {
    const sorting = [];
    for (let i = 0; i < this._tableData.sortParams.length; i++) {
      sorting.push({
        id: this._tableData.sortParams[i],
        name: this._columns.find(c => c.id === this._tableData.sortParams[i]).name,
        direction: this._tableData.sortDirs[i]
      });
    }
    return sorting;
  }

  remove(id: string) {
    this.sort = this.sort.filter(v => v.id !== id);
    this.updateSort();
  }

  updateDirection(id: string) {
    const i = this.sort.findIndex(v => v.id === id);
    if (this.sort[i].direction === 'asc') {
      this.sort[i].direction = 'desc';
    } else {
      this.sort[i].direction = 'asc';
    }
    this.updateSort();
  }

  private updateSort() {
    this._tableData.sortParams = this.sort.map(v => v.id);
    this._tableData.sortDirs = this.sort.map(v => v.direction);
    this._tableData.updateSortheaders();
  }
}


