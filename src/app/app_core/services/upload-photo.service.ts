import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

@Injectable()
export class UploadPhotoService {
  private usersPhotofilesUrl: string;
  private adventureDataPhotofilesUrl: string;
  private adventureTitlePhotofilesUrl: string;

  constructor(private data: BaseService) {
    this.usersPhotofilesUrl = '/files/media/usersPhotos/';
    this.adventureDataPhotofilesUrl = '/files/media/adventurePhotos/';
    this.adventureTitlePhotofilesUrl = '/files/media/adventureTitlePhoto/';
  }

  uploadUserPhoto(file: File) {
    return this.data.post(this.usersPhotofilesUrl + file.name + '?overwrite=true', file);
  }

  uploadAdventureTitlePhoto(file: File) {
    return this.data.post(this.usersPhotofilesUrl + file.name + '?overwrite=true', file);
  }

  uploadAdventureDataPhoto(file: File) {
    return this.data.post(this.usersPhotofilesUrl + file.name + '?overwrite=true', file);
  }

}
