import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../employee.service'

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any = [];
  sub1: any;
  sub2: any;

  constructor(private empService: EmployeeService) {
  }
  ngOnInit() {
    this.getAllEmployees();
    this.sub1 = this.empService.employeeAdded.subscribe(res => this.employees.push(res));
  }
  getAllEmployees() {
    this.sub2 = this.empService.getEmployees().subscribe(resp => {
      console.log(resp);
      if (resp.status == 200) {
        this.employees = resp.body;
      }
    }, error =>{
      console.log("error");
      console.log(error);
      if (error.status == 400){
        alert("404");
      }else if(error.status == 500){
        alert("Internal server error");
      } 
    })
  }

  deleteEmployee(id) {
    this.empService.deleteEmployee(id).subscribe(resp => {
      this.employees = this.employees.filter(e => e["id"] != id);
    });

  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
