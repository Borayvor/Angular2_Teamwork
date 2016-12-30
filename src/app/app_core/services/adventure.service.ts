import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

@Injectable()
export class AdventureService {
  private adveturesUrl: string;

  constructor(private data: BaseService) { 
    this.adveturesUrl = '/data/Adventures';
  }

  getAllAdventures(): Observable<any> {
    return this.data.get(this.adveturesUrl);
  }

  getAdventureById(id: string): Observable<any> {        
    return this.data.get(this.adveturesUrl + '/' + id);
  }

}
