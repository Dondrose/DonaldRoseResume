import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from './profile.service';
import { Profile } from './profile';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  public errorMes: String;
  private profile;

  constructor(private profileService: ProfileService) { }

  getProfile() {
    return this.profileService.getProfileData()
    .subscribe(
      response => this.profile = response,
      error => this.errorMes = <any>error
    );
  }

  ngOnInit(): void {
    this.getProfile();
  }

}
