// Subrayado · iconos. Trazo de 1,6 en una rejilla de 24, extremos redondeados.
// Se pintan con currentColor: el color lo pone quien los usa.

export const ICONS = {
  write: { d: "M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3z M14 7l3 3" },
  ask: { d: "M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z M19 17.5v3 M17.5 19h3" },
  search: { d: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z M15.5 15.5L20 20" },
  memories: { d: "M19.5 9A8 8 0 1 0 20 14 M20.5 4v5h-5", dots: [[12, 12, 1.8]] },
  map: { d: "M6 17L11 7l7 4-3 8z", dots: [[6, 17, 1.9], [11, 7, 1.9], [18, 11, 2.2], [15, 19, 1.6]] },
  links: { d: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" },
  persona: { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4.5 20a7.5 7.5 0 0 1 15 0" },
  proyecto: { d: "M3 7.5A1.5 1.5 0 0 1 4.5 6H9l2 2h8.5A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z" },
  lugar: { d: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" },
  restaurante: { d: "M7 3v7a2 2 0 0 0 4 0V3 M9 10v11 M16 3c-1.7 1.5-2.5 3.6-2.5 6.5V13H17V3z M17 13v8" },
  organizacion: { d: "M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21 M14 10h4.5A1.5 1.5 0 0 1 20 11.5V21 M3 21h18 M8 8h2 M8 12h2 M8 16h2" },
  obra: { d: "M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z M13 4h5.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H13z" },
  compra: { d: "M6 8h12l-1 12H7z M9 8a3 3 0 0 1 6 0" },
  otro: { d: "M12 4l2.2 5.3 5.8.5-4.4 3.8 1.3 5.6L12 16.3 7.1 19.2l1.3-5.6L4 9.8l5.8-.5z" },
  tags: { d: "M9.5 4L7.5 20 M16.5 4l-2 16 M4.5 9h15 M3.5 15h15" },
  back: { d: "M15 5l-7 7 7 7" },
  chevron: { d: "M9 5l7 7-7 7" },
  down: { d: "M6 9l6 6 6-6" },
};

// Pincelada de subrayador detrás de los iconos principales del menú.
const MARKER = '<rect x="3" y="12.5" width="18" height="7" rx="2.2" fill="var(--marker)" transform="rotate(-7 12 16)"/>';

/** Devuelve el <svg> de un icono como texto. `marker: true` le pone la pincelada. */
export function iconSVG(name, { size = 24, marker = false, label } = {}) {
  const icon = ICONS[name] ?? ICONS.otro;
  const dots = (icon.dots ?? []).map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`).join("");
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${a11y}>${marker ? MARKER : ""}` +
    `<path d="${icon.d}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>${dots}</svg>`;
}
