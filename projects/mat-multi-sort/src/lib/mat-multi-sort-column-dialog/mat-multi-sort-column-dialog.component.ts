import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TableData} from '../table-data';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'mat-multi-sort-column-dialog',
  templateUrl: './mat-multi-sort-column-dialog.component.html',
  styleUrls: ['./mat-multi-sort-column-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatMultiSortColumnDialogComponent implements OnInit {

  _tableData: TableData<any>;
  sort = [];
  closeOnChoice: boolean;

  constructor(private dialogRef: MatDialogRef<MatMultiSortColumnDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this._tableData = data.tableData;
    this.sort = data.sort;
    this.closeOnChoice = data.closeOnChoice;
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this._tableData.columns, event.previousIndex, event.currentIndex);
    this._tableData.displayedColumns = this._tableData.columns.filter(c => c.isActive).map(c => c.id);
  }

  toggle() {
    this._tableData.displayedColumns = this._tableData.columns.filter(c => {
      if (!c.isActive) {
        this.sort = this.sort.filter(s => s.id !== c.id);
        console.log(this.sort, c.id);
      }

      return c.isActive;
    }).map(c => c.id);
    this.updateSort();
  }

  private updateSort() {
    this._tableData.sortParams = this.sort.map(v => v.id);
    this._tableData.sortDirs = this.sort.map(v => v.direction);
    this._tableData.updateSortheaders();
    if (this.closeOnChoice) {
      this.dialogRef.close();
    }
  }

}
