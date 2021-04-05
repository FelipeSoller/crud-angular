import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditEmployeeRoutingModule } from './add-edit-employee-routing.module';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';


@NgModule({
  declarations: [
    AddEditEmployeeComponent
  ],
  imports: [
    CommonModule,
    AddEditEmployeeRoutingModule
  ]
})
export class AddEditEmployeeModule { }
