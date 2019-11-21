import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardEmployeeService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (this.authService.isAuthenticatedEmployee()) {
      console.log("The Employee is authorized!");
      
      return true;
    } else {
      console.log("The Employee is unauthorized!");
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
