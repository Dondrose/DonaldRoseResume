import { Component } from '@angular/core';

import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [ResumeService]

})

export class ResumeComponent {

  candidate: string;

  constructor(private resumeService: ResumeService) { }

  testPost(){
    this.resumeService.postCandidate()
      .subscribe(
        data => this.candidate = JSON.stringify(data),
        error => alert(error),
        () => console.log("Candidate Complete")
      );
  }

  w
}
