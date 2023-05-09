import { Component, OnInit } from '@angular/core';
import { Search1Service } from './search1.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css'],
})
export class Search1Component implements OnInit {
  data: string[] = [];

  constructor(private search1Service: Search1Service) {}

  ngOnInit() {
    this.search1Service.getSerch1Data().subscribe((data) => {
      this.data = data;
    });
  }
}
