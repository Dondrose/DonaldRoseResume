import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

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

  getProfiles(): Promise<Array<Profile>> {
    return this.http.get(this.profileURL)
      .toPromise()
      .then((response) => {
        return response.json().data as Profile[];
      })
      .catch(this.handleError);
  }

  getProfile(id: number): Promise<Profile> {
    return this.getProfiles()
      .then(profiles => profiles.find(profile => profile.id === id));
  }

    private extractData( response: Response) {
      let body = response.json();
      return body;
    }

    private handleError(error: any): Promise<any> {
      console.error(error.message || error);
      return Promise.reject(error.message || error);
  }
}
