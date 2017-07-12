import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { ResumeRoutesRoutingModule } from './resume-routes-routing.module';

const routes: Routes = [
  { path: ''},
  { path: 'profiles', component: ProfileComponent },
]

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class ResumeRoutesModule { }
