import { Component, Input } from '@angular/core';
import { Project } from './../../types/types';
import { emptyProject } from 'src/app/types/constants';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: Project = emptyProject;
  panelOpenState = false;
}
