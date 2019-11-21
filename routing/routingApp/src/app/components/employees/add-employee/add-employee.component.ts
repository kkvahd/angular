import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../employee.service';
import { NgForm } from '@angular/forms';
import { format } from 'util';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() {

  }

  addEmployee(name, location, tech) {
    let emp = { "name": name, "location": location, "technology": tech };
    this.empService.addEmployee(emp).subscribe(response => console.log(response));
  }

  add(form: NgForm) {

    let emp = {
      "name": form.value.textName, "location": form.value.location, "technology": form.value.tech
    }
    this.empService.addEmployee(emp).subscribe( response => console.log(response));
    // console.log(form.value);
  }

}
