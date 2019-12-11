import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TableData } from 'projects/mat-multi-sort/src/lib/table-data';
import { MatMultiSort } from 'mat-multi-sort';
import { UserData, DummyService } from './dummy.service';
import { MatMultiSortTableDataSource } from 'projects/mat-multi-sort/src/public_api';



/**
 * TODO overwrite MatDataSource to work with rest api
 */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress'];

  table: TableData<UserData>;
  @ViewChild(MatMultiSort, { static: false }) sort: MatMultiSort;


  constructor(
    private dummyService: DummyService
  ) {
    this.table = new TableData<UserData>(
      [
        { id: 'id', name: 'ID' },
        { id: 'name', name: 'Name' },
        { id: 'progress', name: 'Progess' }
      ], { defaultSortParams: ['name'], defaultSortDirs: ['asc'] }
    );


  }

  ngOnInit() {
    this.table.nextObservable.subscribe(() => { this.getData(); });
    this.table.nextObservable.subscribe(() => { this.getData(); });
    this.table.previousObservable.subscribe(() => { this.getData(); });
    this.table.sizeObservable.subscribe(() => { this.getData(); });

    setTimeout(() => {
      this.table.dataSource = new MatMultiSortTableDataSource(this.sort);
      this.getData();
    }, 0);
  }


  getData() {
    const res = this.dummyService.list(this.table.sortParams, this.table.sortDirs, this.table.pageIndex, this.table.pageSize);
    this.table.totalElements = res.totalElements;
    this.table.pageIndex = res.page;
    this.table.pageSize = res.pagesize;
    this.table.tableData = res.users;
  }

}
