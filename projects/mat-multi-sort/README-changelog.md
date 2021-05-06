# Old Versions
### Version 0.4.0
- Replaced mat-menu for the table settings with a dialog. You are no able to control the closing behavior via `[closeDialogOnChoice]="false"` in the `<mat-multi-sort-table-settings>`. The default is set to `true`. Thanks to [Lotec724](https://github.com/Lotec724), who did most of the work.

### Version 0.3.1
- Updated readme

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
  
### Version 0.1.9
- **IMPORTANT: This is the last version supporting Angular 8!**
- fixed readme

### Version 0.1.8
- several security fixes
- fixed readme

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