import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard';
import { Login } from './login/login';
import { Standings } from './standings/standings';

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
    path: 'login',
    component: Login
  },
    {
    path: 'standings',
    component: Standings
  },
   {
    path: 'team',
    loadComponent: () => import('./team/team').then(m => m.TeamPage)
   }
];
