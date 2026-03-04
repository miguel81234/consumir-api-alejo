import { Component, OnInit } from '@angular/core';
import { PersonajeService, Personaje } from './services/personaje.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   // ← ESTA LÍNEA FALTABA
})
export class AppComponent implements OnInit {

  personaje!: Personaje;

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
    this.personajeService.getPersonaje().subscribe({
      next: (data) => {
        this.personaje = data;
      },
      error: (err) => {
        console.error('Error al obtener personaje', err);
      }
    });
  }
}