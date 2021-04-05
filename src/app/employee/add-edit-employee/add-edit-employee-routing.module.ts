import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

const routes: Routes = [
  { path: '', component: AddEditEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditEmployeeRoutingModule { }
