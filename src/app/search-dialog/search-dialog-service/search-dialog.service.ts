import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Search1Component } from 'src/app/search1/search1.component';
import { SearchComponentRegistration } from 'src/app/config/search-component-registration';
import { Search1ComponentModule } from 'src/app/search1/search1.component.module';
import { SearchContainerComponent } from '../search-container/search-container.component';

@Injectable({
  providedIn: 'root',
})
export class SearchDialogService {
  private dialogRef!: MatDialogRef<SearchContainerComponent>;

  constructor(private dialog: MatDialog) {}

  open() {
    this.dialogRef = this.dialog.open(SearchContainerComponent, {});
  }
}
