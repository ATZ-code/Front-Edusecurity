
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/aprendizaje-gamificado/aprendizaje-gamificado')
        .then(m => m.AprendizajeGamificado)
  },
  {
    path: 'soporte-asistencia',
    loadComponent: () =>
      import('./pages/soporte-asistencia/soporte-asistencia')
        .then(m => m.SoporteAsistencia)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
