import { Component, Input } from '@angular/core';
import {TodoItem} from './todo-item.component';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    styleUrls: ['./app/todo/todo-list.component.css'],
    directives: [TodoItem]

})

export class TodoListComponent {
    @Input() todos: string[];
}