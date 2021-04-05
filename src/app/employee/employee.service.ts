import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:3000';
  private endpoint = 'employees';

  constructor(private httpClient: HttpClient) { }

  list():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/${this.endpoint}`);
  }
}
