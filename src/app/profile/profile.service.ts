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
  private profileURL: './donald-rose-profile.json';
  

  constructor(private http: Http) { }

  getProfile(): Observable<Profile[]> {
    return this.http.get(this.profileURL)
      .map(response => response.json().data as Profile[])
      .catch(this.handleError);
  }

  deleteProfile(profile: Profile): Observable<any>{
    let deleteUrl = '${this.profileUrl}/{profile.id}';

    return this.http.delete(deleteUrl)
      .map(response => response.json() as Profile[])
      .catch(this.handleError);
  }

  insertProfile(profile: Profile): Observable<Profile> {
    return this.http.post(this.profileURL, JSON.stringify(profile), {headers: this.headers})
      .map(response => response.json() as Profile)
      .catch(this.handleError);
  }

  updateProfiles(profile: Profile): Observable<any> {
    let updateUrl = '${this.profileUrl}/${profile.id}';

    return this.http.put(updateUrl, JSON.stringify(profile), {headers: this.headers})
      .catch(this.handleError);
  }

  private success(): Observable<any> {
    return Observable.create();
  }


    private handleError(error: any): Observable<any> {
      let errorMessage = '${this.status} - ${response.statusText}';
      return Observable.throw(errorMessage);
  }
}
