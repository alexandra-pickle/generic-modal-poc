import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { PlatformSearchComponentDirective } from './platform-search-component.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SearchContainerComponent, PlatformSearchComponentDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [SearchContainerComponent],
})
export class SearchContainerComponentModule {}
