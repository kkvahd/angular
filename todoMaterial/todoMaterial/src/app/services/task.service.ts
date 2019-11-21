import { Injectable } from '@angular/core';
import { Database } from '../database/database';
import { ToDo } from '../database/todo';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  data: ToDo[] = [];
  db: Database;
  taskSubject: Subject<ToDo> = new Subject();

  constructor() {
    this.db = new Database();
  }
  getTaskList() {
    this.data = this.db.tasks;
    return this.data;
  }
  addTaskToList(task){
    let t = {action:task, done:false};
    this.data.push({action: task, done: false});
    this.taskSubject.next(t);
    console.log(this.data);
    
  }


}
