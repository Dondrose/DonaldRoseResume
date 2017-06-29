import { Component } from '@angular/core';

import { AbilitiesComponent } from './abilities/abilities.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { CandidateListComponent } from './resume/candidate/candidate-list.component';
import { CandidateComponent } from './resume/candidate/candidate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Donald Rose Resume Works';
}
