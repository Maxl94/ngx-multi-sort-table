# Old Versions
### Version 0.7.4
- Security fixes

### Version 0.7.3
- Making the scrollStrategy of the overlay configurable. Thanks to [Lotec724](https://github.com/Lotec724).

### Version 0.7.2
- Fixed bug where settings dialog was to large and not scrollable, if table has many columns. Thanks to [Lotec724](https://github.com/Lotec724).

### Version 0.7.1
- Fixed update to Angular 12. Thanks to [SlasherZet](https://github.com/SlasherZet) and [Hellyson Rodrigo Parteka ](https://github.com/Hellysonrp).

### Version 0.7.0
- Update to Angular 12. Thanks to [Hellyson Rodrigo Parteka](https://github.com/Hellysonrp).
- Security Updates

### Version 0.6.2
- Security Updates

### Version 0.6.1
- Security Updates

### Version 0.6.0
- Added support for custom content in the settings chip list (when icons are desired instead of 'asc | desc' labels i.g.) Thanks to [khalil khalil ](https://github.com/khalilof)
- Extended the example to showcase the icons as sort indicators instead of text labels Thanks to [khalil khalil ](https://github.com/khalilof)
- Security Updates

### Version 0.5.3
- Fixed bug where position of settings dialog was calculated wrong, if placed in some nested element witch has a relative or absolute position. Thanks to [forbik0](https://github.com/forbik0).
- Fixed bug where defaultSortParams could not get set via TableData constructor.

### Version 0.5.2
- Security update

### Version 0.5.1
- Updated readme

### Version 0.5.0
- Added support to store the table settings in localStorage. Just add a key e.g. `{ localStorageKey: 'settings' }` for the storage item with in the `constructor options` of the `TableData` object. See the code example on the bottom.

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