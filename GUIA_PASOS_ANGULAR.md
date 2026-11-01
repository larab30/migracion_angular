# 🚀 Bitácora de Creación: Proyecto Carta de Presentación en Angular

Este documento detalla todos los pasos realizados desde la conexión con el repositorio, la instalación y configuración de Angular, la solución de errores de dependencias, hasta la creación del componente interactivo de la **Carta de Presentación** para **Joseph Asiel García Guerrero** como **Desarrollador Junior**.

---

## 📌 Tabla de Contenidos
1. [Conexión y Preparación del Repositorio Git](#1-conexión-y-preparación-del-repositorio-git)
2. [Instalación de Angular CLI](#2-instalación-de-angular-cli)
3. [Creación del Proyecto Angular](#3-creación-del-proyecto-angular)
4. [Diagnóstico y Resolución del Error de npm](#4-diagnóstico-y-resolución-del-error-de-npm)
5. [Desarrollo del Componente de Carta de Presentación](#5-desarrollo-del-componente-de-carta-de-presentación)
6. [Diseño Visual y Estilos (Glassmorphism & Responsive)](#6-diseño-visual-y-estilos-glassmorphism--responsive)
7. [Integración en la Aplicación](#7-integración-en-la-aplicación)
8. [Ejecución del Servidor de Desarrollo](#8-ejecución-del-servidor-de-desarrollo)

---

## 1. Conexión y Preparación del Repositorio Git

1. **Clonación inicial:**  
   Se vinculó la carpeta local con el repositorio remoto de GitHub:
   ```bash
   git clone https://github.com/larab30/migracion_angular.git .
   ```
2. **Rama de trabajo (`joseph`):**  
   Se creó y se posicionó en la rama de desarrollo personal:
   ```bash
   git checkout -b joseph
   ```
3. **Configuración de `.gitignore`:**  
   Se generó un archivo `.gitignore` raíz para evitar subir archivos pesados como `node_modules/`, la caché de `.angular/` o los builds en `dist/`.

---

## 2. Instalación de Angular CLI

1. **Comprobación del entorno Node.js y npm:**
   ```bash
   node -v   # v20.20.0
   npm -v    # 10.8.2
   ```
2. **Instalación global de Angular CLI:**
   ```bash
   npm install -g @angular/cli
   ```
3. **Verificación de la versión instalada:**
   ```bash
   ng version
   ```
   *Resultado: Angular CLI 21 instalado con éxito.*

---

## 3. Creación del Proyecto Angular

Para estructurar la carta dentro de una aplicación Angular modular sin alterar la raíz del repositorio, se ejecutó:

```bash
ng new carta-presentacion --skip-git --style=css --ssr=false
```

* **`--skip-git`**: Evita crear un submódulo o repositorio Git anidado dentro de la carpeta del proyecto.
* **`--style=css`**: Define CSS estándar para el diseño de componentes.
* **`--ssr=false`**: Genera una Single Page Application (SPA) optimizada para cliente.

---

## 4. Diagnóstico y Resolución del Error de npm

Durante la creación del proyecto, el comando arrojó el siguiente fallo:
```
TypeError: Cannot read properties of null (reading 'edgesOut')
✖ Package install failed
```

### 🔍 Causa:
Se trata de una incompatibilidad conocida en el árbol de dependencias de `npm 10.8.2` al resolver los paquetes "peer" del motor de pruebas Vitest (`jsdom`, `happy-dom`, `@vitest/ui`). Los archivos del proyecto Angular sí se crearon correctamente; únicamente se interrumpió la descarga de paquetes.

### ✅ Solución Aplicada:
Entrar a la carpeta del proyecto y finalizar la instalación omitiendo conflictos estrictos de dependencias peer:
```bash
cd carta-presentacion
npm install --legacy-peer-deps
```
*Resultado:* Se instalaron los 470 paquetes correctamente con 0 vulnerabilidades.

---

## 5. Desarrollo del Componente de Carta de Presentación

Se estructuró un componente standalone moderno en:
`src/app/components/carta-presentacion/`

### Archivos creados:
1. **`carta-presentacion.component.ts`**:
   - Componente independiente (*Standalone*).
   - Uso de **Angular Signals** (`activeTab`, `likes`, `hasLiked`, `copied`) para un manejo de estado reactivo y eficiente.
   - Datos personalizados:
     - **Nombre:** Joseph Asiel García Guerrero
     - **Puesto:** Desarrollador Junior
     - **Enfoque:** Frontend con Angular, TypeScript y UI moderna
   - Funcionalidades interactivas:
     - Cambio dinámico de pestañas (*Sobre Mí*, *Habilidades*, *Proyectos*, *Contacto*).
     - Contador interactivo de "Likes / Apoyos".
     - Botón para copiar correo al portapapeles con confirmación visual instantánea.

2. **`carta-presentacion.component.html`**:
   - Banner superior con gradiente dinámico y estado de disponibilidad (*"Disponible para colaborar"* con luz verde pulsante).
   - Avatar con iniciales estilizadas (**JG**) y anillo de degradado.
   - Sistema de pestañas con la nueva sintaxis de control de flujo de Angular (`@if`, `@for`).
   - Tarjetas de habilidades categorizadas (Angular, TypeScript, JavaScript, HTML5/CSS3, Git, Bootstrap).

---

## 6. Diseño Visual y Estilos (Glassmorphism & Responsive)

En **`carta-presentacion.component.css`** y **`styles.css`**:
* **Efecto Glassmorphism:** Fondo oscuro translúcido con `backdrop-filter: blur(20px)`, bordes sutiles y sombras de profundidad.
* **Orbes de luz ambiental:** Gradientes radiales difuminados de fondo en tonos azul cielo e índigo con animación flotante continua.
* **Tipografía moderna:** Integración de Google Fonts (**Outfit** para encabezados/cuerpo y **JetBrains Mono** para detalles técnicos).
* **Diseño adaptativo (Responsive):** Ajuste fluido para dispositivos móviles y pantallas de escritorio.

---

## 7. Integración en la Aplicación

1. **`src/app/app.ts`:** Se importó el componente `CartaPresentacionComponent` en la lista de `imports` del componente raíz.
2. **`src/app/app.html`:** Se reemplazó la plantilla por defecto con la etiqueta `<app-carta-presentacion></app-carta-presentacion>`.
3. **`src/index.html`:** Se incluyeron las fuentes web y título optimizado.

---

## 8. Ejecución del Servidor de Desarrollo

Para visualizar y trabajar con recarga en caliente (*Hot Reload*):
```bash
cd carta-presentacion
ng serve -o
```
La aplicación se compila y abre automáticamente en:
👉 **`http://localhost:4200`**
