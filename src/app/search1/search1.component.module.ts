import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search1Component } from './search1.component';
import { Search1Service } from './search1.service';

@NgModule({
  imports: [CommonModule],
  declarations: [Search1Component],
  exports: [Search1Component],
  providers: [Search1Service],
})
export class Search1ComponentModule {}
