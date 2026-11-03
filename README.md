# subrayado

El estilo común de las apps de Álvaro: tinta sobre papel, Newsreader para leer, Caveat para lo humano y un subrayador amarillo como firma. Cada app instala este paquete y solo pone lo suyo: **su color** y **la letra de su logo**.

Las reglas de diseño (cuándo se usa cada cosa, voz y lo que nunca se hace) están en el sistema de diseño: https://claude.ai/artifact/PWVQXVUwH8nC1fqQbeBBcz

## Qué trae

| Fichero | Qué es |
|---|---|
| `tokens.css` | Colores (claro y oscuro), los seis colores de app, tipografías, espacios, radios, sombras, áreas seguras del iPhone |
| `fonts.css` + `fonts/` | Newsreader (normal y cursiva) y Caveat, para servirlas desde la propia app |
| `components.css` | Piezas `sb-*`: botón central, hueco para escribir con selector, lista, recuerdo, ficha, menú, botones, avisos, subrayado |
| `base.css` | Las tres hojas anteriores juntas |
| `icons.js` | Los 18 iconos (`ICONS`) y `iconSVG(nombre, { marker })` |
| `logo.js` | `logoSVG({ letter, color, variant })`: el logo de cualquier app con el trazado exacto de su letra |
| `assets/` | Los trazos de subrayado, los iconos en SVG y el kit de letras del logo |

## Usarlo en una app

```sh
npm install github:capt-riley/subrayado
```

```html
<html lang="es" data-color="pino">
<link rel="stylesheet" href="/subrayado/base.css">
```

- `data-color` elige el color de la app: `cobalto` (Mind Palace), `petroleo`, `pino`, `ciruela`, `granate` o `teja`. Sin él, cobalto. En CSS queda en `--accent`, `--accent-ink`, `--accent-tint`; `--app-color` es el del icono, que no cambia con el tema.
- El tema sigue al sistema; `data-theme="light"` o `"dark"` lo fuerza.
- La app sirve la carpeta del paquete (`node_modules/subrayado`) en una ruta suya, por ejemplo `/subrayado/`, para que las fuentes y los trazos se carguen con rutas relativas. Con un empaquetador (Vite, Next…) basta con `@import "subrayado/base.css";`.

```js
import { iconSVG } from "subrayado/icons.js";
import { logoSVG } from "subrayado/logo.js";

iconSVG("memories", { marker: true });
logoSVG({ letter: "m", color: "#2B3FD6", variant: "tinta" });
```

## Cambiar algo de la familia

1. Cambia aquí, sube la versión en `package.json` (`0.1.0` → `0.2.0` si cambia el aspecto, `0.1.1` si es un arreglo) y crea la etiqueta: `git tag v0.2.0 && git push --tags`.
2. En cada app: `npm install github:capt-riley/subrayado#v0.2.0`. Cada app pasa a la versión nueva cuando tú quieras, no sola.

## Pendiente

- Elegir en el lienzo "Familia de colores" (https://claude.ai/artifact/Kae7A5GjrRvcDDurwQS6yN) la fórmula del icono (`variant`) y cuánto color lleva la interfaz; los seis colores son candidatos hasta que cada app tenga el suyo.
- Pasar Mind Palace a usar este paquete en lugar de su propio `style.css`.

Las fuentes Newsreader y Caveat tienen licencia SIL Open Font License (ver `fonts/`).
