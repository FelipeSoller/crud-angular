import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', loadChildren: () => import('./employee/employee-list/employee-list.module').then(module => module.EmployeeListModule) },
  { path: 'employees/add', loadChildren: () => import('./employee/add-edit-employee/add-edit-employee.module').then(module => module.AddEditEmployeeModule) },
  { path: 'employees/edit/:id', loadChildren: () => import('./employee/add-edit-employee/add-edit-employee.module').then(module => module.AddEditEmployeeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
