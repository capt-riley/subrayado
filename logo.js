// Subrayado · logo de una app: su inicial en minúscula (Newsreader 700) en tinta, el
// trazo de su rotulador y un punto de su tinta. Los trazados vienen de
// assets/logo-letters.json (a–z y ñ, caja de 64). El icono no cambia con el tema.
import kit from "./assets/logo-letters.json" with { type: "json" };

const INK = "#17192E";

/** El rotulador de cada app y la tinta que va a juego (la del punto). */
export const ROTULADORES = {
  amarillo: { marker: "#FFE14D", dot: "#2B3FD6" }, // Mind Palace
  rosa: { marker: "#FF9FCB", dot: "#B0215E" },
  verde: { marker: "#A3EE9C", dot: "#1C6B45" },
  azul: { marker: "#9DD7FF", dot: "#0B6A78" },
  naranja: { marker: "#FFBA6E", dot: "#B4471C" },
  lila: { marker: "#CDB8FF", dot: "#6B2E8F" },
};

/**
 * Devuelve el <svg> del logo como texto.
 * - letter: la inicial de la app ("m").
 * - rotulador: amarillo, rosa, verde, azul, naranja o lila.
 * - bleed: true para iconos de app (PNG, maskable): sin esquinas ni borde, el sistema las pone.
 */
export function logoSVG({ letter, rotulador = "amarillo", size = 64, bleed = false, label } = {}) {
  const glyph = kit.letters[letter?.toLowerCase()];
  if (!glyph) throw new Error(`No hay trazado para la letra "${letter}"`);
  const r = ROTULADORES[rotulador];
  if (!r) throw new Error(`No hay rotulador "${rotulador}"`);
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  const tile = bleed
    ? `<rect width="64" height="64" fill="#FFFFFF"/>`
    : `<rect x="0.75" y="0.75" width="62.5" height="62.5" rx="${kit.tile.rx}" fill="#FFFFFF" stroke="#E3E5EF" stroke-width="1.5"/>`;
  const { cx, cy, r: dotR } = kit.dot;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64" ${a11y}>` +
    tile + `<path d="${kit.swash}" fill="${r.marker}"/><path d="${glyph.d}" fill="${INK}"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${dotR}" fill="${r.dot}"/></svg>`;
}
