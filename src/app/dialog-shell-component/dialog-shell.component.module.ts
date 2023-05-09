import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogShellComponent } from './dialog-shell.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [DialogShellComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [DialogShellComponent],
  providers: [DialogService],
})
export class MatDialogShellComponentModule {}
