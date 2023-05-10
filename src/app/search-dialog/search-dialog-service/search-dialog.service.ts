import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, first, from } from 'rxjs';
import {
  DialogShellComponentModule,
  DialogShellComponent,
} from '../search-dialog-component';
import { Search1Component } from 'src/app/search1/search1.component';
import { SearchComponentRegistration } from 'src/app/config/search-component-registration';

@Injectable({
  providedIn: 'root',
})
export class SearchDialogService {
  private dialogRef!: MatDialogRef<DialogShellComponent>;

  constructor(private dialog: MatDialog) {}

  open(value: string) {
    this.dialogRef = this.dialog.open(DialogShellComponent, {
      data: {
        component: new SearchComponentRegistration(Search1Component, []),
      },
    });
    /*     this.loadComponent(value)
      .pipe(first())
      .subscribe((component: any) => {
        this.dialogRef = this.dialog.open(DialogShellComponent, {
          data: { component: component },
        });
      }); */
  }

  /*   private loadComponent(type: string): Observable<any> {
    if (type === 'Search1') {
      return from(
        import('../../search1/search1.component').then(
          (m) => m.Search1Component
        )
      );
    } else if (type === 'Search2') {
      return from(
        import('../../search2/search2.component').then(
          (m) => m.Search2Component
        )
      );
    } else {
      throw new Error();
    }
  } */
}
