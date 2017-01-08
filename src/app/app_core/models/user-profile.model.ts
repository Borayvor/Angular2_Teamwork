import { AdventureModel } from './adventure.model';

export class UserProfileModel {
    objectId: string;
    created: number;
    email: string;
    userPhoto: string; 
    adventures: AdventureModel[];
}