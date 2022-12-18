import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeFormService {
  constructor(private _httpClient: HttpClient) {
  }
}
