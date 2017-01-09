import { Component, OnInit } from '@angular/core';

import { UserService } from './../../app_core/services/user.service';
import { PagerService } from './../../app_core/services/pager.service';

import { FilterUsersPipe } from './../../app_core/pipes/filter-users.pipe';
import { SortUsersPipe } from './../../app_core/pipes/sort-users.pipe';

import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [FilterUsersPipe, SortUsersPipe]
})
export class UsersComponent implements OnInit {
  private title: string;
  private errorMessage: string;
  private users: UserProfileModel[];
  private filterText: string;
  private sortingProperties: string[];
  private sortBy: string;
  private orderDesc: string;
  private pager: any = {};
  private pagedUsers: any[];
  private currentPage: number;
  private filteredUsers: UserProfileModel[];
  private sortedUsers: UserProfileModel[];

  constructor(
    private userService: UserService,
    private pagerService: PagerService,
    private filterUsersPipe: FilterUsersPipe,
    private sortUsersPipe: SortUsersPipe
  ) { }

  ngOnInit() {
    this.title = 'Users';
    this.sortingProperties = ['Created', 'Email'];
    this.sortBy = 'Created';
    this.orderDesc = 'desc';
    this.getAllUsers();
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

  getAllUsers() {
    this.userService
      .getAllUsers()
      .subscribe(
      data => {
        this.users = data.data;
        this.setPage(1);
      },
      error => this.errorMessage = <any>error
      );
  }  

  setPage(page: number, pageSize: number = 2) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.currentPage = page;

    this.filteredUsers = this.filterUsersPipe.transform(this.users, this.filterText);
    this.sortedUsers = this.sortUsersPipe.transform(this.filteredUsers, [this.sortBy, this.orderDesc]);

    this.pager = this.pagerService.getPager(this.sortedUsers.length, page, 2);

    this.pagedUsers = this.sortedUsers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
