import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Profile } from './profile';

@Injectable()
export class ProfileService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private profileURL: '../../data/donald-rose.resume.json';

  constructor(private http: Http) { }

  getProfile(): Promise<Profile[]> {
    return this.http.get(this.profileURL)
      .toPromise()
      .then(response => response.json().data as Profile[])
  }
}
