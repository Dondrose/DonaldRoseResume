import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Resume, ResumeObject, ResumeSectionObject } from './resume-object';

@Injectable()
export class ResumeDataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private resumeUrl = '../../data/donald-rose-resume.json';
  private resume: object[];

  constructor(private http: Http) { }

  getResume(): Observable<Resume[]> {
    return this.http.get(this.resumeUrl)
      .map(response => response.json().data);
  }

  getCandidateInfo(): Observable<ResumeObject[]>{
    return this.http.get(this.resumeUrl)
      .map(response => response.json().data)
      .filter(this.resume =>)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occurred', error);
    return Promise.reject(error.message || error);
  }

}
