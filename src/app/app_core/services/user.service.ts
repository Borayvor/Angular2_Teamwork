import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable()
export class UserService {
  private usersUrl: string = 'Users';

  constructor(private data: DataService) { }
  
  getAllUsers(){
    return this.data.get(this.usersUrl);
  }

}
