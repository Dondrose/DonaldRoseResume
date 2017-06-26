import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service'; //NOTE: Step 1: Import the Service into component

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [JobService] //NOTE: Step 2: Add the service as a provider
})

export class ExperienceComponent implements OnInit {

  /*
    Sample Object Template
    title: string;
   */

  constructor(private _jobsService: JobService) { //NOTE: Step 3: Include it through dependency injection

   }
  
  ngOnInit() {
    /* Example use case for the imported service
    
      this.title = this._jobsService.someMethod();

    */
  }

}
