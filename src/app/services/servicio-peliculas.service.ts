import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.interface';

const apiURL = environment.apiURL;
const apiKey = environment.apiKey;
const apiMovieURL = environment.apiMovieURL;
@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService { 

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${apiURL}?api_key=${apiKey}`);
  }

  getPeliculaById(id: string): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${apiMovieURL}` + id + `?api_key=${apiKey}`);
  }
}
