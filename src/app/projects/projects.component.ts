import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProjectService} from './project.service';
import { Project} from './project';
import { Http } from '@angular/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public errMes: String;
  private portfolio;

  constructor(private projectService: ProjectService) { }

    getProjects() {
    return this.projectService.getPortfolioData()
      .subscribe(
        (data) => {
          this.portfolio = data
          console.log(data)
        }/*,
        (err) => {
          this.errMes = err
        }*/
      );
  }
  
  ngOnInit() {
    this.getProjects();
  }

}
