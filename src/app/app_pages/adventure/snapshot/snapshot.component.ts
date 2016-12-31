import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
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
      // state('inactive', style({ transform: 'translateX(0) scale(1)' })),
      // state('active', style({ transform: 'translateX(0) scale(1.1)' })),
      // transition('inactive => active', animate('100ms ease-in')),
      // transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({ transform: 'translateX(100%) scale(1)' }),
        animate(500)
      ]),
      transition('inactive => void', [
        animate(500, style({ transform: 'translateX(-100%) scale(1)' }))
      ]),
      transition('void => active', [
        style({ transform: 'translateX(0) scale(0)' }),
        animate(500)
      ]),
      transition('active => void', [
        animate(500, style({ transform: 'translateX(0) scale(0)' }))
      ])
    ])
  ]
})
export class SnapshotComponent implements OnInit, Input, Output {
  //private isCurrentPosition: boolean;
  private currentPosition: number;
  private maxPositions: number;
  private state: string;

  constructor() {
    this.state = 'inactive';
    this.currentPosition = 1;
    this.maxPositions = 10;
    //this.isCurrentPosition = true;
  }

  @Input('adventureDataModel') snapshot: AdventureDataModel;
  @Input() isShow: boolean;
  @Output() show = new EventEmitter<boolean>();
  @Input() author: string;

  ngOnInit() {
    //this.isCurrentPosition = this.snapshot.position === this.currentPosition;
  }

  ngDoCheck() {

  }

  toggleState() {    
    this.currentPosition += this.currentPosition === this.maxPositions ? -(this.maxPositions - 1) : 1;
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
    this.isShow = !this.isShow;
    this.show.emit(this.isShow);
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

}
