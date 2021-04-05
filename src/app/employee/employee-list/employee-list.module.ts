import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class EmployeeListModule { }
