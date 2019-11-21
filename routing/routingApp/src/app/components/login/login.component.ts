import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private frmBuilder: FormBuilder, private authService: AuthenticationServiceService, private router: Router) {

    this.loginForm = frmBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  checkUser() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(resp => {
      if (resp == true) {
        alert("You have been succesfully logged in!");
        this.router.navigateByUrl('/home');
      } else {
        alert("Invalid username or password!");
      }
    })
  }

}
