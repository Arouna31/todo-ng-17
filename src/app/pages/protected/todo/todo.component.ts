import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriesNavComponent } from './categories-nav/categories-nav.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, CategoriesNavComponent, AddTodoFormComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {}
