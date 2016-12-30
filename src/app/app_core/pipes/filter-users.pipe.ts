import { Pipe, PipeTransform } from '@angular/core';

import { UserProfileModel } from './../models/user-profile.model';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(items: UserProfileModel[], filterValue: string = ''): UserProfileModel[] {
    if (!items) {
      return;
    }

    if (filterValue === '') {
      return items;
    }

    return items.filter(item =>
      item.email.toLocaleLowerCase()
        .indexOf(filterValue) > -1);
  }

}
