

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/pagina-inicio/pagina-inicio')
        .then(m => m.PaginaInicio)
  },
  {
    path: 'aprendizaje-gamificado',
    loadComponent: () =>
      import('./pages/aprendizaje-gamificado/aprendizaje-gamificado')
        .then(m => m.AprendizajeGamificadoComponent)
  },
  {
    path: 'soporte-asistencia',
    loadComponent: () =>
      import('./pages/soporte-asistencia/soporte-asistencia')
        .then(m => m.AsistenciaSoporteComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
