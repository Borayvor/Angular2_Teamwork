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
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({
          opacity: 0,
          width: '*',
          height: '*',
          transform: 'translateX(0) scale(1)'
        }),
        animate('1.2s 1s ease-in')
      ]),
      transition('* => void', [
        animate('0.9s ease-out', style({
          opacity: 0,          
          transform: 'translateX(0) scale(0)'
        }))
      ])
    ])
  ]
})
export class SnapshotComponent implements OnInit, Input, Output { 

  constructor() {   
  }

  @Input('adventureDataModel') snapshot: AdventureDataModel;
  @Input() isShow: boolean;
  @Input() author: string;
  @Input() position: number;
  @Output() show = new EventEmitter<boolean>();


  ngOnInit() {    
  }

  toggleShow() {
    this.isShow = !this.isShow;
    this.show.emit(this.isShow);
    this.isShow = !this.isShow;
  }

}
