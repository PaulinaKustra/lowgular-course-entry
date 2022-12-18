import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsModel } from '../../model/projects.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly projects$: Observable<ProjectsModel[]> = this._projectsService.getAll();

  constructor(private _projectsService: ProjectsService) {
  }
}
