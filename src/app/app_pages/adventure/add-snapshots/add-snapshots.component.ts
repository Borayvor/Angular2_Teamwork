import { Component, OnInit, Input } from '@angular/core';

import { AdventureService } from './../../../app_core/services/adventure.service';
import { AlertService } from './../../../app_core/services/alert.service';
import { AuthenticationService } from './../../../app_core/services/authentication.service';

import { AdventureDataCreateModel } from '../../../app_core/models/adventure-data-create.model';
import { UserProfileModel } from './../../../app_core/models/user-profile.model';

@Component({
  selector: 'app-add-snapshots',
  templateUrl: './add-snapshots.component.html',
  styleUrls: ['./add-snapshots.component.css']
})
export class AddSnapshotsComponent implements OnInit, Input {
  private count: number;
  private model: AdventureDataCreateModel;
  private currentUser: UserProfileModel;

  constructor(
    private adventureService: AdventureService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService
  ) {
    this.count = 1
    this.model = new AdventureDataCreateModel;
  }

  @Input() adventureId: string;

  ngOnInit() {
    
  }

  addAdventurePhoto() {
    this.currentUser = this.authenticationService.getCurrentUser();
    this.model.ownerId = this.currentUser.objectId;
    this.adventureService.addSnapshotToAdventure(this.adventureId, this.model);
  }

}
