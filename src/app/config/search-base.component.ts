import { Component, Input } from "@angular/core";

@Component({
  template: ''
})
export class SearchBaseComponent {
  @Input() searchTerm?: string;
}
