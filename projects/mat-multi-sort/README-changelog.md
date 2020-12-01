# Old Versions

### Version 0.1.7
- removed `<mat-divider></mat-divider>` from `mat-multi-sort-table-settings`.

### Version 0.1.6
- New method `updateColumNames`, that allows you to dynamicly update the displayed names of your columns
- Some smaller internal imrpovments and fixes

### Version 0.1.5
- Bugfix for client-side sorting
- Updated docs

### Version 0.1.4
- Client-side sorting is now available. To use it, just set the flag in the constructor of the `MatMultiSortTableDataSource`.
  
  **Don't use `pagenation`, when client-side sorting is active!** 
  
  Sorting is only working for the active page. Activating it might lead to negativ user experience! If you need pagnation use the normal sorting mode and provide the data in a way like the `DummyService` of the demo.