import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule }   from '@angular/flex-layout';
import { MdButtonModule, MdCheckboxModule, MdSliderModule, MdProgressBarModule} from '@angular/material';

import { AppComponent }       from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

import { HeaderService } from './header/header.service';
import { ProfileService } from './profile/profile.service';
import { ExperienceService } from './experience/experience.service';
import { AbilitiesService } from './abilities/abilities.service';
import { ProjectService } from './projects/project.service';

import 'hammerjs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSliderModule,
    MdProgressBarModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule
  ], // Grants access to all components to use these material components
  providers: [HeaderService, ProfileService, ExperienceService, AbilitiesService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
