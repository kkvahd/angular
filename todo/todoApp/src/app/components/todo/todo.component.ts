import { Component, OnInit } from '@angular/core';
import {Model} from '../../model/model';
import {ToDo} from '../../model/todo';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  data: ToDo[];
  source: Model;
  name: string;
  pendingTasks: number;
  constructor() {
    this.source = new Model;
    this.data = this.source.tasks;
    console.log(this.data);
   }
   updateNumber(no_tasks){
    this.pendingTasks = no_tasks;
   }
   getUserName(){
     return this.source.user;
   }
 
   addTask(taskName:string){
     if (taskName !== undefined && taskName != null && taskName != ''){
       this.data.push({action:taskName, done:false})
       this.data = [...this.data];
     }
   }
  ngOnInit() {
  }

}
