import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { CreateEmployeeModel } from '../model/create-employee.model';
import {EmployeeModel} from "../model/employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('assets/data/people.json');
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee);

  }
  delete(id: string): Observable<any> {
    return this._httpClient.delete('https://dummy.restapiexample.com/public/api/v1/delete/2' + id).pipe(map(_ => void 0));

  }
}
