# subrayado

El estilo común de las apps de Álvaro: tinta sobre papel, Newsreader para leer, Caveat para lo humano y un subrayador como firma, de un color distinto en cada app. Cada app instala este paquete y solo pone lo suyo: **su rotulador** (el color del subrayado, con su tinta a juego) y **la letra de su logo**.

Las reglas de diseño (cuándo se usa cada cosa, voz y lo que nunca se hace) están en el sistema de diseño: https://claude.ai/artifact/PWVQXVUwH8nC1fqQbeBBcz

## Qué trae

| Fichero | Qué es |
|---|---|
| `tokens.css` | Colores (claro y oscuro), los seis rotuladores con su tinta, tipografías, espacios, radios, sombras, áreas seguras del iPhone |
| `fonts.css` + `fonts/` | Newsreader (normal y cursiva) y Caveat, para servirlas desde la propia app |
| `components.css` | Piezas `sb-*`: botón central, hueco para escribir con selector, lista, recuerdo, ficha, menú, botones, avisos, subrayado |
| `base.css` | Las tres hojas anteriores juntas |
| `icons.js` | Los 18 iconos (`ICONS`) y `iconSVG(nombre, { marker })` |
| `logo.js` | `logoSVG({ letter, rotulador })`: el logo de cualquier app con el trazado exacto de su letra; `ROTULADORES` |
| `assets/` | El trazo de subrayado de cada rotulador (claro y oscuro), los iconos en SVG y el kit de letras del logo |

## Usarlo en una app

```sh
npm install github:capt-riley/subrayado
```

```html
<html lang="es" data-color="rosa">
<link rel="stylesheet" href="/subrayado/base.css">
```

- `data-color` elige el rotulador de la app: `amarillo` (Mind Palace), `rosa`, `verde`, `azul`, `naranja` o `lila`. Sin él, amarillo. El rotulador queda en `--marker` (subrayados, el modo Preguntar) y su tinta a juego en `--accent`, `--accent-ink` y `--accent-tint` (botones, `#temas`, lo escrito a mano). `--app-marker` y `--app-dot` son los del icono, que no cambian con el tema.

| Rotulador | Tinta | App |
|---|---|---|
| amarillo | cobalto | Mind Palace |
| rosa | frambuesa | libre |
| verde | pino | libre |
| azul | petróleo | libre |
| naranja | teja | libre |
| lila | ciruela | libre |

- El tema sigue al sistema; `data-theme="light"` o `"dark"` lo fuerza.
- La app sirve la carpeta del paquete (`node_modules/subrayado`) en una ruta suya, por ejemplo `/subrayado/`, para que las fuentes y los trazos se carguen con rutas relativas. Con un empaquetador (Vite, Next…) basta con `@import "subrayado/base.css";`.

```js
import { iconSVG } from "subrayado/icons.js";
import { logoSVG } from "subrayado/logo.js";

iconSVG("memories", { marker: true });
logoSVG({ letter: "m", rotulador: "amarillo" });
```

## Cambiar algo de la familia

1. Cambia aquí, sube la versión en `package.json` (`0.1.0` → `0.2.0` si cambia el aspecto, `0.1.1` si es un arreglo) y crea la etiqueta: `git tag v0.2.0 && git push --tags`.
2. En cada app: `npm install github:capt-riley/subrayado#v0.2.0`. Cada app pasa a la versión nueva cuando tú quieras, no sola.

Las fuentes Newsreader y Caveat tienen licencia SIL Open Font License (ver `fonts/`).
