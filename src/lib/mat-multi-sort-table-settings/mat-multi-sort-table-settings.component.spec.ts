import { ComponentFixture, TestBed} from '@angular/core/testing';

import { MatMultiSortTableSettingsComponent } from './mat-multi-sort-table-settings.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
