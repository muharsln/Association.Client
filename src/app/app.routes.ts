import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'donors',
    loadChildren: () => import('./components/donors/donors.routes')
      .then(m => m.DONOR_ROUTES)
  },
  {
    path: 'sacrifice',
    loadChildren: () => import('./components/sacrifice/sacrifice.routes')
      .then(m => m.SACRIFICE_ROUTES)
  }
];
