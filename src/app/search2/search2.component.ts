import { Component, Input } from '@angular/core';
import { SearchBaseComponent } from '../config/search-base.component';
import { SearchComponentType } from '../config/search-component-type.decorator';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css'],
})
@SearchComponentType('Search2Component')
export class Search2Component implements SearchBaseComponent {
  //  @Input() searchTerm?: string;
}
