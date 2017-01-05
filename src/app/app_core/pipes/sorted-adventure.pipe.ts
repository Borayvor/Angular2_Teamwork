import { Pipe, PipeTransform } from '@angular/core';

import { AdventureDataModel } from './../models/adventure-data.model';


@Pipe({
  name: 'sortedAdventure'
})
export class SortedAdventurePipe implements PipeTransform {

  transform(adventure: AdventureDataModel[], parameters: any[]): AdventureDataModel[] {
    if (!adventure) {
            return [];
        }

        return adventure.sort((a, b) => {
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
