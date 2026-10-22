import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DANTE } from './dante';
import { Guitarras } from './guitarras/guitarras';

@Component({
  selector: 'app-root',
  imports: [Guitarras],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly dante = DANTE;
  protected readonly mensaje = signal('');
  protected readonly escribiendo = signal(true);

  constructor() {
    const texto = this.dante.mensaje;
    const sinAnimacion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (sinAnimacion) {
      this.mensaje.set(texto);
      this.escribiendo.set(false);
      return;
    }

    // Efecto de maquina de escribir para el mensaje de bienvenida
    let i = 0;
    const timer = setInterval(() => {
      i++;
      this.mensaje.set(texto.slice(0, i));
      if (i >= texto.length) {
        clearInterval(timer);
        this.escribiendo.set(false);
      }
    }, 55);

    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }
}
