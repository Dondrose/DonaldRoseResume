import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Profile } from './profile';

@Injectable()
export class ProfileService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  // private profileURL: './donald-rose-profile.json';
  private profileURL: '../../../donald-rose-profile.json';
  private profile: Profile[];

  constructor(private http: Http) { }

  setProfile(profile: Profile[]) {
    this.profile = profile;
  }

  getProfile(): Observable<Profile[]> {
    return this.http.get(this.profileURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

    private extractData( response: Response) {
      let body = response.json();
      return body;
    }

    private handleError(error: any): Observable<any> {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
  }
}
