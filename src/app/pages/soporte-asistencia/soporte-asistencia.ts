
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Solicitud {
  id: number;
  asunto: string;
  categoria: string;
  descripcion: string;
  fecha: string;
  estado: string;
}

@Component({
  selector: 'app-soporte-asistencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soporte-asistencia.html',
  styleUrl: './soporte-asistencia.scss'
})
export class AsistenciaSoporteComponent {
  asunto = '';
  categoria = 'Problema técnico';
  descripcion = '';

  solicitudes: Solicitud[] = [];
  mensaje = '';
  tipoMensaje = '';

  constructor() {
    this.cargarSolicitudes();
  }

  registrarSolicitud(): void {
    if (
      !this.asunto.trim() ||
      !this.descripcion.trim() ||
      !this.categoria
    ) {
      this.mostrarMensaje(
        'Completa todos los campos antes de enviar.',
        'error'
      );
      return;
    }

    const nuevaSolicitud: Solicitud = {
      id: Date.now(),
      asunto: this.asunto.trim(),
      categoria: this.categoria,
      descripcion: this.descripcion.trim(),
      fecha: new Date().toLocaleDateString('es-CO'),
      estado: 'Pendiente'
    };

    this.solicitudes.unshift(nuevaSolicitud);
    this.guardarSolicitudes();

    this.asunto = '';
    this.categoria = 'Problema técnico';
    this.descripcion = '';

    this.mostrarMensaje(
      'Tu solicitud se registró correctamente.',
      'exito'
    );
  }

  private cargarSolicitudes(): void {
    try {
      const datos = localStorage.getItem('edusecurity_solicitudes');

      if (datos) {
        this.solicitudes = JSON.parse(datos) as Solicitud[];
      }
    } catch {
      this.solicitudes = [];
    }
  }

  private guardarSolicitudes(): void {
    try {
      localStorage.setItem(
        'edusecurity_solicitudes',
        JSON.stringify(this.solicitudes)
      );
    } catch {
      this.mostrarMensaje(
        'No fue posible guardar la solicitud en este navegador.',
        'error'
      );
    }
  }

  private mostrarMensaje(texto: string, tipo: string): void {
    this.mensaje = texto;
    this.tipoMensaje = tipo;
  }
}
