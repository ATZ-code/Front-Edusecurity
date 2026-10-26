
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Modulo {
  nombre: string;
  descripcion: string;
  icono: string;
  duracion: string;
  recompensa: number;
  estado: string;
  bloqueado: boolean;
}

interface Opcion {
  id: string;
  texto: string;
  correcta: boolean;
}

@Component({
  selector: 'app-aprendizaje-gamificado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aprendizaje-gamificado.html',
  styleUrl: './aprendizaje-gamificado.scss'
})
export class AprendizajeGamificado {
  xp = 120;
  nivel = 2;
  completados = 1;
  insignias = 1;

  respuesta = '';
  revisado = false;
  esCorrecta = false;

  modulos: Modulo[] = [
    {
      nombre: 'Fundamentos de ciberseguridad',
      descripcion: 'Aprende los principios básicos de la seguridad digital.',
      icono: '🛡️',
      duracion: '10 min',
      recompensa: 50,
      estado: 'Completado',
      bloqueado: false
    },
    {
      nombre: 'Detecta el phishing',
      descripcion: 'Identifica mensajes, correos y enlaces engañosos.',
      icono: '🎣',
      duracion: '15 min',
      recompensa: 100,
      estado: 'En progreso',
      bloqueado: false
    },
    {
      nombre: 'Contraseñas seguras',
      descripcion: 'Protege tus cuentas con contraseñas robustas.',
      icono: '🔑',
      duracion: '12 min',
      recompensa: 75,
      estado: 'Pendiente',
      bloqueado: false
    },
    {
      nombre: 'Protección de datos personales',
      descripcion: 'Aprende a cuidar tu información en Internet.',
      icono: '🔒',
      duracion: '20 min',
      recompensa: 100,
      estado: 'Bloqueado',
      bloqueado: true
    }
  ];

  opciones: Opcion[] = [
    {
      id: 'A',
      texto: 'Abrir el enlace y escribir mi contraseña.',
      correcta: false
    },
    {
      id: 'B',
      texto: 'No abrir el enlace y verificar por canales oficiales.',
      correcta: true
    },
    {
      id: 'C',
      texto: 'Reenviar el mensaje a mis contactos.',
      correcta: false
    }
  ];

  constructor(private router: Router) {}

  navegar(event: Event, ruta: string): void {
    event.preventDefault();

    if (this.router.config.some(r => r.path === ruta.replace(/^\//, ''))) {
      this.router.navigateByUrl(ruta);
    } else {
      alert('La página "' + ruta + '" todavía está pendiente de crear.');
    }
  }

  irAlDesafio(): void {
    document.getElementById('desafio')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  seleccionar(id: string): void {
    if (!this.revisado) {
      this.respuesta = id;
    }
  }

  comprobarRespuesta(): void {
    if (!this.respuesta || this.revisado) {
      return;
    }

    this.esCorrecta = this.opciones.some(
      opcion => opcion.id === this.respuesta && opcion.correcta
    );

    this.revisado = true;

    if (this.esCorrecta) {
      this.xp += 50;
      this.completados = Math.min(this.completados + 1, 4);
      this.insignias = Math.max(this.insignias, 2);
      this.nivel = Math.floor(this.xp / 100) + 1;

      const siguiente = this.modulos.find(
        modulo => modulo.bloqueado
      );

      if (siguiente) {
        siguiente.bloqueado = false;
        siguiente.estado = 'Pendiente';
      }
    }
  }

  reiniciarDesafio(): void {
    this.respuesta = '';
    this.revisado = false;
    this.esCorrecta = false;
  }

  iniciarModulo(nombre: string): void {
    alert('Has seleccionado: ' + nombre +
      '. Aquí conectaremos el contenido del módulo.');
  }
}
