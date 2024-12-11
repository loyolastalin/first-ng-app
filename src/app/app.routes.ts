import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'todo',
    canActivate:[MsalGuard],
    loadComponent : () => { return import('./todo/todo.component').then( (m) => m.TodoComponent)}
  },
  {
    path: 'stream',
    canActivate:[MsalGuard],
    loadComponent : () => { return import('./streaming/streaming.component').then( (m) => m.StreamingComponent)}
  }
];
