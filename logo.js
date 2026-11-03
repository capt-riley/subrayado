// Subrayado · logo de una app: su inicial en minúscula (Newsreader 700) y el trazo
// de subrayador. Los trazados vienen de assets/logo-letters.json (a–z y ñ, caja de 64).
import kit from "./assets/logo-letters.json" with { type: "json" };

const INK = "#17192E";
const MARKER = "#FFE14D";

/**
 * Devuelve el <svg> del logo como texto.
 * - letter: la inicial de la app ("m").
 * - color: el color de la app, en hex (el icono no cambia con el tema).
 * - variant: cómo lleva el color (pendiente de elegir en el lienzo "Familia de colores"):
 *     "baldosa": baldosa del color, letra blanca, trazo amarillo debajo.
 *     "letra":   papel blanco, letra del color, trazo amarillo detrás.
 *     "tinta":   papel blanco, letra en tinta, trazo detrás y un punto del color (el de ahora).
 * - bleed: true para iconos de app (PNG, maskable): sin esquinas, el sistema las pone.
 */
export function logoSVG({ letter, color = "#2B3FD6", variant = "tinta", size = 64, bleed = false, label } = {}) {
  const glyph = kit.letters[letter?.toLowerCase()];
  if (!glyph) throw new Error(`No hay trazado para la letra "${letter}"`);
  const rx = bleed ? 0 : kit.tile.rx;
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  const open = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64" ${a11y}>`;

  if (variant === "baldosa") {
    return open +
      `<rect width="64" height="64" rx="${rx}" fill="${color}"/>` +
      `<path d="${kit.swash}" fill="${MARKER}" transform="translate(0 44) scale(1 0.5) translate(0 -33)"/>` +
      `<path d="${glyph.d}" fill="#FFFFFF" transform="translate(0 -4)"/></svg>`;
  }
  const tile = `<rect width="64" height="64" rx="${rx}" fill="#FFFFFF"/>`;
  const swash = `<path d="${kit.swash}" fill="${MARKER}"/>`;
  if (variant === "letra") {
    return open + tile + swash + `<path d="${glyph.d}" fill="${color}"/></svg>`;
  }
  const { cx, cy, r } = kit.dot;
  return open + tile + swash + `<path d="${glyph.d}" fill="${INK}"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/></svg>`;
}
