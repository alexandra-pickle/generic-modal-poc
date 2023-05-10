import { Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  template: '',
})
export class SearchBaseComponent {
  @Input() searchTerm$!: Subject<string>;
}
