import { Injectable } from '@angular/core';

const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: number;
  name: string;
  progress: number;
}

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  users: UserData[];

  constructor() {
    this.users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
  }

  list(sorting: string[] = [], dirs: string[] = [], page = 0, pagesize = 20) {
    const tempUsers = Object.assign([], this.users);
    const result = {
      users: [],
      page: page,
      pagesize: pagesize,
      totalElements: tempUsers.length
    };

    if (sorting.length === 0) {
      result.users = tempUsers.slice(page * pagesize, (page + 1) * pagesize);
    } else if (sorting.length > 0) {
      const sortedUsers = tempUsers.sort((u1, u2) => {
        return this._sortData(u1, u2, sorting, dirs);
      });
      result.users = sortedUsers.slice(page * pagesize, (page + 1) * pagesize);
    }

    return result;
  }

  _sortData(d1: UserData, d2: UserData, sorting: string[], dirs: string[]): number {
    if (d1[sorting[0]] > d2[sorting[0]]) {
      return dirs[0] === 'asc' ? 1 : -1;
    } else if (d1[sorting[0]] < d2[sorting[0]]) {
      return dirs[0] === 'asc' ? -1 : 1;
    } else {
      if (sorting.length > 1) {
        sorting = sorting.slice(1, sorting.length);
        dirs = dirs.slice(1, dirs.length);
        return this._sortData(d1, d2, sorting, dirs);
      } else {
        return 0;
      }
    }
  }

}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';


  return {
    id: id,
    name,
    progress: Math.round(Math.random() * 100),
  };
}
