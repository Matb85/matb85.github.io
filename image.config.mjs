// Single source of truth for the generated image variants.
// imageResizer.js writes them; observer.ts and @matb85/astro-pack read them.

/** Width → file-name prefix of every variant written to public/images. */
export const variants = [
  { width: 30, prefix: "thumbnail_" },
  { width: 720, prefix: "wvga_" },
  { width: 1280, prefix: "hd_" },
  { width: 1920, prefix: "fhd_" },
];

/** Same mapping in the shape @matb85/base-pack expects for srcset generation. */
export const formats = {
  thumbnail: /thumbnail_/,
  720: "wvga_",
  1280: "hd_",
  1920: "fhd_",
};

/** Sizes offered to the full-screen photo viewer on album pages. */
export const enlarged = [1280, 1920];
