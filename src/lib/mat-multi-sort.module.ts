import { NgModule } from '@angular/core';
import { MatMultiSort } from './mat-multi-sort.directive';
import { MatMultiSortHeaderComponent } from './mat-multi-sort-header/mat-multi-sort-header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatMultiSortTableSettingsComponent } from './mat-multi-sort-table-settings/mat-multi-sort-table-settings.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    MatMultiSortHeaderComponent,
    MatMultiSort,
    MatMultiSortTableSettingsComponent,
  ],
  exports: [
    MatMultiSortHeaderComponent,
    MatMultiSort,
    MatMultiSortTableSettingsComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatDividerModule,
    DragDropModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class MatMultiSortModule {
}
