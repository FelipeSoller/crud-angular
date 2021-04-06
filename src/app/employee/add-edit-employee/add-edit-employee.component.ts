import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  id: number;
  header: string;
  employee: Employee = {
    id: null,
    name: '',
    email: '',
    phone: null
  }

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Adicionar funcionário' : 'Editar funcionário';

    if (this.id != 0) {
      this.employee = this.employeeService.onGetEmployee(this.id);
    }
  }

  onSubmit(form: NgForm) {
    let employee: Employee = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
    }

    if (this.id === 0) {
      this.employeeService.onAdd(employee);
    } else {
      this.employeeService.onUpdate(employee);
    }


    this.router.navigateByUrl('');
  }
}
