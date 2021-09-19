
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  // he criado otras rutas para ser mas seguro y las llamo en el import de routing.module
  // path: 'dashboard' PagesRoutingModule

  // path: 'auth' AuthRoutingModule

  // path: '', redirectTo: redireciona al /dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //si no encuentra ningun component me lleva a la pagina de error NopagefoundComponent
  { path: '**', component: NopagefoundComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
