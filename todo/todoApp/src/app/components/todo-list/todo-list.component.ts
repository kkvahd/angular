import { Component, OnInit, Input, Output, EventEmitter, DoCheck, OnChanges} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() tasks: any = [];
  @Output() updatePendingTasks = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges(){
    this.update();
  }
  update(){
    let pendingTasks = this.tasks.filter(t => t.done == false).length;
    this.updatePendingTasks.emit(pendingTasks);
  }

}
