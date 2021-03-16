import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMultiSortColumnDialogComponent } from './mat-multi-sort-column-dialog.component';

describe('MatMultiSortColumnDialogComponent', () => {
  let component: MatMultiSortColumnDialogComponent;
  let fixture: ComponentFixture<MatMultiSortColumnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatMultiSortColumnDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMultiSortColumnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
