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
import { debounceTime, distinctUntilChanged, filter, of, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
})
export class SearchContainerComponent
  implements OnInit, OnDestroy, AfterContentInit
{
  searchComponentRegistration!: SearchComponentRegistration;
  searchComponent!: SearchBaseComponent;
  searchModule!: Type<NgModule>;

  store = Store;
  selected?: ComponentModuleCombo;

  @ViewChild(PlatformSearchComponentDirective, { static: true })
  platformSearchComponent!: PlatformSearchComponentDirective;

  options: string[] = Object.keys(Store);

  form = new FormGroup({
    searchTerm: new FormControl('', { nonNullable: true }),
    selectedComponent: new FormControl(null),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SearchContainerComponent>,
    private injector: Injector
  ) {}

  ngOnInit(): void {

    this.form.get('selectedComponent')?.valueChanges.pipe(
      tap(v => console.log('selected', v))
    ).subscribe();
    this.form.get('searchTerm')!.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      filter(t => !!t),
      tap(v => console.log('search', v)),
      tap(v => this.searchComponent?.searchTerm$.next(v))
    ).subscribe();

    this
  }

  ngOnDestroy(): void {}

  ngAfterContentInit(): void {}

  initializeSearchComponent() {
    const viewContainerRef = this.platformSearchComponent.viewContainerRef;
    viewContainerRef.clear();

    const modRef = createNgModule(this.searchModule, this.injector);

    this.searchComponent = viewContainerRef.createComponent<SearchBaseComponent>(
      this.searchComponentRegistration?.component!,
      {
        ngModuleRef: modRef,
      }
    ).instance;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelectComponent(event: any) {
    this.searchComponentRegistration = new SearchComponentRegistration(
      Store[event.value].component
    );
    this.searchModule = Store[event.value].module;

    this.initializeSearchComponent();
  }
}
