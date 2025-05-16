import {Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { TableData } from '../table-data';
import {BlockScrollStrategy, Overlay, OverlayRef, ScrollStrategy, ViewportRuler} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipRow, MatChipSet} from '@angular/material/chips';
import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';


@Component({
    selector: 'mat-multi-sort-table-settings',
    templateUrl: './mat-multi-sort-table-settings.component.html',
    styleUrls: ['./mat-multi-sort-table-settings.component.scss'],
  imports: [MatCheckboxModule, CdkDropList, NgTemplateOutlet, MatTooltip, MatIcon, NgForOf, CdkDrag, NgIf, CdkDragHandle, FormsModule, MatChipSet, MatChipRow]
})
export class MatMultiSortTableSettingsComponent implements OnInit {
  _tableData!: TableData<unknown>;
  sort: { id: string, name: string, direction: string }[] = [];
  overlayRef!: OverlayRef;

  @ViewChild('templateRef', { static: true }) private templateRef!: TemplateRef<HTMLElement>;

  @ViewChild('settingsMenu') buttonRef!: ElementRef;

  @ContentChild('sortIndicator', { static: false }) sortIndicatorRef!: TemplateRef<unknown>;

  @Input()
  sortToolTip: string = '';

  @Input()
  closeDialogOnChoice = true;

  @Input()
  scrollStrategy: ScrollStrategy = new BlockScrollStrategy(this.viewportRuler, document);

  @Input()
  set tableData(tableData: TableData<unknown>) {
    this._tableData = tableData;
  }

  @Input()
  disableSortIndicators = false;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef, private viewportRuler: ViewportRuler) { }

  ngOnInit(): void {
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

  drop(event: CdkDragDrop<string[]>) {
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

  dropSort(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sort, event.previousIndex, event.currentIndex);
    this.updateSort();
  }

  getSort(): { id: string, name: string, direction: string }[] {
    const sorting: { id: string, name: string, direction: string }[] = [];
    for (let i = 0; i < this._tableData.sortParams.length; i++) {
      sorting.push({
        id: this._tableData.sortParams[i],
        name: this._tableData.columns.find(c => c.id === this._tableData.sortParams[i])?.name ?? '',
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


