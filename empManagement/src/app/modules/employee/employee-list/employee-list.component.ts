import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeDetails = {};

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
    this.service.employeeObject.subscribe(data => {
      console.log(data[0]);
      this.employeeDetails = data[0];
    })
  }

}
