import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaHomeUserComponent} from "./rutas/ruta-home-user/ruta-home-user.component";



export const RUTAS: Routes = [


  {path: 'login',  component: RutaLoginComponent},
  {path: 'home',component: RutaHomeComponent},
  {path: 'home_usr',component: RutaHomeUserComponent},
  {path: '', redirectTo: 'login',pathMatch: 'full',}

];

@NgModule({

    imports: [RouterModule.forRoot(RUTAS,
      {
        enableTracing: false, // <-- debugging purposes only
              })],

  exports: [RouterModule]
})
export class AppRoutingModule {}
