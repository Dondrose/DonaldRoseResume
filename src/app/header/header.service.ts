import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs';
import { Header } from './header';

@Injectable()
export class HeaderService {

  private headerURL: string = "http://localhost:4200/assets/data/donald-rose-resume-data.json";

  constructor(private http: Http) { }

  getHeaderData(): Observable<Header[]> {
    return this.http.get(this.headerURL)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private handleError(error: Response | any) {
    let errorMessage: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
  
  private extractData(res: Response) {
    let body = res.json().candidate;
    return body || { };
  }

}
