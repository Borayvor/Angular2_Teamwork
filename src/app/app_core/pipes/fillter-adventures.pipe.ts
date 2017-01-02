import { Pipe, PipeTransform } from '@angular/core';

import { AdventureDataModel } from './../models/adventure-data.model';

@Pipe({
  name: 'fillterAdventures'
})
export class FillterAdventuresPipe implements PipeTransform {

  transform(adventures: AdventureDataModel[], filterValue: string = ''): AdventureDataModel[] {
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
