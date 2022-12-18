import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectsComponent],
  providers: [],
  exports: [ProjectsComponent]
})
export class ProjectsComponentModule {
}
