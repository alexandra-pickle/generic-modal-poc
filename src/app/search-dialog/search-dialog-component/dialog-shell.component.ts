import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchComponentRegistration } from 'src/app/config/search-component-registration';

@Component({
  selector: 'app-dialog-shell-component',
  templateUrl: './dialog-shell.component.html',
  styleUrls: ['./dialog-shell.component.css'],
})
export class DialogShellComponent {
  searchComponent!: SearchComponentRegistration;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogShellComponent>
  ) {
    this.searchComponent = data.component;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
