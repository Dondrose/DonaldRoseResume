import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Resume } from './resume';

@Injectable()
export class ResumeService {

  private resumeURL: string = "http://localhost:4200/assets/data/donald-rose-resume-data.json"
  constructor(private http: Http) { }

  getResumeData(): Observable<Resume[]> {
    return this.http.get(this.resumeURL)
      .map((response: Response) => { console.log(response.json()); return response.json() })
      .catch(this.handleError)
  }

  private handleError(res: Response) {
    console.error(res);
    return Observable.throw(res.json().error || 'Server Error');
  }

}
