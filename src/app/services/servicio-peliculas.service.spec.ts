import { TestBed } from '@angular/core/testing';

import { ServicioPeliculasService } from './servicio-peliculas.service';

describe('ServicioPeliculasService', () => {
  let service: ServicioPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
