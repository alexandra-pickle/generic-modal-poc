import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Search1Service {
  constructor() {}

  getSerch1Data(): Observable<string[]> {
    return of(['data1', 'data2', 'data3']);
  }
}
