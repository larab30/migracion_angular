import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaDanteComponent } from './components/carta-dante/carta-dante.component';
import { CartaBeraComponent } from './components/carta-bera/carta-bera.component';
import { CartaPresentacionComponent } from './components/carta-joseph/carta-presentacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CartaDanteComponent,
    CartaBeraComponent,
    CartaPresentacionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly perfilActivo = signal<'dante' | 'bera' | 'joseph'>('joseph');

  seleccionarPerfil(perfil: 'dante' | 'bera' | 'joseph') {
    this.perfilActivo.set(perfil);
  }
}
