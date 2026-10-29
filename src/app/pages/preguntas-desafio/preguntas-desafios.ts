
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PREGUNTAS } from './data/preguntas';

@Component({
  selector: 'app-preguntas-desafios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './preguntas-desafios.html',
  styleUrl: './preguntas-desafios.scss'
})
export class PreguntasDesafiosComponent {

  preguntas = PREGUNTAS;

  indiceActual = 0;
  respuestaSeleccionada: number | null = null;
  puntos = 0;
  respondida = false;
  finalizado = false;
  mensaje = '';

  get preguntaActual() {
    return this.preguntas[this.indiceActual];
  }

  responder(indice: number): void {
    if (this.respondida || this.finalizado) {
      return;
    }

    this.respuestaSeleccionada = indice;
    this.respondida = true;

    if (indice === this.preguntaActual.respuestaCorrecta) {
      this.puntos += this.preguntaActual.puntos;
      this.mensaje =
        '¡Respuesta correcta! Ganaste ' +
        this.preguntaActual.puntos +
        ' puntos.';
    } else {
      this.mensaje = 'Respuesta incorrecta. ¡Sigue aprendiendo!';
    }
  }

  siguientePregunta(): void {
    if (!this.respondida) {
      return;
    }

    if (this.indiceActual < this.preguntas.length - 1) {
      this.indiceActual++;
      this.respuestaSeleccionada = null;
      this.respondida = false;
      this.mensaje = '';
    } else {
      this.finalizado = true;
    }
  }

  reiniciar(): void {
    this.indiceActual = 0;
    this.respuestaSeleccionada = null;
    this.puntos = 0;
    this.respondida = false;
    this.finalizado = false;
    this.mensaje = '';
  }
}
