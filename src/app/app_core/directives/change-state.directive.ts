import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[animationChangeState]'
})
export class ChangeStateDirective {

  constructor(private el: ElementRef) { }

  @Input() id: number;

}
