import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'callback',
        loadComponent: () => import('./pages/callback/callback').then((m) => m.Callback)
    },
    {path: 'recepcionistas', loadComponent: () => import('./pages/recepcionistas/list/list').then((m) => m.List)},
    {path: 'pacientes', loadComponent: () => import('./pages/pacientes/list/list').then((m) => m.List)},
    {path: 'consultas', loadComponent: () => import('./pages/consultas/list/list').then((m) => m.List)},
    {path: 'financeiro', loadComponent: () => import('./pages/financeiro/list/list').then((m) => m.List)},
];
