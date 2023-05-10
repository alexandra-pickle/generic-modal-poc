import {
  AfterContentInit,
  Component,
  Inject,
  Injector,
  NgModule,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  createNgModule,
} from '@angular/core';
import { SearchComponentRegistration } from 'src/app/config/search-component-registration';
import { PlatformSearchComponentDirective } from './platform-search-component.directive';
import { SearchBaseComponent } from 'src/app/config/search-base.component';
import { SearchContainerComponentModule } from './search-container.component.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComponentModuleCombo, Store } from 'src/app/config/store';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
})
export class SearchContainerComponent
  implements OnInit, OnDestroy, AfterContentInit
{
  searchComponent!: SearchComponentRegistration;
  searchModule!: Type<NgModule>;

  store = Store;
  selected?: ComponentModuleCombo;

  @ViewChild(PlatformSearchComponentDirective, { static: true })
  platformSearchComponent!: PlatformSearchComponentDirective;

  options: string[] = Object.keys(Store);

  form = new FormGroup({
    searchTerm: new FormControl(''),
    selectedComponent: new FormControl(null),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SearchContainerComponent>,
    private injector: Injector
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  ngAfterContentInit(): void {}

  initializeSearchComponent() {
    const viewContainerRef = this.platformSearchComponent.viewContainerRef;
    viewContainerRef.clear();

    const modRef = createNgModule(this.searchModule, this.injector);

    const componentRef = viewContainerRef.createComponent<SearchBaseComponent>(
      this.searchComponent?.component!,
      {
        ngModuleRef: modRef,
      }
    );
    // componentRef.instance.searchTerm = this.searchComponent?.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelectComponent(event: any) {
    this.searchComponent = new SearchComponentRegistration(
      Store[event.value].component
    );
    this.searchModule = Store[event.value].module;

    this.initializeSearchComponent();
  }
}
