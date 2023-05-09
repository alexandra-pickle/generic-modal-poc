import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, first, from } from 'rxjs';
import { DialogShellComponent } from './dialog-shell.component';
import { Search1Component } from '../search1/search1.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogRef!: MatDialogRef<DialogShellComponent>;

  constructor(private dialog: MatDialog) {}

  open(value: string) {
    this.loadComponent(value)
      .pipe(first())
      .subscribe((component: any) => {
        this.dialogRef = this.dialog.open(DialogShellComponent, {
          data: { component: component },
        });
      });
  }

  private loadComponent(type: string): Observable<any> {
    if (type === 'Search1') {
      return from(
        import('../search1/search1.component').then((m) => m.Search1Component)
      );
    } else if (type === 'Search2') {
      return from(
        import('../search2/search2.component').then((m) => m.Search2Component)
      );
    } else {
      throw new Error();
    }
  }
}
