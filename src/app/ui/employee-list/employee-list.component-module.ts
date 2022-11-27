import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import {MatListModule} from "@angular/material/list";
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatListModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]

})
export class EmployeeListComponentModule {}
