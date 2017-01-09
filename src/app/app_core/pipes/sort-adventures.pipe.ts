import { Pipe, PipeTransform } from '@angular/core';

import { AdventureHomeModel } from './../models/adventure-home.model';


@Pipe({
  name: 'sortAdventures'
})
export class SortAdventuresPipe implements PipeTransform {

  transform(adventures: AdventureHomeModel[], parameters: any[]): AdventureHomeModel[] {
    if (!adventures) {
            return [];
        }

        return adventures.sort((a, b) => {
            switch (parameters[0]) {
                case 'Name':
                    return parameters[1] === 'asc' ?
                        a.name.localeCompare(b.name) :
                        b.name.localeCompare(a.name);
                case 'Description':
                    return parameters[1] === 'asc' ?
                        a.description.localeCompare(b.description) :
                        b.description.localeCompare(a.description);
                case 'Created':
                    return parameters[1] === 'asc' ?
                        +a.created - +b.created :
                        +b.created - +a.created;
            }
        });
  }

}
