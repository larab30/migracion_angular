# migracion_angular

# Proyecto de Migración de Angular

Este proyecto está siendo migrado a una nueva versión de Angular y Bootstrap.

## Estado del Proyecto

**Angular 19 Migration Status**


- [ ] **Testing:** Setup Jest configuration

## Características

- Migración completa a Angular 19
- Integración con Bootstrap 5
- Nueva interfaz de usuario con UIX Pack
- Mejor rendimiento y experiencia de usuario

## Ejecución del Proyecto

Para ejecutar el proyecto localmente, usa los siguientes comandos:

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

## Estructura del Proyecto

```
migracion_angular/
├── angular.json             # Configuración de Angular
├── bootstrap.min.css        # Estilos de Bootstrap 5
├── package.json             # Dependencias del proyecto
├── README.md                # Este archivo
├── tsconfig.json            # Configuración de TypeScript
└── src/                     # Código fuente
    ├── app/
    │   ├── components/        # Componentes de Angular
    │   ├── pages/             # Páginas de la aplicación
    │   ├── services/          # Servicios de la aplicación
    │   └── app.component.ts   # Componente principal
    └── main.ts              # Punto de entrada
```

## Migración a Angular 19

El proyecto está en proceso de migración a Angular 19. Las siguientes características ya han sido migradas:

### ✅ Dashboard Page

```typescript
// src/app/pages/dashboard/dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor() { }
}
```

### ✅ Perfil Page

```typescript
// src/app/pages/profile/profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor() { }
}
```

### ✅ Ajustes Page

```typescript
// src/app/pages/settings/settings.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor() { }
}
```

## Dependencias

El proyecto utiliza las siguientes dependencias:

- **Angular 19**: Framework de desarrollo de front-end
- **Bootstrap 5**: Framework de diseño CSS
- **RXJS**: Programación reactiva con observables
- **Zustand**: Manejo de estado simple y escalable
- **UIX Pack**: Componentes UI con diseño moderno

## Contribuir

Para contribuir al proyecto:

1. Crea una nueva rama para tu característica:
   ```bash
   git checkout -b feature/nombre-de-la-caracteristica
   ```

2. Desarrolla tu característica

3. Crea un pull request para revisar

4. Espera la revisión y aprobación

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Colaboradores

- Joseph Asiel Garcia Guerrero
- [Otros colaboradores]

## Contacto

Para preguntas o sugerencias, contacta a [tu correo electrónico].
