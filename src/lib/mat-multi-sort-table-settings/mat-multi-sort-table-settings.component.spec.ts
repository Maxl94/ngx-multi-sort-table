import { ComponentFixture, TestBed} from '@angular/core/testing';

import { MatMultiSortTableSettingsComponent } from './mat-multi-sort-table-settings.component';
import { TableData } from 'src/public_api';

describe('MatMultiSortTableComponent', () => {
  let component: MatMultiSortTableSettingsComponent;
  let fixture: ComponentFixture<MatMultiSortTableSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMultiSortTableSettingsComponent);
    component = fixture.componentInstance;
    component.tableData = new TableData([{id: 'id1', name: 'name1', isActive: true}], {
      localStorageKey: 'storage_key'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component._tableData).toBeTruthy();
  });

  it('should update column name on init', () => {
    expect(component._tableData.columns[0].name).toBe('name1');

    const modifiedTableData = new TableData([{id: 'id1', name: 'name1_new', isActive: true}], {
      localStorageKey: 'storage_key'
    });

    expect(modifiedTableData.columns[0].name).toBe('name1_new');
  });
});
