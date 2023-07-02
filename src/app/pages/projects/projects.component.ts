import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Activity } from 'src/app/types/types';

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

  data: Activity = {};

  ngOnInit(): void {
    this.apiCallService.fetchData().subscribe(
      (activity) => {
        this.data = activity;
        console.log('activity', activity);
      },
      (error) => console.log(error)
    );
  }
}
