import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Profile } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: Profile[];
  highlightedProfile: Profile;
  errorMessage: String;

  constructor( private router: Router, private profileService: ProfileService ) { }

  getProfiles(): void {
    this.profileService
      .getProfiles()
      .then(profiles => this.profiles = profiles)
      .catch(error => this.errorMessage = error);
  }

  ngOnInit(): void {
    this.getProfiles();
  }
}
