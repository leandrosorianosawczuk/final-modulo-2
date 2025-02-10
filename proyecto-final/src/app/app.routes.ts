import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'vestimentas',
    loadComponent: () => import('./pages/vestimentas/vestimentas.component').then(p => p.VestimentasComponent)
  },
  {
    path: 'pokemons',
    loadComponent: () => import('./pages/pokemons/pokemons.component').then(p => p.PokemonsComponent)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./pages/details/details.component').then(p => p.DetailsComponent)
  },
  {
    path: '',
    redirectTo: 'vestimentas',
    pathMatch: 'full'
  }
];
