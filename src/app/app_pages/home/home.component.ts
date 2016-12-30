import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../app_core/services/adventure.service';

import { AdventureHomeModel } from './../../app_core/models/adventure-home.model';
import { AdventureDataModel } from './../../app_core/models/adventure-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private title: string;
  private errorMessage: string;
  private adventures: AdventureHomeModel[];

  constructor(private adventureService: AdventureService) {
  }

  ngOnInit() {
    this.title = 'Adventures';

    this.getAllAdventures();
  }

  getAllAdventures() {
    this.adventureService
      .getAllAdventures()
      .subscribe(
      data => {
        this.adventures = data.data;
      },
      error => this.errorMessage = <any>error
      );
  }

}
