import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
http = inject(HttpClient);
  todoItems : Array<Todo> = [ {
    title: "fsdf",
    id: 0,
    userId: 1,
    completed: false
  }]
  constructor() { }
  getTotoItems()
  {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
