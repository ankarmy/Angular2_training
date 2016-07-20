import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../shared/todo.model';
//import {EventEmitter} from "@angular/router-deprecated/src/facade/async";

@Component({
    selector: 'todo-item',
    templateUrl: './app/components/todo-item/todo-item.component.html',
    styleUrls: ['./app/components/todo-item/todo-item.component.css'],

})

export class TodoItem {
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter();
    //@Output() moved = new EventEmitter();

    toggleDone(){
        this.todo.done = !this.todo.done;
        /*if (this.todo.done) {
            this.moved.emit(this.todo);
        }*/
    }

    delete() {
        this.deleted.emit(this.todo);
    }
}