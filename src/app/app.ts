import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaDanteComponent } from './components/carta-dante/carta-dante.component';
import { CartaBeraComponent } from './components/carta-bera/carta-bera.component';
import { CartaPresentacionComponent } from './components/carta-joseph/carta-presentacion.component';
import { CartaAlexisComponent } from './components/carta-alexis/carta-alexis.component';
import { CartaIvettComponent } from './components/carta-ivett/carta-ivett.component';

type Perfil = 'joseph' | 'dante' | 'bera' | 'alexis' | 'ivett';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CartaDanteComponent,
    CartaBeraComponent,
    CartaPresentacionComponent,
    CartaAlexisComponent,
    CartaIvettComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly perfilActivo = signal<Perfil>('joseph');

  seleccionarPerfil(perfil: Perfil) {
    this.perfilActivo.set(perfil);
  }
}
