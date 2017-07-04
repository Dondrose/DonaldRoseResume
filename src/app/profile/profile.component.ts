import { Component, OnInit } from '@angular/core';

import { Profile } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  isNewView: boolean;
  showView: boolean;
  viewProfile: Profile;
  profile: Profile[];

  constructor( private profileService: ProfileService ) { }

  ngOnInit() {
    this.profileService.getProfile()  
      .subscribe(
        profile => this.profile = profile,
        error => console.log(<any>error)
      );
  }

  showProfileView(profile: Profile) {
    if(!profile) {
      this.isNewView = true;
      
    }

    this.showView = true;
    this.viewProfile = profile;
  }

  removeProfile(profile: Profile) {
    this.profileService.deleteProfile(profile)
      .subscribe(
        () => this.removeProfile(profile),
        error => console.log(error)
      );
  }

  saveProfile(profile: Profile) {
    if(profile) {
      if(this.isNewView){
        this.profileService.insertProfile(profile)
        .subscribe((insertProfile) => {
          this.profile.push(insertProfile),
          error => console.log(error)
        });
      }
      else {
        this.profileService.updateProfiles(profile)
          .subscribe(
            () => {},
            error => console.log(error)
          );
      }

      this.showView = false;
      this.isNewView = false;
      profile =null;
    }
  }

  private removeProfileFromList(profile: Profile) {
    var index = this.profile.indexOf(profile, 0);

    if (index > -1) {
      this.profile.splice(index,1);
    }
  }
}
