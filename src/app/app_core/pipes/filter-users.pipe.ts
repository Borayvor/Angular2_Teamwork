import { Pipe, PipeTransform } from '@angular/core';

import { UserProfileModel } from './../models/user-profile.model';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: UserProfileModel[], filterValue: string = ''): UserProfileModel[] {
    if (!users) {
      return;
    }

    if (filterValue === '') {
      return users;
    }

    return users.filter(item =>
      item.email.toLocaleLowerCase()
        .indexOf(filterValue) > -1);
  }

}
