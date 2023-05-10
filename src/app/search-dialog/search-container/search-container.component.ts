import {
  AfterContentInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SearchComponentRegistration } from 'src/app/config/search-component-registration';
import { PlatformSearchComponentDirective } from './platform-search-component.directive';
import { SearchBaseComponent } from 'src/app/config/search-base.component';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
})
export class SearchContainerComponent
  implements OnInit, OnDestroy, AfterContentInit
{
  @Input() searchComponent!: SearchComponentRegistration | null;

  @ViewChild(PlatformSearchComponentDirective, { static: true })
  platformSearchComponent!: PlatformSearchComponentDirective;

  constructor() {}

  ngOnInit(): void {
    this.initializeSearchComponent();
  }

  ngOnDestroy(): void {}

  ngAfterContentInit(): void {}

  initializeSearchComponent(): void {
    const viewContainerRef = this.platformSearchComponent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<SearchBaseComponent>(
      this.searchComponent?.component!
    );
    componentRef.instance.data = this.searchComponent?.data;
  }
}
