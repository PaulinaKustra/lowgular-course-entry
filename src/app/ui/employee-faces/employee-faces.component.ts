import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employee-faces',
  templateUrl: './employee-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFacesComponent {
  data$: Observable<EmployeeModel[]> = this._httpClient.get<EmployeeModel[]>('assets/data/employees.json');
  constructor(private _httpClient: HttpClient) {
  }
}