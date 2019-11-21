import {ToDo} from './todo';
import {Model} from './model';

export class ToDoRepository{
    todos: Model;
    data: ToDo[];
    constructor(){
        this.todos = new Model();
    }
    getTodDoList(){
        this.data = this.todos.tasks;
    }
}