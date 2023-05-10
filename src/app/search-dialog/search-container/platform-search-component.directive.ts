import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[platformSearchComponent]',
})
export class PlatformSearchComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
