
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected modoOscuro = signal(true);

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const temaGuardado = localStorage.getItem('edusecurity-tema');
      this.modoOscuro.set(temaGuardado !== 'claro');
    }
  }

  protected cambiarTema(): void {
    this.modoOscuro.update(valor => !valor);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(
        'edusecurity-tema',
        this.modoOscuro() ? 'oscuro' : 'claro'
      );
    }
  }
}
