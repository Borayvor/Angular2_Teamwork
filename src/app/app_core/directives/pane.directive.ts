import { Directive, Input } from '@angular/core';

@Directive({ selector: '[pane]' })
export class Pane {
  @Input() id: string;
}