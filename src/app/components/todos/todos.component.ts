import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { dateFormatter, getLocalStorage, setLocalStorage } from 'src/app/utils';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  public todoText: string = '';

  /**
   * get not done todos
   */
  get notDoneTodos(): Todo[] {
    return this.todos.filter((todo) => !todo.done);
  }

  /**
   * get sorted todos
   */
  get sortedTodos(): Todo[] {
    return this.todos.sort((a, b) => {
      if (a.done && !b.done) {
        return 1;
      }
      if (!a.done && b.done) {
        return -1;
      }
      return 0;
    });
  }

  /**
   * Get date
   */
  get getDate(): string {
    return dateFormatter(new Date());
  }

  /**
   * Change the state of the todo
   * @param id - id of the todo item
   */
  toggleTodo(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.done = !todo.done;
    }

    setLocalStorage({ name: 'todos', value: this.todos });
  }

  /**
   * Adds todo item
   */
  addTodo(): void {
    if (this.todoText.trim().length > 0) {
      this.todos.push({
        id: this.todos.length,
        text: this.todoText,
        done: false,
      });

      setLocalStorage({ name: 'todos', value: this.todos });
      this.todoText = '';
    }
  }

  /**
   * Delete a todo
   * @param id - id of the todo item
   */
  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    setLocalStorage({ name: 'todos', value: this.todos });
  }

  constructor() {
    this.todoText = '';
  }

  ngOnInit(): void {
    this.todos = getLocalStorage('todos');
  }
}
