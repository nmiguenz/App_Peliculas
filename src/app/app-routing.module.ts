import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/busqueda',
    pathMatch:'full'
  },
  {
    path:'bienvenido',
    component:BienvenidoComponent
  },
  {
    path:'busqueda',
    component:BusquedaComponent
  },
  {
    path:'altaActor',
    component:ActorAltaComponent
  },
  {
    path:'altaPelicula',
    component:PeliculaAltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
