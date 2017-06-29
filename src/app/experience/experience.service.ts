import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Experience } from './experience';

@Injectable()
export class ExperienceService {

  private jobsUrl: '../../data/donald-rose-resume.json';

  // experiences: Experience[];
  exprience = [];

  constructor(private http: Http) {}

  getExperience() {
    return this.http.get(this.jobsUrl)
    .map((response: Response) => response.json());
  }
}
