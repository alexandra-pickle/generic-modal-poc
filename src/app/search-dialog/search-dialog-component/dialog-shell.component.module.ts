import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogShellComponent } from './dialog-shell.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchContainerComponentModule } from '../search-container/search-container.component.module';

@NgModule({
  declarations: [DialogShellComponent],
  imports: [CommonModule, MatDialogModule, SearchContainerComponentModule],
  exports: [DialogShellComponent],
})
export class DialogShellComponentModule {}
