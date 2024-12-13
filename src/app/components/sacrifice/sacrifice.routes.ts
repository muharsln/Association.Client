import { Routes } from '@angular/router';

export const SACRIFICE_ROUTES: Routes = [
  {
    path: 'add',
    loadComponent: () => import('./sacrifice-add/sacrifice-add.component')
      .then(m => m.SacrificeAddComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./sacrifice-list/sacrifice-list.component')
      .then(m => m.SacrificeListComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./sacrifice-settings/sacrifice-settings.component')
      .then(m => m.SacrificeSettingsComponent)
  }
];