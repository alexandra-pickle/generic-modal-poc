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

  open(value: string) {
    this.dialogRef = this.dialog.open(SearchContainerComponent, {
      data: {
        component: new SearchComponentRegistration(Search1Component, []),
        module: Search1ComponentModule
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
