import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMultiSortHeaderComponent } from './mat-multi-sort-header.component';

describe('MatMultiSortHeaderComponent', () => {
  let component: MatMultiSortHeaderComponent;
  let fixture: ComponentFixture<MatMultiSortHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatMultiSortHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMultiSortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
