import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: string;
  category: 'frontend' | 'tools' | 'soft';
  icon: string;
}

interface ProjectHighlight {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

@Component({
  selector: 'app-carta-presentacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carta-presentacion.component.html',
  styleUrl: './carta-presentacion.component.css'
})
export class CartaPresentacionComponent {
  readonly nombre = 'Joseph Asiel García Guerrero';
  readonly puesto = 'Desarrollador Junior';
  readonly tagLine = 'Frontend & Modern Web Enthusiast';
  readonly email = 'josephasiel.dev@gmail.com';
  readonly ubicacion = 'México';

  // Signals for state
  readonly activeTab = signal<'sobre-mi' | 'skills' | 'proyectos' | 'contacto'>('sobre-mi');
  readonly likes = signal<number>(24);
  readonly hasLiked = signal<boolean>(false);
  readonly copied = signal<boolean>(false);

  readonly skills: Skill[] = [
    { name: 'Angular 19 / 21', level: 'Intermedio', category: 'frontend', icon: '🅰️' },
    { name: 'TypeScript', level: 'Intermedio', category: 'frontend', icon: '🔷' },
    { name: 'JavaScript (ES6+)', level: 'Intermedio', category: 'frontend', icon: '🟨' },
    { name: 'HTML5 & CSS3', level: 'Avanzado', category: 'frontend', icon: '🎨' },
    { name: 'Bootstrap & UIX', level: 'Intermedio', category: 'frontend', icon: '📦' },
    { name: 'Git & GitHub', level: 'Intermedio', category: 'tools', icon: '🐙' },
    { name: 'Node.js & npm', level: 'Básico', category: 'tools', icon: '🟢' },
    { name: 'REST APIs & RxJS', level: 'Intermedio', category: 'frontend', icon: '⚡' },
    { name: 'Trabajo en Equipo', level: 'Avanzado', category: 'soft', icon: '🤝' },
    { name: 'Resolución de Problemas', level: 'Avanzado', category: 'soft', icon: '💡' }
  ];

  readonly projects: ProjectHighlight[] = [
    {
      title: 'Migración Angular & UIX',
      description: 'Migración de arquitectura de componentes a versiones modernas de Angular, integrando componentes responsivos y estilos modulares.',
      tags: ['Angular', 'TypeScript', 'Bootstrap 5', 'Git']
    },
    {
      title: 'Portal de Presentaciones de Equipo',
      description: 'Plataforma colaborativa multi-rama para consolidación de cartas de presentación y perfiles profesionales interactivos.',
      tags: ['Angular', 'HTML5/CSS3', 'GitHub Team Flow']
    }
  ];

  setTab(tab: 'sobre-mi' | 'skills' | 'proyectos' | 'contacto') {
    this.activeTab.set(tab);
  }

  giveLike() {
    if (!this.hasLiked()) {
      this.likes.update(l => l + 1);
      this.hasLiked.set(true);
    } else {
      this.likes.update(l => l - 1);
      this.hasLiked.set(false);
    }
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    }).catch(() => {
      // Fallback
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    });
  }
}
