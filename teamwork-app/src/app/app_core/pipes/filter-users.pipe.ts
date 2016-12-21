import { Pipe, PipeTransform } from '@angular/core';

import { User } from './../models/user.model';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(items: User[], filterValue: string = ''): User[] {
    if (!items) {
      return;
    }

    if (filterValue === '') {
      return items;
    }

    return items.filter(item =>
      item.Username.toLocaleLowerCase()
        .indexOf(filterValue) > -1);
  }

}
