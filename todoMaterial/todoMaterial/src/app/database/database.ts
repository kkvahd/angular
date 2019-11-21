import {ToDo} from './todo';

export class Database{
    tasks:ToDo[] = [];
    user:string = "Karthik Vanka";
    constructor(){
        this.tasks.push({action: "Wireframe Design", done: false});
        this.tasks.push({action: "Static UI Design", done: false});
        this.tasks.push({action: "Backend preparation", done: true});
    }
}