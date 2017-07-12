import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { FlexLayoutModule }   from '@angular/flex-layout';
import { AppComponent }       from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ProfileService } from './profile/profile.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './profile/in-memory-profile-data.service';

import { RouterModule, Routes } from '@angular/router';
import { ResumeRoutesModule } from './resume-routes/resume-routes.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

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
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ProfileService, ResumeRoutesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
