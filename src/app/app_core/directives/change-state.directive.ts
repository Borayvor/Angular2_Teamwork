import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[animationChangeState]'
})
export class ChangeStateDirective {

  constructor() { }

  @Input() snapshotPosition: string;

}
