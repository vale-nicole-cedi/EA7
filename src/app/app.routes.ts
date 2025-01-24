import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add-edit-item',
    loadComponent: () => import('./add-edit-item/add-edit-item.page').then( m => m.AddEditItemPage)
  },
];
