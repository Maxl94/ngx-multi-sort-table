import { NgModule } from '@angular/core';
import { MatMultiSort } from './mat-multi-sort.directive';
import { MatMultiSortHeaderComponent } from './mat-multi-sort-header/mat-multi-sort-header.component';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatTableModule, MatDividerModule, MatIconModule, MatCheckboxModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatMultiSortTableSettingsComponent } from './mat-multi-sort-table-settings/mat-multi-sort-table-settings.component';


@NgModule({
  declarations: [MatMultiSortHeaderComponent, MatMultiSort, MatMultiSortTableSettingsComponent],
  exports: [MatMultiSortHeaderComponent, MatMultiSort, MatMultiSortTableSettingsComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatTableModule,
    MatDividerModule,
    DragDropModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule
  ]
})
export class MatMultiSortModule { }
