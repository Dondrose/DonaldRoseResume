import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ICandidate }  from './candidate';
import { ResumeService } from '../resume.service';

@Injectable()
export class CandidateService {

  private candidateUrl: '../../../data/donald-rose-resume.json';
  
  candidate: ICandidate;

  constructor(private http: Http) { }

    getCandidate(): Observable<ICandidate[]> {
    return this.http.get(this.candidateUrl).map(res => res.json().candidate);
  }
}