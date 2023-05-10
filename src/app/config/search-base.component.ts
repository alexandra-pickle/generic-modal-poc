import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  template: '',
})
export class SearchBaseComponent {
  @Input() searchTerm$?: Observable<string>;
}
