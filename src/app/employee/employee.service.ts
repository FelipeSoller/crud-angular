import { Injectable } from '@angular/core';
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

  onGetEmployee(id: Number) {
    return this.employees.find(employee => employee.id === id);
  }

  onAdd(employee: Employee) {
    this.employees.push(employee);
  }

  onDelete(id: Number) {
    let employee = this.employees.find(employee => employee.id === id);

    let index = this.employees.indexOf(employee,0);

    this.employees.splice(index,1)
  }

  onUpdate(employee: Employee) {
    let oldEmployee = this.employees.find(oldEmployee => oldEmployee.id === employee.id);

    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;
  }
}
