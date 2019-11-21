import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private frmBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {

    this.loginForm = frmBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      typeOfUser: []
    })
  }

  ngOnInit() {
  }

  checkUser() {
    console.log(this.loginForm.value);
    if (this.loginForm && this.loginForm.value.typeOfUser && this.loginForm.value.typeOfUser == 'employee') {
      this.authService.loginEmployee(this.loginForm.value).subscribe(resp => {
        if (resp == true) {
          alert("You have been succesfully logged in as an Employee!");
          this.router.navigateByUrl('/employees');
        } else {
          alert("Invalid Employee username or password!");
        }
      })
    } else if (this.loginForm && this.loginForm.value.typeOfUser && this.loginForm.value.typeOfUser == 'admin') {
      this.authService.loginAdmin(this.loginForm.value.email, this.loginForm.value.password).subscribe(resp => {
        if (resp == true) {
          alert("You have been succesfully logged in as an Admin!");
          this.router.navigateByUrl('/admin');
        } else {
          alert("Invalid Admin username or password!");
        }
      })
    } else {
      alert("Please select the type of user!");
    }


  }

}
