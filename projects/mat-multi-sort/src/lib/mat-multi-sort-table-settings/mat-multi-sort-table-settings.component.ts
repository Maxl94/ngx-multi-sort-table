import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TableData } from '../table-data';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatMultiSortColumnDialogComponent } from '../mat-multi-sort-column-dialog/mat-multi-sort-column-dialog.component';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'mat-multi-sort-table-settings',
  templateUrl: './mat-multi-sort-table-settings.component.html',
  styleUrls: ['./mat-multi-sort-table-settings.component.scss']
})
export class MatMultiSortTableSettingsComponent implements OnInit {
  _tableData: TableData<any>;
  sort = [];
  dialogRef: MatDialogRef<any>;

  @ViewChild('settingsMenu') buttonRef: ElementRef;

  @ContentChild('sortIndicator', { static: false }) sortIndicatorRef: TemplateRef<any>;

  @Input()
  sortToolTip: string;

  @Input()
  closeDialogOnChoice = true;

  @Input()
  set tableData(tableData: TableData<any>) {
    this._tableData = tableData;
  }


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.sort = this.getSort();
    this._tableData.sortObservable.subscribe(() => this.sort = this.getSort());
    this._tableData.onColumnsChange().subscribe(() => this.sort = this.getSort());
  }

  openDialog() {
    if (this.dialogRef) { return; }
    const button = this.buttonRef.nativeElement;
    const posRight: number = window.innerWidth - (button.getBoundingClientRect().left + button.offsetWidth + 16);
    const posTop: number = button.getBoundingClientRect().top + button.offsetHeight;

    this.dialogRef = this.dialog.open(MatMultiSortColumnDialogComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'column-dialog',
      position: { right: `${posRight}px`, top: `${posTop}px` },
      data: { tableData: this._tableData, sort: this.sort, closeOnChoice: this.closeDialogOnChoice }
    });
    this.dialogRef.backdropClick().subscribe(() => this.dialogRef.close());
    this.dialogRef.afterClosed().pipe(finalize(() => this.dialogRef = null)).subscribe();
  }

  dropSort(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sort, event.previousIndex, event.currentIndex);
    this.updateSort();
  }

  getSort(): { id: string, name: string, direction: string }[] {
    const sorting = [];
    for (let i = 0; i < this._tableData.sortParams.length; i++) {
      sorting.push({
        id: this._tableData.sortParams[i],
        name: this._tableData.columns.find(c => c.id === this._tableData.sortParams[i]).name,
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
    this._tableData.updateSortHeaders();
  }
}


