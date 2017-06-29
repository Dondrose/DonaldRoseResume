import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CandidateService } from './candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidate = [];

  constructor(private _candidateService: CandidateService) {
  }

  ngOnInit() {
    this._candidateService.getCandidate()
      .subscribe(responseCandidateData => this.candidate = responseCandidateData);
  }

}
