import { Component } from '@angular/core';
import { CartaPresentacionComponent } from './components/carta-presentacion/carta-presentacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CartaPresentacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
