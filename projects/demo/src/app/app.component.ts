import {ChangeDetectorRef, Component, ViewChild, inject, OnInit} from '@angular/core';
import {
  MatMultiSort,
  MatMultiSortHeaderComponent,
  MatMultiSortTableDataSource,
  MatMultiSortTableSettingsComponent,
  TableData
} from 'mat-multi-sort';
import {DummyService} from './dummy.service';
import {MatCheckbox} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

class UserData {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MatCheckbox,
    FormsModule,
    MatMultiSortTableSettingsComponent,
    MatButton,
    MatTooltip,
    MatIcon,
    MatTable,
    MatMultiSort,
    MatColumnDef,
    MatHeaderCell,
    MatMultiSortHeaderComponent,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatPaginator
],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private dummyService = inject(DummyService);
  private changeDetectorRef = inject(ChangeDetectorRef);

  CLIENT_SIDE = true;
  CLOSE_MENU_BEHAVIOR = true;
  TOGGLE_INDICATOR_ICONS = true;

  table: TableData<UserData>;
  @ViewChild(MatMultiSort) sort!: MatMultiSort;

  constructor() {
    this.table = new TableData<UserData>(
      [
        { id: 'id', name: 'ID' },
        { id: 'name', name: 'Name' },
        { id: 'progress', name: 'Progess' }
      ], {
        localStorageKey: 'settings',
        defaultSortDirs: ['asc', 'desc'],
        defaultSortParams: ['id', 'name']
      }
    );
  }

  ngOnInit() {
    this.table.nextObservable.subscribe(() => { this.getData(); });
    this.table.sortObservable.subscribe(() => { this.getData(); });
    this.table.previousObservable.subscribe(() => { this.getData(); });
    this.table.sizeObservable.subscribe(() => { this.getData(); });
    this.changeDetectorRef.detectChanges();
    this.initData();
  }

  initData() {
    this.table.dataSource = new MatMultiSortTableDataSource(this.sort, this.CLIENT_SIDE);
    if (this.CLIENT_SIDE) {
      this.table.updateColumnNames([
        { id: 'id', name: 'Inter ID' },
        { id: 'name', name: 'Name des Mitarbeiter' },
        { id: 'progress', name: 'Fortschritt' }
      ]);
      this.getOfflineData();
    } else {
      this.table.updateColumnNames([
        { id: 'id', name: 'ID' },
        { id: 'name', name: 'Name' },
        { id: 'progress', name: 'Progress' }
      ]);
      this.table.pageSize = 10;
      this.getData();
    }
  }


  getData() {
    if (!this.CLIENT_SIDE) {
      const res = this.dummyService.list(this.table.sortParams, this.table.sortDirs, this.table.pageIndex, this.table.pageSize);
      this.table.totalElements = res.totalElements;
      this.table.pageIndex = res.page;
      this.table.pageSize = res.pagesize;
      this.table.data = res.users;
    }

  }

  getOfflineData() {
    const res = this.dummyService.list([], [], 0, 25);
    this.table.totalElements = 25;
    this.table.pageIndex = res.page;
    this.table.pageSize = res.pagesize;
    this.table.data = res.users;
  }

}
