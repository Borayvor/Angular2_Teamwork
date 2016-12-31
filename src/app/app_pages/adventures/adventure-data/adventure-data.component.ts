import { Component, OnInit, Input } from '@angular/core';

import { AdventureHomeModel } from './../../../app_core/models/adventure-home.model';
import { AdventureDataModel } from './../../../app_core/models/adventure-data.model';

@Component({
  selector: '[app-adventure-data]',
  templateUrl: './adventure-data.component.html',
  styleUrls: ['./adventure-data.component.css']
})
export class AdventureDataComponent implements OnInit, Input {
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
