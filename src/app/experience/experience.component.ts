import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExperienceService } from './experience.service';
import { Experience } from './experience';
import { Http } from '@angular/http';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService]
})

export class ExperienceComponent implements OnInit {

  public errMes: String;
  private experience;

  constructor(private experienceService: ExperienceService) { }

  getExperience() {
    return this.experienceService.getProfileData()
      .subscribe(
        (data) => {
          this.experience = data
        }
      );
  }
  
  ngOnInit(): void {
    this.getExperience();
  }

}
