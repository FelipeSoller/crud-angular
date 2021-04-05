import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees$: Observable<Employee[]>

  displayedColumns = ['id', 'nome', 'email', 'telefone']

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList();
  }

  employeeList() {
    this.employees$ = this.employeeService.list();
  }

}
