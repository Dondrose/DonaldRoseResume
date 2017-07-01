import { Component, OnInit } from '@angular/core';

import { Profile } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile[];

  constructor( private profileService: ProfileService) { }

  getProfile(): void {
    this.profileService.getProfile().then(profile => this.profile = profile);
  }
  
  ngOnInit(): void {
    this.getProfile();
  }

  /**
   * 
  getCandidateInfo(body:Object): Observable<ResumeObject[]>{
    let bodyString = JSON.stringify(body);
    let header = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: header});
    let resumeData = this.getResume();

    return this.http.post(this.resumeUrl, body, options)
      .map((response: Response) => response.json())
      .catch((handleError:any) => Observable.throw(handleError.json().error || 'Server error'));
  }

   */

}
