import { Component, OnInit } from '@angular/core';
import { Search1Service } from './search1.service';
import { SearchBaseComponent } from '../config/search-base.component';
import { SearchComponentType } from '../config/search-component-type.decorator';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css'],
})
@SearchComponentType('Search1Component')
export class Search1Component implements SearchBaseComponent, OnInit {
  data: string[] = [];
  data2 = ['test1', 'test2', 'test3'];

  constructor(private search1Service: Search1Service) {}

  ngOnInit() {
    this.search1Service.getSerch1Data().subscribe((data) => {
      this.data = data;
    });
  }
}
