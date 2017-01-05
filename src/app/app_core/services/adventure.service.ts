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

  getAdventureById(id: string): Observable<any> {
    return this.baseService.get(this.adveturesUrl + '/' + id);
  }

  createAdventure(adventure: AdventureCreateModel): Observable<any> {
    return this.baseService.post(this.adveturesUrl, adventure);
  }

  addSnapshotToAdventure(currentAdventureId: string, snapshot: AdventureDataCreateModel) {
    let data: any[];
    let position: number;
    let snapshotCreated: AdventureDataModel;

    this.baseService.post(this.adventureDataUrl, snapshot).subscribe(
      snapshotData => {
        snapshotCreated = snapshotData;

        this.baseService.put(this.adveturesUrl + '/' + currentAdventureId, JSON.stringify({
          data: {
            "___class": "Adventure_Data",
            "objectId": snapshotCreated.objectId
          }
      })).subscribe(
          obj => {
            let newObj: any = obj;
            console.log(newObj);
          },
          error => this.errorMessage = <any>error
          );
      },
      error => this.errorMessage = <any>error
    );

  }
}
