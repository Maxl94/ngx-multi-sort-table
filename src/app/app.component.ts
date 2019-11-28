import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatMultiSort } from 'mat-multi-sort';
import { orderBy, partialRight } from 'lodash';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  date: Date;
}


const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

const NAMES: string[] = ['000Maia', 'Asher', '111Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'date'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatMultiSort) sort: MatMultiSort;

  constructor() {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortData = this.sortData;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
  }

  sortingDataAccessor(data: UserData, sortHeaderId: string): string | number {
    const value = (data as { [key: string]: any })[sortHeaderId];
    switch (sortHeaderId) {
      case 'id':
        return Number(value);
      case 'name':
        return value.replace('000', '').replace('111', '');
      case 'progress':
        return Number(value);
      case 'color':
        return value;
      case 'date':
        return value.toLocaleString();
      default:
        return value;
    }
  }

  sortData(data: UserData[], sort: MatMultiSort): UserData[] {
    const actives = sort.actives.map(headerId => partialRight(this.sortingDataAccessor, headerId));
    const directions = sort.directions as 'asc' | 'desc'[];
    return orderBy(data, actives, directions);
  };

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  const date = new Date(+(new Date()) - Math.floor(Math.random() * 100000000000));

  return {
    id: id.toString(),
    name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    date
  };
}