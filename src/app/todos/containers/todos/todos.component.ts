import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  private todosState: ITodo[] = [];

  constructor() { }
  get todos(): ITodo[] {
    return this.todosState.filter(todo => !todo.isCompleted);
  }
  get todosCompleted(): ITodo[] {
    return this.todosState.filter(todo => todo.isCompleted);
  }
  get countTodos(): number {
    return this.todos.length;
  }
  get countCompleted(): number {
    return this.todosCompleted.length;
  }
  get isHidden(): boolean {
    return this.countCompleted === 0;
  }
  public ngOnInit(): void {
    this.todosState = JSON.parse(localStorage.getItem('todosState')) || [];
  }
  public addTodo(event): void {
    this.todosState.push({
      id: this.todosState.length,
      title: event.target.value,
      isCompleted: false
    });
    event.target.value = '';
    console.clear();
    console.table(this.todosState);
    this.saveToLocalStorage();
  }
  public updateTodo(): void {
    console.clear();
    console.table(this.todosState);
    this.saveToLocalStorage();
  }
  public removeTodo(id: number): void {
    this.todosState = this.todosState.filter(todo => todo.id !== id);
    console.clear();
    console.table(this.todosState);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('todosState', JSON.stringify(this.todosState));
  }

}
