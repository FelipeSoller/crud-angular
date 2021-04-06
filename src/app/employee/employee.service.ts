import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: "Employee One",
      email: "employeeone@example.com",
      phone: 123456789
    },
    {
      id: 2,
      name: "Employee Two",
      email: "employetwo@example.com",
      phone: 987654321
    }
  ];

  constructor() { }

  onGet() {
    return this.employees;
  }
}
