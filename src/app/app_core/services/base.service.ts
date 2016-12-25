import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseService {
  private baseUrl: string = 'https://api.backendless.com/v1';
  private applicationId: string = 'EB364692-B174-248D-FF33-8BBBF9FD7800';
  private secretKey: string = '094F99A1-D1AB-6AB6-FF14-689B8BF40900';
  private applicationType: string = 'REST';

  private headersGet: Headers;
  private headersPost: Headers;
  private optionsGet: RequestOptions;
  private optionsPost: RequestOptions;
  // private currentUserToken: string;

  constructor(private http: Http) {
    //this.currentUserToken = localStorage.getItem('currentUser') !== null ? localStorage.getItem('currentUser')['token'] : 'token';

    this.headersGet = new Headers({
      'application-id': this.applicationId,
      'secret-key': this.secretKey,
      'application-type': this.applicationType     
    });

    this.headersPost = new Headers({
      'application-id': this.applicationId,
      'secret-key': this.secretKey,
      'application-type': this.applicationType,
      'Content-Type': 'application/json'      
    });

    this.optionsGet = new RequestOptions({ headers: this.headersGet });
    this.optionsPost = new RequestOptions({ headers: this.headersPost });
  }

  get(url: string): Observable<any> {
    let urlGet = this.baseUrl + url;

    return this.http.get(urlGet, this.optionsGet)
      .map(this.extractData)
      .catch(this.handleError);
  }

  post(url: string, body: Object): Observable<any> {
    let urlPost = this.baseUrl + url;

    return this.http.post(urlPost, body, this.optionsPost)
      .map(this.extractData)
      .catch(this.handleError);
  }

  put(url: string, body: Object): Observable<any> {
    let urlPut = this.baseUrl + url;

    return this.http.put(urlPut, body, this.optionsPost)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    
    // console.log(body);
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}

