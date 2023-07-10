import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { LoaderService } from 'src/app/services/loader.service';
// import { Projects } from 'src/app/types/types';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private apiCallService: ApiCallService,
    public loader: LoaderService
  ) {}

  projects: any;

  ngOnInit(): void {
    this.apiCallService
      .fetchData('http://localhost:3001/api/projects')
      .subscribe(
        (projects) => {
          this.projects = projects.data;
          console.log('projects', projects.data);
        },
        (error) => console.log(error)
      );
  }
}
