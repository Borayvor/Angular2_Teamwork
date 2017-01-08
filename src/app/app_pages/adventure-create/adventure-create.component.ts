import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from './../../app_core/services/alert.service';
import { AdventureService } from './../../app_core/services/adventure.service';
import { AuthenticationService } from './../../app_core/services/authentication.service';
import { UploadPhotoService } from './../../app_core/services/upload-photo.service';

import { AdventureCreateModel } from './../../app_core/models/adventure-create.model';
import { AdventureDataCreateModel } from './../../app_core/models/adventure-data-create.model';
import { AdventureModel } from './../../app_core/models/adventure.model';
import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-adventure-create',
  templateUrl: './adventure-create.component.html',
  styleUrls: ['./adventure-create.component.css'],

})
export class AdventureCreateComponent implements OnInit {
  private title: string;
  private currentUser: UserProfileModel;
  private adventureModel: AdventureCreateModel;
  private adventureDataModel: AdventureDataCreateModel;
  private newAdventure: AdventureModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private adventureService: AdventureService,
    private authenticationService: AuthenticationService,
    private uploadPhotoService: UploadPhotoService    
  ) {
    this.adventureModel = new AdventureCreateModel;
    this.adventureModel['___class'] = 'Adventure';
    this.adventureModel.data = [];
  }

  ngOnInit() {
    this.title = 'New Adventure';
    this.currentUser = this.authenticationService.getCurrentUser();
    this.adventureModel.ownerId = this.currentUser.objectId;

    for (var i = 0; i < 10; i += 1) {
      this.adventureDataModel = new AdventureDataCreateModel;
      this.adventureDataModel.position = i + 1;
      this.adventureDataModel['___class'] = 'Adventure_Data';
      this.adventureDataModel.ownerId = this.currentUser.objectId;
      this.adventureModel.data.push(this.adventureDataModel);
    }
  }
  
  createAdventure() {    
    this.adventureService.createAdventure(this.adventureModel)
      .subscribe(adventureData => {
        this.newAdventure = adventureData;
        this.router.navigate(['adventures', this.newAdventure.objectId]);
      },
      error => {
        this.alertService.error(error);
      });
  }

  trackByIndex(index: number, value: any) {
    return index;
  }

}
