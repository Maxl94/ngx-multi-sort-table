import { NgModule } from '@angular/core';
import { MatMultiSort } from './mat-multi-sort.directive';
import { MatMultiSortHeaderComponent } from './mat-multi-sort-header/mat-multi-sort-header.component';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatMultiSortTableSettingsComponent } from './mat-multi-sort-table-settings/mat-multi-sort-table-settings.component';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';


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
