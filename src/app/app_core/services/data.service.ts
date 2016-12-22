import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private baseUrl: string = 'http://api.backendless.com/v1/data/';
  private applicationId = 'EB364692-B174-248D-FF33-8BBBF9FD7800';
  private secretKey = '094F99A1-D1AB-6AB6-FF14-689B8BF40900';
  private applicationType = 'REST';

  private headersGet = new Headers({
    'application-id': this.applicationId,
    'secret-key': this.secretKey,
    'application-type': this.applicationType
  });
  private headersPost = new Headers({
    'application-id': this.applicationId,
    'secret-key': this.secretKey,
    'application-type': this.applicationType,
    'Content-Type': 'application/json'
  });
  private optionsGet = new RequestOptions({ headers: this.headersGet });
  private optionsPost = new RequestOptions({ headers: this.headersPost });

  constructor(private http: Http) { }

  get(url: string): Observable<any[]> {
    let urlGet = this.baseUrl + url;

    return this.http.get(urlGet, this.optionsGet)
      .map(this.extractData)
      .catch(this.handleError);
  }

  post(url: string, body: Object): Observable<any[]> {
    return this.http.post(this.baseUrl + url, body, this.optionsPost)
      .map(this.extractData)
      .catch(this.handleError);
  }

  put(url: string, body: Object): Observable<any[]> {
    return this.http.put(this.baseUrl + url, body, this.optionsPost)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();

    return body.data || {};
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

