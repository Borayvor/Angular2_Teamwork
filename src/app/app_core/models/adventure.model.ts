import { AdventureDataModel } from './adventure-data.model';

export class AdventureModel {
    objectId: string;
    ownerId: string;
    created: number;
    name: string;
    description: string;
    titlePhoto: string;
    data: AdventureDataModel[];
    length: number;
}