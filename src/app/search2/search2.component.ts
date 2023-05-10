import { Component, Input, OnInit } from '@angular/core';
import { SearchBaseComponent } from '../config/search-base.component';
import { SearchComponentType } from '../config/search-component-type.decorator';
import { Observable, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css'],
})
@SearchComponentType('Search2Component')
export class Search2Component implements SearchBaseComponent, OnInit {

  @Input() searchTerm$ = new Subject<string>();

  ngOnInit(): void { }
}
