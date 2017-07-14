import { Component, OnInit } from '@angular/core';
import { CandidateService } from './candidate.service';

@Component({
    selector: 'candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.css']
})

export class CandidateListComponent implements OnInit {
    candidates = [];

    constructor(private _candidateService: CandidateService){

    }

    ngOnInit(){
        this._candidateService.getCandidate()
            .subscribe(responseCandidateData => this.candidates = responseCandidateData);
    }
}