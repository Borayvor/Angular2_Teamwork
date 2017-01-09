import { Component, OnInit } from '@angular/core';

import { UserService } from './../../app_core/services/user.service';
import { PagerService } from './../../app_core/services/pager.service';

import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
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

  constructor(
    private userService: UserService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.title = 'Users';
    this.sortingProperties = ['Created', 'Email'];
    this.sortBy = 'Created';
    this.orderDesc = 'desc';
    this.getAllUsers();
  }

  onSortChange(ev: any) {
    this.sortBy = ev.target.value;
  }

  onOrderChange(ev: any) {
    this.orderDesc = ev.target.value;
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

  onInput(ev: any) {
    this.filterText = ev.target.value;
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.users.length, page, 2);

    this.pagedUsers = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
