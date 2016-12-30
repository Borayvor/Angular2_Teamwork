import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[animationChangeState]'
})
export class ChangeStateDirective {

  constructor(private el: ElementRef) { }

@HostListener('click') onMouseEnter() {
    this.state();
  }

  private state() {
    this.el.nativeElement.value = '';
  }
}
