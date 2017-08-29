import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hk-component-host]'
})
export class ComponentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
