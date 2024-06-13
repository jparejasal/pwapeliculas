import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula.interface';
import { ServicioPeliculasService } from '../../services/servicio-peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

const imgUrl = environment.imgURL;
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent implements OnInit {

  pelicula = {} as Pelicula;

  panelOpenState = false;

  // Estado de carga del progess spinner
 loaded: boolean;
 loading: boolean;
  constructor (private peliculaService: ServicioPeliculasService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.loaded = false;
    this.loading = true;
    
    // Configuración de duración del progress spinner          
    setTimeout(() => {
      this.loading = false;
      this.loaded = true;      
    }, 3000);
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    if(identifier) {
      this.peliculaService.getPeliculaById(identifier).subscribe((pelicula) =>{
        if(!pelicula) {
          return this.router.navigateByUrl('/');
        }

        this.pelicula = pelicula;
        console.log('Pelicula --> ', this.pelicula);
        return;
      });
    }
  }

  getPosterUrl(posterPath: String): String {
    return imgUrl + posterPath;
  }
}