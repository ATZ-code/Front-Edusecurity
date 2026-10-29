
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pregunta {
  enunciado: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
  puntos: number;
}

@Component({
  selector: 'app-aprendizaje-gamificado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aprendizaje-gamificado.html',
  styleUrl: './aprendizaje-gamificado.scss'
})
export class AprendizajeGamificadoComponent {

  preguntas: Pregunta[] = [
    {
      enunciado: '¿Qué es el phishing?',
      opciones: [
        'Un programa para mejorar el computador',
        'Un engaño para robar información personal',
        'Una actualización del sistema',
        'Un método para proteger contraseñas'
      ],
      respuestaCorrecta: 1,
      explicacion: 'El phishing busca engañar a las personas para obtener contraseñas o datos personales.',
      puntos: 10
    },
    {
      enunciado: '¿Qué debes hacer si recibes un enlace sospechoso?',
      opciones: [
        'Abrirlo inmediatamente',
        'Compartirlo con tus amigos',
        'Verificar su origen antes de abrirlo',
        'Ingresar tus contraseñas'
      ],
      respuestaCorrecta: 2,
      explicacion: 'Siempre verifica el remitente y la dirección del enlace antes de abrirlo.',
      puntos: 10
    },
    {
      enunciado: '¿Cuál es una contraseña más segura?',
      opciones: [
        '123456',
        'password',
        'juan2005',
        'T7!mQ9#vL2@p'
      ],
      respuestaCorrecta: 3,
      explicacion: 'Una contraseña larga y difícil de adivinar, diferente para cada cuenta, mejora la seguridad.',
      puntos: 10
    },
    {
      enunciado: '¿Qué debes hacer si sospechas que robaron tu contraseña?',
      opciones: [
        'No hacer nada',
        'Cambiarla inmediatamente y proteger la cuenta',
        'Publicarla para pedir ayuda',
        'Usar la misma contraseña en todas las cuentas'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Cambia la contraseña desde el sitio oficial y activa la verificación en dos pasos cuando esté disponible.',
      puntos: 10
    }
  ];

  indiceActual = 0;
  respuestaSeleccionada: number | null = null;
  puntos = 0;
  respondida = false;
  finalizado = false;
  mensaje = '';

  get preguntaActual(): Pregunta {
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
      this.mensaje = '¡Correcto! Has ganado ' +
        this.preguntaActual.puntos + ' puntos.';
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
