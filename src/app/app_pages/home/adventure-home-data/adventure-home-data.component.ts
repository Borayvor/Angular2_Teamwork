import { Component, OnInit, Input } from '@angular/core';

import { AdventureHomeModel } from './../../../app_core/models/adventure-home.model';
import { AdventureDataModel } from './../../../app_core/models/adventure-data.model';

@Component({
  selector: '[app-adventure-home-data]',
  templateUrl: './adventure-home-data.component.html',
  styleUrls: ['./adventure-home-data.component.css']
})
export class AdventureHomeDataComponent implements OnInit, Input {
  private adventureData: AdventureDataModel; 

  constructor() { }

  ngOnInit() {
  }  

  @Input() adventure: AdventureHomeModel;

  get adventureTitlePhoto(): string {    
    return this.adventure.titlePhoto;
  }

  get name(): string {
    return this.adventure.name;
  }

  get description(): string {
    return this.adventure.description;
  }

  get created(): number {
    return this.adventure.created;
  }  

}
