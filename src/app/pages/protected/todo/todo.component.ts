import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriesNavComponent } from './categories-nav/categories-nav.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { CheckboxComponent } from '@shared/components/checkbox/checkbox.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    CategoriesNavComponent,
    AddTodoFormComponent,
    CheckboxComponent,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {}
