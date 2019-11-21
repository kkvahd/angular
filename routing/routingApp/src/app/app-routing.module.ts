import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { EmployeesComponent } from '../app/components/employees/employees.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component'
import { EmployeeDetailsComponent } from './components/employees/employee-details/employee-details.component'
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouteguardService } from './routeguard.service';
const routes: Routes = [
  {
    path: "", redirectTo: "register", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent, canActivate: [RouteguardService]
  },
  {
    path: "contact", component: ContactComponent, canActivate: [RouteguardService]
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "employees", component: EmployeesComponent,
    children: [
      {
        path: "create", component: AddEmployeeComponent, outlet: 'details'
      },
      {
        path: ":id", component: EmployeeDetailsComponent, outlet: 'details'
      }
    ]
  },
  {
    path: "employees/:id", component: EmployeeDetailsComponent, canActivate: [RouteguardService]
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
