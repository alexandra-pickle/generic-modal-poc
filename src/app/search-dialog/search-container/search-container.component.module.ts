import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { PlatformSearchComponentDirective } from './platform-search-component.directive';

@NgModule({
  declarations: [SearchContainerComponent, PlatformSearchComponentDirective],
  imports: [CommonModule],
  exports: [SearchContainerComponent],
})
export class SearchContainerComponentModule {}
