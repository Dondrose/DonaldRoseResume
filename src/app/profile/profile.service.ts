import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Profile } from './profile';

@Injectable()
export class ProfileService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private profileURL: './donald-rose-profile.json';

  constructor(private http: Http) { }

  getProfile(): Promise<Profile[]> {
    return this.http.get(this.profileURL)
      .toPromise()
      .then(response => response.json().data as Profile[])
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
     console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }
}
