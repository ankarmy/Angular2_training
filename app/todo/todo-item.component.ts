import {Component, Input} from '@angular/core';
import {Todo} from './todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/todo-item.component.html',
    styleUrls: ['./app/todo/todo-item.component.css'],
    inputs: ['todos', 'todo']
})

export class TodoItem {
    /*@Input() todo: Todo;*/
    todo: Todo;
    todos: Todo[];

    toggleDone(){
        this.todo.done = !this.todo.done
    }

    delete() {
        /*console.log('Deleting', this.todo);
        console.log(this.todos.indexOf(this.todo));*/
        let index = this.todos.indexOf(this.todo);
        this.todos.splice(index, 1);
    }
}