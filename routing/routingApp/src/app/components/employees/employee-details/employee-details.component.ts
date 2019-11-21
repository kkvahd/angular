import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any = {};

  constructor(private route: ActivatedRoute, private service: EmployeeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = + params.get('id');
      this.service.getEmployeeById(id).subscribe(res => {
        if (res.status == 200) {
          this.employee = res.body;
        } else if (res.status == 404) {
          alert("This employee id doesn't exist");
        } else if (res.status == 500) {
          alert("Some server issue , please try later");
        }
      });
    })
  }

}
