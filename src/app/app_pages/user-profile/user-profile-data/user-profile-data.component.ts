import { Component, OnInit, Input } from '@angular/core';

import { UserProfileModel } from './../../../app_core/models/user-profile.model';
import { AdventureModel } from './../../../app_core/models/adventure.model';

@Component({
  selector: '[app-user-profile-data]',
  templateUrl: './user-profile-data.component.html',
  styleUrls: ['./user-profile-data.component.css']
})
export class UserProfileDataComponent implements OnInit, Input {
  
  constructor() { }

  @Input() user: UserProfileModel;
  @Input() userAdventures: AdventureModel[];
  @Input() adventuresCount: number;

  ngOnInit() {    
  }

}
