import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
   {
    path: 'team',
    loadComponent: () => import('./team/team').then(m => m.TeamPage)
   }
];
