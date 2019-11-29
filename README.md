# NgxMultiSortTable

This is the implementation for a multiple sortable table based on the Angluar Material Design. The focus is on server-side loaded and sorted data. Next to that the libarry provides some unsefull classes to reduce the duplicated code when useing the material `paginator`.
The code is based on [Francisco Arantes Rodrigues](https://github.com/farantesrodrigues) repository [repo](https://github.com/farantesrodrigues/ng-mat-multi-sort), so thanks for your great work.

The provied example is based on Angular 8 and Angular Material 8, I have not tested previous versions.

Client side multi sorting is not implementes yet, it might follow in the future or feel free to make a pull request.

## Demo
To run the demo:
1.  `clone` the repository
2. `cd ngx-multi-sort-table`
3. `npm install`
4. `ng build multi-sort-table`
5. `ng serve`


## Documentation
### TableData
The `TabelData` an an use full class, which handels a lot of work for your app, such as page events (`next`, `previous`, `sizeChange`) and sorting event. Next to that it keeps the current state of the table, again sorting and pagnation.

#### Properties

| Name               | Description                                                                                                                                           | default                          | Exampe                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------- |
| columns            | An array of the displayed columns of the table with `id`: name of the attribute and `name`: Name to display in the header                             | `none`                           | `[{ id: 'first_name', name: 'First Name' }]` |
| displayedColumns   | An array of the currently displayed columns (`id`) and their order                                                                                    | `all columns`                    |                                              |
| dataSource         | A `MatMultiSortTableDataSource`, which is special `DataSource` for sorting                                                                            | `none`                           |                                              |
| pageSize           | The current selected pageSize                                                                                                                         | first entry of `pageSizeOptions` |                                              |
| pageSizeOptions    | The options for the pageSize, which the user can see in the menu                                                                                      | `[10, 20, 50, 100]`              |                                              |
|                    |                                                                                                                                                       |                                  |                                              |
| pageIndex          | The index of the page                                                                                                                                 | `0`                              |                                              |
| totalElements      | The total number of elemnts of the table, must be set from your component                                                                             | `none`                           |                                              |
| sortParams         | An Array of the columns (`id`), which the user had chosen to sort. The order of the sorting is represented by the order of the `id`s in the parameter | `[]`                             | `['first_name', 'last_name']`                |
| sortDirs           | An Array of the column's sortdirections, which the user had chosen to sort. The order is the same like `sortParams`                                   | `[]`                             | `['asc', 'desc']`                            |
| nextObservable     | An `Observable` that fires, when the users clicks the `next` button                                                                                   |                                  |                                              |
| previousObservable | An `Observable` that fires, when the users clicks the `previous` button                                                                               |                                  |                                              |
| sizeObservable     | An `Observable` that fires, when the users changes the `pageSize`                                                                                     |                                  |                                              |
| sortObservable     | An `Observable` that fires, when the users changes the sorted columns or direction                                                                    |                                  |                                              |

#### Methods

| Name          | Description                                                                                       | Parameter                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `constructor` | The constructor for the for the class, where you initalize your `columns` and the `totalElements` | `columns`: columns, `totalElements`: number, `options`: { `defaultSortParams`: string[], `defaultSortDirs`: string[], `pageSizeOptions`: number[] } |
|               |
