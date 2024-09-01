import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { Ejecicio1Component } from './componentes/ejecicio1/ejecicio1.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ejercicio1', component: Ejecicio1Component },
];
