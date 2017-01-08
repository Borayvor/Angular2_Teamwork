import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

import { AdventureCreateModel } from './../models/adventure-create.model';
import { AdventureDataCreateModel } from './../models/adventure-data-create.model';
import { AdventureDataModel } from './../models/adventure-data.model';

@Injectable()
export class AdventureService {
  private errorMessage: string;
  private adveturesUrl: string;
  private adventureDataUrl: string;
  private adventure: AdventureCreateModel;

  constructor(private baseService: BaseService) {
    this.adveturesUrl = '/data/Adventures';
    this.adventureDataUrl = '/data/Adventure_Data';
  }

  getAllAdventures(): Observable<any> {
    return this.baseService.get(this.adveturesUrl);
  }

  getAllAdventuresByAuthorId(authorId: string) {
    return this.baseService.get(this.adveturesUrl + '?where=ownerId%20in%20(%27' + authorId + '%27)');
  }

  getAdventureById(id: string): Observable<any> {
    return this.baseService.get(this.adveturesUrl + '/' + id);
  }

  createAdventure(adventure: AdventureCreateModel): Observable<any> {
    return this.baseService.post(this.adveturesUrl, adventure);
  }

}
