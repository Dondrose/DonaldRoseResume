import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Profile } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  candidateProfile: Observable<Profile[]>
  profile: Profile[];
  errorMessage: String;

  constructor( private profileService: ProfileService ) { }

  ngOnInit(): void {
    this.candidateProfile = this.profileService.getProfile();
    this.candidateProfile.subscribe(
      profile => this.profile = profile,
      error => this.errorMessage = <any>error);
  }
}
