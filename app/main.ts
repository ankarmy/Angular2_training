/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
@Component({
    selector: 'todo-app',
    template: '<h1>Todo</h1>'
})
class AppComponent {

}

bootstrap(AppComponent);