import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPeliculasComponent } from './components/card-peliculas/card-peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  {path:'', component: PeliculasComponent},
  {path:'peliculaCard', component: CardPeliculasComponent},
  {path:'pelicula/:id', component: PeliculaComponent},
  {path:'**', component: PeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
