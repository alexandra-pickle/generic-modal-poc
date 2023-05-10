import { NgModule, Type } from '@angular/core';
import { Search1Component } from '../search1/search1.component';
import { SearchBaseComponent } from './search-base.component';
import { Search1ComponentModule } from '../search1/search1.component.module';
import { Search2Component } from '../search2/search2.component';
import { Search2ComponentModule } from '../search2/search2-component.module';

export interface ComponentModuleCombo {
  component: Type<SearchBaseComponent>;
  module: Type<NgModule>;
}

export const Store: { [key: string]: ComponentModuleCombo } = {
  search1: { component: Search1Component, module: Search1ComponentModule },
  search2: { component: Search2Component, module: Search2ComponentModule },
};
