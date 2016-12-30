import {
  Component,
  OnInit,
  DoCheck,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { AdventureDataModel } from './../../../app_core/models/adventure-data.model';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css'],
  animations: [
    trigger('snapshotState', [
      state('inactive', style({ transform: 'translateX(0) scale(1)' })),
      state('active', style({ transform: 'translateX(0) scale(1.1)' })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({ transform: 'translateX(100%) scale(1)' }),
        animate(500)
      ]),
      transition('inactive => void', [
        animate(500, style({ transform: 'translateX(-100%) scale(1)' }))
      ]),
      transition('void => active', [
        style({ transform: 'translateX(0) scale(0)' }),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({ transform: 'translateX(0) scale(0)' }))
      ])
    ])
  ]
})
export class SnapshotComponent implements OnInit, DoCheck, Input {
  private state: string;
  private maxPositions: number;
  private currentPosition: number;
  private isCurrentPosition: boolean;

  constructor() {
    this.state = 'inactive';
    this.maxPositions = 10;
    this.currentPosition = 1;
    this.isCurrentPosition = false;
  }

  @Input('adventureDataModel') snapshot: AdventureDataModel;
  @Input() author: string;

  ngOnInit() {
    this.isCurrentPosition = this.snapshot.position === this.currentPosition;
  }

  ngDoCheck() {
    // if (this.isCurrentPosition) {
      
    // } else {
    //   this.isCurrentPosition = this.snapshot.position === this.currentPosition;
    // }
  }

  toggleState() {

    this.state = this.state === 'inactive' ? 'active' : 'inactive';
    console.log(this.snapshot.position);
    this.currentPosition += this.currentPosition === this.maxPositions ? -(this.maxPositions - 1) : 1;
    this.isCurrentPosition = this.snapshot.position === this.currentPosition;
    console.log(this.snapshot.position);

  }

}
