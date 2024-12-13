import { Routes } from '@angular/router';

export const DONOR_ROUTES: Routes = [
  {
    path: 'add',
    loadComponent: () => import('./donor-add/donor-add.component')
      .then(m => m.DonorAddComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./donor-list/donor-list.component')
      .then(m => m.DonorListComponent)
  }
];