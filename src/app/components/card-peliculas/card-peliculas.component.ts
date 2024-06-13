import { Component, OnInit, inject } from '@angular/core';
import { ServicioPeliculasService } from '../../services/servicio-peliculas.service';
import { Pelicula } from '../../models/pelicula.interface';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

const imgUrl = environment.imgURL;
@Component({
  selector: 'app-card-peliculas',
  templateUrl: './card-peliculas.component.html',
  styleUrl: './card-peliculas.component.css'
})
export class CardPeliculasComponent implements OnInit {
  peliculas: any = [];

  // Estado de carga del progess spinner
 loaded: boolean;
 loading: boolean;

  constructor(private peliculaService: ServicioPeliculasService, private router: Router) {
    this.loaded = false;
    this.loading = true;
    
    // Configuración de duración del progress spinner          
    setTimeout(() => {
      this.loading = false;
      this.loaded = true;      
    }, 3000);
  }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe({
      next: (res:any) => {
        this.peliculas = res.results as Pelicula[];
        console.log(res.results);
      },
      error:(error) => console.log('error de despliegue', error)      
    });
  }

  getPosterUrl(posterPath: String): String {
    return imgUrl + posterPath;
  }

  showPeliculaDetails(peliculaId: number): void {
    this.router.navigateByUrl('/pelicula/' + peliculaId);
  }  
}
