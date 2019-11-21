import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Form } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private frmBuilder: FormBuilder, private authService: AuthenticationService) {
    this.signupForm = frmBuilder.group({
      fname: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(1)])],
      lname: ['', [Validators.required, Validators.maxLength(19)]],
      EmailID: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordmatcher('password', 'confirmPassword') })
  }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    contact: new FormControl(''),
    password: new FormControl('')
  })

  register() {
    console.log(this.signupForm.value);
    let user = {
      fname: this.signupForm.value.fname,
      lname: this.signupForm.value.lname,
      email: this.signupForm.value.EmailID,
      password: this.signupForm.value.password
    }
    this.authService.registerUser(user).subscribe(e => {
      alert("User registered succesfully");
    }, error => {
      alert(error.message);
    })
  }
  passwordmatcher(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.passwordMatcher) {
        //return if another validator has already found an error in the matchingControl.
        return;
      }

      if (control.value != matchingControl.value) {
        matchingControl.setErrors({ passwordMatcher: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
