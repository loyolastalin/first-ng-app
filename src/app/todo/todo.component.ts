import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todoservice = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void {
    // console.log(this.todoservice.todoItems);
    // this.todoItems.set(this.todoservice.todoItems);
    this.todoservice
      .getTotoItems()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => this.todoItems.set(todos));
  }
}
