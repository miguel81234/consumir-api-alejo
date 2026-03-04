import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/182';

  constructor(private http: HttpClient) {}

  getPersonaje(): Observable<Personaje> {
    return this.http.get<Personaje>(this.apiUrl);
  }
}