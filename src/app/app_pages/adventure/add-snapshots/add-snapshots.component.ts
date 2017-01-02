import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../../app_core/services/adventure.service';

import { AdventureDataCreateModel } from '../../../app_core/models/adventure-data-create.model';
import { UserProfileModel } from './../../../app_core/models/user-profile.model';

@Component({
  selector: 'app-add-snapshots',
  templateUrl: './add-snapshots.component.html',
  styleUrls: ['./add-snapshots.component.css']
})
export class AddSnapshotsComponent implements OnInit {
  private count: number;
  private model: AdventureDataCreateModel;
  private currentUser: UserProfileModel;

  constructor(
    private adventureService: AdventureService
  ) {
    this.count = 1
    this.model = new AdventureDataCreateModel;
  }

  ngOnInit() {
    
  }

  addAdventureImage() {
  }

}
