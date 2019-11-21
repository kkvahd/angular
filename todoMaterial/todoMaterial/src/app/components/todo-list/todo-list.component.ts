import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { MatTable } from '@angular/material';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<Element>;

  displayedColumns: string[] = ['index', 'action', 'done'];
  tasks: any = []

  constructor(private service: TaskService) {
    this.tasks = service.getTaskList();
  }
  ngOnInit() {
    this.service.taskSubject.subscribe(t => {
      console.log("New task -> " + t.action + " " + t.done);
      this.tasks.push(t);
      this.table.renderRows();
    });

  }

}
