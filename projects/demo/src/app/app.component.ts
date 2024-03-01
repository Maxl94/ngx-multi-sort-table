import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {MatMultiSort, MatMultiSortTableDataSource, TableData} from 'mat-multi-sort';
import {DummyService} from './dummy.service';

class UserData {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  CLIENT_SIDE = true;
  CLOSE_MENU_BEHAVIOR = true;
  TOGGLE_INDICATOR_ICONS = true;

  table: TableData<UserData>;
  @ViewChild(MatMultiSort) sort!: MatMultiSort;

  constructor(
    private dummyService: DummyService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.table = new TableData<UserData>(
      [
        { id: 'id', name: 'ID' },
        { id: 'name', name: 'Name' },
        { id: 'progress', name: 'Progess' }
      ], { localStorageKey: 'settings' }
    );
  }

  ngOnInit() {
    this.table.nextObservable.subscribe(() => { this.getData(); });
    this.table.sortObservable.subscribe(() => { this.getData(); });
    this.table.previousObservable.subscribe(() => { this.getData(); });
    this.table.sizeObservable.subscribe(() => { this.getData(); });
    this.changeDetectorRef.detectChanges()
    this.initData();
  }

  initData() {
    this.table.dataSource = new MatMultiSortTableDataSource(this.sort, this.CLIENT_SIDE);
    this.table.displayedColumns = ['id', 'name', 'progress'];
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
