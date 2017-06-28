//Angular System Imports
import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { FlexLayoutModule }   from '@angular/flex-layout';
import { AppComponent }       from './app.component';

// 3rd Party Library Imports
import 'hammerjs';

// User Defined Components Imports
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

//Services Imports
import { JobService } from './job/job.service';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ProfileComponent,
    AbilitiesComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
