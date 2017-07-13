import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule }   from '@angular/flex-layout';
import { AppComponent }       from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { CandidateComponent } from './resume/candidate/candidate.component';
import { EducationComponent } from './resume/education/education.component';
import { ProjectComponent } from './resume/project/project.component';
import { SkillComponent } from './resume/skill/skill.component';

import { HeaderService } from './header/header.service';

const appRoutes: Routes = [
  {path: 'abilities-link', component: AbilitiesComponent},
  {path: 'experience-link', component: ExperienceComponent},
  {path: 'header-link', component: HeaderComponent},
  {path: 'profile-link', component: ProfileComponent},
  {path: 'project-link', component: ProjectsComponent},
  {path: 'contact-link', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ProfileComponent,
    AbilitiesComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    ResumeComponent,
    CandidateComponent,
    EducationComponent,
    ProjectComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
