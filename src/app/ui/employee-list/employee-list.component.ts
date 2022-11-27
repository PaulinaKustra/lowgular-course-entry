import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) { }
  data$: Observable<{ img: string; mail: string; name: string; personalNumber: string }[]> = this._employeeService.getAll();
  employee: any;
  data: any;

  remove(id: string) {
    this._employeeService.delete(id).subscribe((result) => {
      if(result.status === "success" )
        alert('User was successfully removed.');
    });
  }
}
