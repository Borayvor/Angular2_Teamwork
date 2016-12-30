import { Component, OnInit, ViewChild } from '@angular/core';

import { Pane } from './../../app_core/directives/pane.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'About';
  }

  @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => { this.selectedPane = v.id; }, 0);
  }
  selectedPane: string = '';
  shouldShow = true;
  toggle() { this.shouldShow = !this.shouldShow; }

}
