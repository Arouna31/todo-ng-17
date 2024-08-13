import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/protected/protected.routes'),
  },
  // {
  //     path: '**',
  //     component: '',
  //     loadChildren:
  // }
];
