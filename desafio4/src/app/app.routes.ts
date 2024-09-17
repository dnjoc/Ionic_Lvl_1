import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'iniciosesion',
    loadComponent: () => import('./iniciosesion/iniciosesion.page').then( m => m.IniciosesionPage)
  },
  {
    path: 'examen',
    loadComponent: () => import('./examen/examen.page').then( m => m.ExamenPage)
  },
];
