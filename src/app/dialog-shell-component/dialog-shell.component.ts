import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-shell-component',
  templateUrl: './dialog-shell.component.html',
  styleUrls: ['./dialog-shell.component.css'],
})
export class DialogShellComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogShellComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
