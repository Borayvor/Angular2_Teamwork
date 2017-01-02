import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

import { AdventureCreateModel } from './../models/adventure-create.model';
import { AdventureDataCreateModel } from './../models/adventure-data-create.model';

@Injectable()
export class AdventureService {
  private errorMessage: string;
  private adveturesUrl: string;
  private adventureDataUrl: string;
  private adventure: AdventureCreateModel;

  constructor(private data: BaseService) {
    this.adveturesUrl = '/data/Adventures';
    this.adventureDataUrl = '/data/Adventure_Data';
  }

  getAllAdventures(): Observable<any> {
    return this.data.get(this.adveturesUrl);
  }

  getAdventureById(id: string): Observable<any> {
    return this.data.get(this.adveturesUrl + '/' + id);
  }

  createAdventure(adventure: AdventureCreateModel): Observable<any> {
    return this.data.post(this.adveturesUrl, adventure);
  }

  addSnapshotToAdventure(currentAdventureId: string, snapshot: AdventureDataCreateModel) {
    this.getAdventureById(currentAdventureId).subscribe(data => {
      this.adventure = data;
      this.adventure.data.push(snapshot);
      this.data.put(this.adveturesUrl, this.adventure);
    },
      error => this.errorMessage = <any>error);
  }

}
