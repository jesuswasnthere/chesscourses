# Chess Courses — Cursos de ajedrez

Sitio web estático con cursos de ajedrez escritos en Markdown. Cada curso es un archivo de la colección `cursos` y se publica automáticamente en su propia página.

## Cursos incluidos

| Archivo | Tema |
|---|---|
| `apertura.md` | Aperturas principales |
| `mediojuego.md` | Medio juego |
| `tactica.md` | Táctica |
| `estrategia.md` | Estrategia |
| `finales.md` | Finales |
| `sobremi.md` | Sobre el autor |

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Bienvenida y listado de cursos |
| `/curso/[id]` | Página de cada curso |
| `/about` | Sobre mí |

## Stack

Astro (Content Collections) · Tailwind CSS 4 · TypeScript · Zod.

## Estructura

```
src/
├── content/
│   ├── config.ts            # Esquema de la colección "cursos"
│   └── cursos/*.md          # Un archivo por curso
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── curso/[id].astro     # Página dinámica por curso
├── components/              # Navbar, Welcome, Aboutcomp, ChessSnow (fondo animado)
├── layouts/Layout.astro
└── styles/global.css
```

## Agregar un curso

Crear `src/content/cursos/<id>.md` con este encabezado:

```md
---
title: "Nombre del curso"
author: Jesús Mariño
img: imagen.png
readtime: 5          # opcional, minutos
description: "Resumen corto del curso."
---

Contenido del curso en Markdown…
```

La página `/curso/<id>` se genera sola.

## Instalación

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build en ./dist
npm run preview
```

## Notas

- `package.json` todavía se llama `paginaprimera` e incluye dependencias que no usa el sitio (`next`, `react`, `vue`).

---

Desarrollado por **Jesús Mariño** · [Stackvro](https://github.com/jesuswasnthere/stackvro)
