import { Pipe, PipeTransform } from '@angular/core';

import { AdventureHomeModel } from './../models/adventure-home.model';

@Pipe({
  name: 'fillterAdventures'
})
export class FillterAdventuresPipe implements PipeTransform {

  transform(adventures: AdventureHomeModel[], filterValue: string = ''): AdventureHomeModel[] {
    if (!adventures) {
      return;
    }

    if (filterValue === '') {
      return adventures;
    }

    return adventures.filter(adventure =>
      adventure.name.toLocaleLowerCase()
        .indexOf(filterValue) > -1);
  }
}
