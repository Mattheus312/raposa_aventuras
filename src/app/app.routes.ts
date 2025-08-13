import { Routes } from '@angular/router';
import { MenuPrincipal } from './components/menu-principal/menu-principal';
import { Etape } from './components/etape/etape';
import { Pub } from './components/pub/pub';
import { Felicitation } from './components/felicitation/felicitation';
import { Lancement } from './components/lancement/lancement';

export const routes: Routes = [
  { path: '', component: Lancement },
  { path: 'menu', component: MenuPrincipal },
  { path: 'etape', component: Etape },
  { path: 'pub', component: Pub },
  { path: 'felicitation', component: Felicitation },
  { path: '**', redirectTo: '' }
];