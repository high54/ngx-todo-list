import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() todoChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
