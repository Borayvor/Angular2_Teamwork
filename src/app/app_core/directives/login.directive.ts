import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {

  constructor(private el: ElementRef) { }


  private login() {
    this.el.nativeElement.value = '';
  }
}
