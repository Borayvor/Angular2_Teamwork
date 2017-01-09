import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../app_core/services/adventure.service';
import { PagerService } from './../../app_core/services/pager.service';

import { FillterAdventuresPipe } from './../../app_core/pipes/fillter-adventures.pipe';
import { SortAdventuresPipe } from './../../app_core/pipes/sort-adventures.pipe';

import { AdventureHomeModel } from './../../app_core/models/adventure-home.model';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css'],
  providers: [FillterAdventuresPipe, SortAdventuresPipe]
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
  private currentPage: number;
  private filteredArray: AdventureHomeModel[];
  private sortedAdventures: AdventureHomeModel[];

  constructor(
    private adventureService: AdventureService,
    private pagerService: PagerService,
    private fillterAdventuresPipe: FillterAdventuresPipe,
    private sortAdventuresPipe: SortAdventuresPipe
  ) { }
  
  ngOnInit() {
    this.title = 'Adventures';
    this.sortingProperties = ['Created', 'Name', 'Description'];
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

  onInput(ev: any) {
    this.filterText = ev.target.value;
    this.setPage(this.currentPage);
  }

  onSortChange(ev: any) {
    this.sortBy = ev.target.value;
    this.setPage(this.currentPage);
  }

  onOrderChange(ev: any) {
    this.orderDesc = ev.target.value;
    this.setPage(this.currentPage);
  }

  setPage(page: number, pageSize: number = 4) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.currentPage = page;

    this.filteredArray = this.fillterAdventuresPipe.transform(this.adventures, this.filterText);
    this.sortedAdventures = this.sortAdventuresPipe.transform(this.filteredArray, [this.sortBy, this.orderDesc]);

    this.pager = this.pagerService.getPager(this.sortedAdventures.length, page, pageSize);

    this.pagedAdventures = this.sortedAdventures.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
