# Portafolio — Guillermo Costilla

Sitio con dos perfiles: **Data Analyst** (`/data-analytics`) y **Full Stack Developer** (`/full-stack`). La portada (`/`) permite elegir el perfil.

## Ejecutar

Usar **PNPM**:

```bash
pnpm install
pnpm dev
```

Build y lint:

```bash
pnpm lint
pnpm build
pnpm preview
```

## Agregar un proyecto

### Full Stack

1. Guardá la imagen en `src/assets/fullstack/`.
2. Importala en `src/data/fullstackProjects.js`.
3. Agregá un objeto al array (`name`, `image`, `description`, `tools`, `githubUrl`, `demoUrl`).
4. Si `githubUrl` o `demoUrl` están vacíos, el botón no se muestra.

### Data Analytics

Igual, en `src/assets/analytics/` y `src/data/analyticsProjects.js`.

Los campos extra (`businessProblem`, `analysisGoal`, `dataPrep`, `kpis`, `insights`) aparecen en el modal **Ver caso**.

## Completar a mano

- Enlaces de GitHub y demo de los tableros de analítica.
- Stack real del CRM de negocios (`tools` está vacío a propósito).
- GitHub y demo del CRM de negocios cuando existan.

Contacto, CVs y foto se editan en `src/config/site.js`.
