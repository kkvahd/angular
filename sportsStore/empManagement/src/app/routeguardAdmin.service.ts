import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardAdminService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (this.authService.isAuthenticatedAdmin()) {
      console.log("The Admin is authorized!");
      return true;
    } else {
      console.log("The Admin is unauthorized!");
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
