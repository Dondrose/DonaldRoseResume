import { Component, OnInit } from '@angular/core';

import { IResume } from './resume';
import { ICandidate } from './candidate/candidate';
import { ResumeService } from './resume.service';

@Component({
  selector: 'resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.css']
})
export class ResumeListComponent implements OnInit {
    candidate: ICandidate[];


  constructor(private _resumeService: ResumeService) { 
   }

  ngOnInit() {
   
  }

}