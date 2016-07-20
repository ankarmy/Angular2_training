import { Component } from '@angular/core';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Todo } from './shared/todo.model';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent]
})
export class AppComponent {
    title: string;
    todos: Todo[];

    constructor(){
        this.title = 'Angular 2Do';
        this.todos = [];
    }

    onTodoAdded(todo: Todo) {
        this.todos.push(todo);
    }
}
