import { Pipe, PipeTransform } from '@angular/core';

import { UserModel } from './../models/user.model';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(items: UserModel[], filterValue: string = ''): UserModel[] {
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
