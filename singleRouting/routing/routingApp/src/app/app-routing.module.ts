import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {ContactComponent} from '../app/components/contact/contact.component';
import {EmployeesComponent} from '../app/components/employees/employees.component';
import {PageNotFoundComponent} from '../app/components/page-not-found/page-not-found.component'
import {EmployeeDetailsComponent} from './components/employees/employee-details/employee-details.component'

const routes: Routes = [
  {
    path:"", redirectTo: "home", pathMatch: "full"
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"contact", component:ContactComponent
  },
  {
    path:"employees", component:EmployeesComponent
  },
  {
    path: "employees/:id", component: EmployeeDetailsComponent
  },
  {
    path:"**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
