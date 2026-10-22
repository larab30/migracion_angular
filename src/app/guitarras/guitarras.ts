import { Component } from '@angular/core';

interface Guitarra {
  top: string;
  left?: string;
  right?: string;
  size: string;
  angle: number;
  duration: string;
  delay: string;
  flip: boolean;
}

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.html',
  styleUrl: './guitarras.css',
})
export class Guitarras {
  protected readonly guitarras: Guitarra[] = [
    { top: '8%', left: '5%', size: '3rem', angle: -25, duration: '6s', delay: '0s', flip: false },
    { top: '28%', right: '7%', size: '3.6rem', angle: 15, duration: '7s', delay: '1s', flip: true },
    { top: '62%', left: '3%', size: '2.6rem', angle: -35, duration: '8s', delay: '2s', flip: false },
    { top: '48%', right: '4%', size: '3.2rem', angle: 20, duration: '5.5s', delay: '0.5s', flip: true },
    { top: '80%', left: '14%', size: '2.8rem', angle: -15, duration: '6.5s', delay: '1.5s', flip: false },
  ];
}
