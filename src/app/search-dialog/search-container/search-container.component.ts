import {
  AfterContentInit,
  Component,
  Inject,
  Injector,
  Input,
  NgModule,
  NgModuleRef,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  createNgModule,
} from '@angular/core';
import { SearchComponentRegistration } from 'src/app/config/search-component-registration';
import { PlatformSearchComponentDirective } from './platform-search-component.directive';
import { SearchBaseComponent } from 'src/app/config/search-base.component';
import { Search1ComponentModule } from 'src/app/search1/search1.component.module';
import { SearchContainerComponentModule } from './search-container.component.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComponentModuleCombo, Store } from 'src/app/config/store';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
})
export class SearchContainerComponent
  implements OnInit, OnDestroy, AfterContentInit {
  searchComponent!: SearchComponentRegistration;
  searchModule!: Type<NgModule>;

  store = Store;
  selected?: ComponentModuleCombo;

  @ViewChild(PlatformSearchComponentDirective, { static: true })
  platformSearchComponent!: PlatformSearchComponentDirective;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SearchContainerComponent>,
    private injector: Injector) {
    this.searchComponent = data.component;
    this.searchModule = data.module;
  }

  ngOnInit(): void {
    this.initializeSearchComponent();
  }

  ngOnDestroy(): void { }

  ngAfterContentInit(): void { }

  initializeSearchComponent(): void {
    const viewContainerRef = this.platformSearchComponent.viewContainerRef;
    viewContainerRef.clear();

    const modRef = createNgModule(this.searchModule, this.injector);

    const componentRef = viewContainerRef.createComponent<SearchBaseComponent>(
      this.searchComponent?.component!,
      {
        ngModuleRef: modRef
      }
    );
    componentRef.instance.data = this.searchComponent?.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
