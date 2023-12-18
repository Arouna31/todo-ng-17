import { Routes } from '@angular/router';

export default [{
    path: 'todo',
    loadComponent: () => import('./todo/todo.component').then((m) => m.TodoComponent),
}] as Routes;