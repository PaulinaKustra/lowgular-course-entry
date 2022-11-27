import {NgModule} from '@angular/core';
import { ProjectListComponent } from './project-list.component';
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],

  declarations: [ProjectListComponent],
  providers: [],
  exports: [ProjectListComponent]
})
export class ProjectListComponentModule {
}
