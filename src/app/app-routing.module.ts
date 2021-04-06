import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employees/add/:id', component: AddEditEmployeeComponent },
  { path: 'employees/edit/:id', component: AddEditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
