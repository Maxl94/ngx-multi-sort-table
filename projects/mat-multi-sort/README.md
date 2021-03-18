# NgxMultiSortTable

This is the implementation for a multiple sortable table based on the Angular Material Design. The focus is on server-side loaded and sorted data. Next to that the library provides some useful classes to reduce the duplicated code when using the material `paginator`.
The code is based on [Francisco Arantes Rodrigues](https://github.com/farantesrodrigues) repository [repo](https://github.com/farantesrodrigues/ng-mat-multi-sort), so thanks for your great work.

I am happy to announce the angular 11 version of this library, special credits go to [Dominik](https://github.com/Dafnik), who made this possible. If you still need the angular 8 or 10 version, you can build it locally (there is a angular 8 & 10 branch) or just use version 0.1.9 for latest angular 8 version or 0.2.1 the latest angular 10 version.


## Discussion: 

**I like to improve the library, so please use [this](https://github.com/Maxl94/ngx-multi-sort-table/issues/33) thread, if you have any feature requests, bug fixes or suggest api changes.**


## Demo
To run the demo:
1.  `clone` the repository
2. `cd ngx-multi-sort-table`
3. `npm install`
4. `ng build multi-sort-table`
5. `ng serve`

![demo gif](demo.gif)

## Update News

### Version 0.4.0
- Replaced mat-menu for the table settings with a dialog. You are no able to control the closing behavior via `[closeDialogOnChoice]="false"` in the `<mat-multi-sort-table-settings>`. The default is set to `true`. Thanks go to  - thanks to [Lotec724], who did most of the work

### Version 0.3.0
- Updated to Angular 11, the version should be backward compatible. Special credits again go to [Dominik](https://github.com/Dafnik).
- Fixed some typos in the docs

### Version 0.2.1
- Fixed bug, where an unset sortParams and sortDirs in the options lead to an exception
- Fixed bug, where clicks on the header where handled twice - thanks to [Hellysonrp](https://github.com/Hellysonrp)
- Fixed bug, where column was unselected in table-settings, but still visible in column - thanks to [Lotec724](https://github.com/Lotec724)
- some smaller improvements, spelling improvements - thanks to [bsongis](https://github.com/bsongis)

### Version 0.2.0
- Angular 10 now supported. Special credits go to [Dominik](https://github.com/Dafnik), who made this possible
  

## Documentation
### TableData
The `TableData` an an useful class, which handles a lot of work for your app, such as page events (`next`, `previous`, `sizeChange`) and sorting event. Next to that it keeps the current state of the table, again sorting and pagination.

#### Properties

| Name               | Description                                                                                                                                           | default                          | Exampe                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------- |
| columns            | An array of the displayed columns of the table with `id`: name of the attribute and `name`: Name to display in the header                             | `none`                           | `[{ id: 'first_name', name: 'First Name' }]` |
| displayedColumns   | An array of the currently displayed columns (`id`) and their order                                                                                    | `all columns`                    |                                              |
| dataSource         | A `MatMultiSortTableDataSource`, which is special `DataSource` for sorting. Only accesable via getter and setter                                      | `none`                           |                                              |
| data               | The table data of the dataSource                                                                                                                      | `Array<T>`                        |
| pageSize           | The current selected pageSize                                                                                                                         | first entry of `pageSizeOptions` |                                              |
| pageSizeOptions    | The options for the pageSize, which the user can see in the menu                                                                                      | `[10, 20, 50, 100]`              |                                              |
| pageIndex          | The index of the page                                                                                                                                 | `0`                              |                                              |
| totalElements      | The total number of elements of the table, must be set from your component                                                                             | `none`                           |                                              |
| sortParams         | An Array of the columns (`id`), which the user had chosen to sort. The order of the sorting is represented by the order of the `id`s in the parameter | `[]`                             | `['first_name', 'last_name']`                |
| sortDirs           | An Array of the column's sort-directions, which the user had chosen to sort. The order is the same like `sortParams`                                   | `[]`                             | `['asc', 'desc']`                            |
| nextObservable     | An `Observable` that fires, when the user clicks the `next` button                                                                                    |                                  |                                              |
| previousObservable | An `Observable` that fires, when the user clicks the `previous` button                                                                                |                                  |                                              |
| sizeObservable     | An `Observable` that fires, when the user changes the `pageSize`                                                                                      |                                  |                                              |
| sortObservable     | An `Observable` that fires, when the user changes the sorted columns or direction                                                                     |                                  |                                              |

#### Methods

| Name | Description | Parameter |
| ---- | ----------- | --------- |
| constructor       | The constructor for the for the class, where you initialize your `columns`. Optionally, you can add the default `id`s of the default sort colum and direction. If `defaultSortParams` are provided, but not the directions `asc` will be default | `columns`: Array<{ id: string, name: string }>, `options`: { `defaultSortParams?`: string[], `defaultSortDirs?`: string[], `pageSizeOptions?`: number[],  `totalElements?`: number } |
| onSortEvent       | The method to bind to the `matSortChange` output of the table                                                                                                                                                                                   | none                                                                                                                                                                                 |
| onPaginationEvent  | The method to bin to the `page` output of the `mat-paginator`                                                                                                                                                                                   | `$event`: PageEvent                                                                                                                                                                  |
| updateSortheaders | The method triggers a rerendering of the headers to show the sorting directions correctly. The functions forces a complete new render of the data, what is not optimal, but only working solution right now.                                   | none                                                                                                                                                                                 |
| updateColumnNames | The method allows you to change the displayed name of the columns|{ `id:` string, `name:` string }[]|


### MatMultiSortHeaderComponent
This component manages the sorting of the table. To use the multi-sort add `matMultiSort` to your table and pass the `mat-multi-sort-header="<your-column-id>"` to the `<th mat-header-cell>`.

### MatMultiSortTableSettingsComponent
This component display some settings for your table. The user can select the columns he wants to see in his table, next to that he can change the order of the columns. Additionally, the component shows the current chosen sorting columns as chips above the table.
The user can easyly change the sorting order by drag and drop the chips and also change the sorting direction of each column. 

| Name        | Description                                                          | Parameter          |
| ----------- | -------------------------------------------------------------------- | ------------------ |
| tableData   | An input of `tableData` object which holds the complete table state | @Input: TableData |
| sortToolTip | A input test for the tooltip to show up over the sorting chips       | @Input: string     |

### MatMultiSortTableDataSource
This is the datasource of the MultiSortTable, it works like the ` MatTableDataSource`´.

| Name| Description| Parameter|
| - | - | - |
| constructor | The constructor of the class | `sort:` MatMultiSort, `clientSideSorting:` boolean = false |


## Example code for the template
```html
<mat-multi-sort-table-settings [tableData]="table" sortToolTip="Sortierreihenfole ändern"  [closeDialogOnChoice]="false">>
  <button mat-stroked-button>
    Spalten bearbeiten &nbsp;
    <mat-icon>menu</mat-icon>
  </button>
</mat-multi-sort-table-settings>
<table mat-table [dataSource]="table.dataSource" matMultiSort (matSortChange)="table.onSortEvent()">

    <!-- Create all your columns with *ngfor, this is the lazy way out and only works if the display of the data does not differ -->
    <ng-container *ngFor="let column of table.columns" [matColumnDef]="column.id">
      <th mat-header-cell *matHeaderCellDef [mat-multi-sort-header]="column.id"> {{column.name}} </th>
      <td mat-cell *matCellDef="let row"> {{row[column.id]}} </td>
    </ng-container>

    <!-- Or define your in a normal, more individuell way -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef mat-multi-sort-header="id"> ID </th>
      <td mat-cell *matCellDef="let row"> {{row.id}} </td>
    </ng-container>

    <ng-container matColumnDef="progress">
      <th mat-header-cell *matHeaderCellDef mat-multi-sort-header="progress"> Progress </th>
      <td mat-cell *matCellDef="let row"> {{row.progress}} % </td>
    </ng-container>

    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef mat-multi-sort-header="name"> Name </th>
      <td mat-cell *matCellDef="let row"> {{row.name}} </td>
    </ng-container>

  <tr mat-header-row *matHeaderRowDef="table.displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: table.displayedColumns;">
  </tr>
</table>
<mat-paginator [pageSize]="table.pageSize" [pageIndex]="table.pageIndex" [pageSizeOptions]="table.pageSizeOptions"
  [length]="table.totalElements ? table.totalElements : 0" (page)="table.onPagnationEvent($event)" [disabled]="CLIENT_SIDE">
</mat-paginator>
```
## Example code for the component.ts

```typescript
export class AppComponent implements OnInit {
  CLIENT_SIDE = true;

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
      this.getOfflineData();
    } else {
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
```

