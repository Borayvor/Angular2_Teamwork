import { AdventureDataCreateModel } from './adventure-data-create.model';

export class AdventureCreateModel {   
    ownerId: string;
    name: string;
    description: string;
    titlePhoto: string;
    data: AdventureDataCreateModel[];
}
