import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DANTE } from '../../dante';
import { Guitarras } from '../../guitarras/guitarras';

@Component({
  selector: 'app-carta-dante',
  standalone: true,
  imports: [Guitarras],
  templateUrl: './carta-dante.component.html',
  styleUrl: './carta-dante.component.css'
})
export class CartaDanteComponent {
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
