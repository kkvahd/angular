import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:any;
 
  constructor(private route: ActivatedRoute, private service: EmployeeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('Employee id: ' + params.get('id'));
      console.log("-------------------------------------------------");
      this.employee = this.service.getEmployeeDetails(Number(params.get('id'))); 
      console.log(this.employee);
    })
  }

}
