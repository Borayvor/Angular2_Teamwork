import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../app_core/services/adventure.service';
import { PagerService } from './../../app_core/services/pager.service';

import { AdventureHomeModel } from './../../app_core/models/adventure-home.model';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {
  private title: string;
  private errorMessage: string;
  private adventures: AdventureHomeModel[];
  private filterText: string;
  private sortingProperties: string[];
  private sortBy: string;
  private orderDesc: string;
  private pager: any = {};
  private pagedAdventures: any[];

  constructor(
    private adventureService: AdventureService,
    private pagerService: PagerService
    ) { }

  ngOnInit() {
    this.title = 'Adventures';
    this.sortingProperties = [ 'Created', 'Name', 'Description' ];
    this.sortBy = 'Created';
    this.orderDesc = 'desc';
    this.getAllAdventures();
  }

  getAllAdventures() {
    this.adventureService
      .getAllAdventures()
      .subscribe(
      data => {
        this.adventures = data.data;
        this.setPage(1);
      },
      error => this.errorMessage = <any>error
      );
  }

  onSortChange(ev: any) {
    this.sortBy = ev.target.value;
  }

  onOrderChange(ev: any) {
    this.orderDesc = ev.target.value;
  }

  onInput(ev: any) {
    this.filterText = ev.target.value;
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.adventures.length, page, 4);

    this.pagedAdventures = this.adventures.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
