import { Type } from '@angular/core';
import { SearchBaseComponent } from './search-base.component';

export class SearchComponentRegistration {
  constructor(public component: Type<SearchBaseComponent>) {}
}
