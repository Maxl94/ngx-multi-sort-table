import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatMultiSort, MatMultiSortTableDataSource, TableData } from 'mat-multi-sort';
import { DummyService, UserData } from './dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  CLIENT_SIDE = true;
  CLOSE_MENU_BEHAVIOR = true;
  TOGGLE_INDICATOR_ICONS = false;

  table: TableData<UserData>;
  @ViewChild(MatMultiSort) sort: MatMultiSort;


  constructor(
    private dummyService: DummyService
  ) {
    this.table = new TableData<UserData>(
      [
        { id: 'id', name: 'ID' },
        { id: 'name', name: 'Name' },
        { id: 'progress', name: 'Progess' },
        { id: 'a', name: 'A' },
        { id: 'b', name: 'B' },
        { id: 'c', name: 'C' },
        { id: 'd', name: 'D' },
        { id: 'e', name: 'E' },
        { id: 'f', name: 'F' },
        { id: 'g', name: 'G' },
        { id: 'h', name: 'H' },
        { id: 'i', name: 'I' },
        { id: 'j', name: 'J' },
        { id: 'k', name: 'K' },
        { id: 'l', name: 'L' },
        { id: 'm', name: 'M' },
        { id: 'n', name: 'N' },
        { id: 'o', name: 'O' },
        { id: 'p', name: 'P' },
        { id: 'q', name: 'Q' },
        { id: 'r', name: 'R' },
        { id: 's', name: 'S' },
        { id: 't', name: 'T' },
        { id: 'u', name: 'U' },
        { id: 'v', name: 'V' },
        { id: 'w', name: 'W' },
        { id: 'x', name: 'X' },
        { id: 'y', name: 'Y' },
        { id: 'z', name: 'Z' },
      ], { localStorageKey: 'settings' }
    );
  }

  ngOnInit() {
    this.table.nextObservable.subscribe(() => { this.getData(); });
    this.table.sortObservable.subscribe(() => { this.getData(); });
    this.table.previousObservable.subscribe(() => { this.getData(); });
    this.table.sizeObservable.subscribe(() => { this.getData(); });

    setTimeout(() => {
      this.initData();
    }, 0);
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
