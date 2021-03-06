import { Pipe, PipeTransform } from '@angular/core';

import { UserProfileModel } from './../models/user-profile.model';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(users: UserProfileModel[], parameters: any[]): UserProfileModel[] {
    if (!users) {
            return [];
        }

        return users.sort((a, b) => {
            switch (parameters[0]) {
                case 'Email':
                    return parameters[1] === 'asc' ?
                        a.email.localeCompare(b.email) :
                        b.email.localeCompare(a.email);
                case 'Created':
                    return parameters[1] === 'asc' ?
                        +a.created - +b.created :
                        +b.created - +a.created;
            }
        });
  }
}
