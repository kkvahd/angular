import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    {
      id: 101, name: 'Harish', location: 'Delhi', technology: 'Java'
    },
    {
      id: 102, name: 'Ganesh', location: 'Mumbai', technology: 'Python'
    },
    {
      id: 103, name: 'Bunty', location: 'Bangalore', technology: '.NET'
    },
    {
      id: 104, name: 'Rohit', location: 'Delhi', technology: 'Javascript'
    }
  ]
  constructor() {
  }
  getEmployees() {
    return this.employees;
  }
  getEmployeeById(id: number) {
    return this.employees.find(e => e.id == id);
  }
  getEmployeeDetails(id:number){
    return this.employees.find(e => e.id == id);
  }
}
