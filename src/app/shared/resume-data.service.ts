import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Resume, ResumeObject, ResumeSectionObject } from './resume-object';

@Injectable()
export class ResumeDataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private resumeUrl = '../../data/donald-rose-resume.json';
  private resume: object[];

  constructor(private http: Http) { }

  getResume(): Observable<Resume[]> {
    return this.http.get(this.resumeUrl)
      .map((response: Response) => response.json().data)
      .catch((handleError => Observable.throw(handleError.json().error || 'Server Error')));
  }

  getCandidateInfo(body:Object): Observable<ResumeObject[]>{
    let bodyString = JSON.stringify(body);
    let header = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: header});
    let resumeData = this.getResume();

    return this.http.post(this.resumeUrl, bodyString, options)
      .filter(function(rData) {
        return rData.candidate === "candidate";
      })
      .map((response: Response) => response.json())
      .catch((handleError:any) => Observable.throw(handleError.json().error || 'Server error'));
  }

}
