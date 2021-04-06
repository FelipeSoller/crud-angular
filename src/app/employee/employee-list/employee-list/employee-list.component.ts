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

  employees: Employee[];

  displayedColumns = ['id', 'nome', 'email', 'telefone', 'acao']

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }
}
