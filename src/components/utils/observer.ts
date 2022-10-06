const baseSizes = {
  thumbnail: /min_|thumbnail_/,
  1920: "fhd_",
  1280: "hd_",
  720: "wvga_",
  480: "hvga_",
} as BaseSizes;

interface BaseSizes extends Record<number, string> {
  thumbnail: string | RegExp;
}

type Sizes = Array<number> | Record<string | number, string | number>;

export default function (src: string, sizes: Sizes) {
  let genSrcset = "",
    genSizes = "";
  // example: [480, 1920, 2400, integer, integer ...]
  if (Array.isArray(sizes)) {
    for (let i = 0; i < sizes.length; i++) {
      const sizedsrc = src.replace(baseSizes.thumbnail, baseSizes[sizes[i]]);
      genSrcset += `${sizedsrc} ${sizes[i]}w, `;
    }
  } else {
    // example: {480: 363, 1920: 433, 2400: 1234, imgversion: sizetopick, ... }
    const keys = Object.keys(sizes);
    for (let i = 0; i < keys.length; i++) {
      const curSize = keys[i] as keyof BaseSizes; //current size
      const sizedsrc = src.replace(baseSizes.thumbnail, baseSizes[curSize] as string);
      genSrcset += `${sizedsrc} ${keys[i]}w, `;
      if (i < keys.length - 1) genSizes += `(max-width: ${sizes[curSize]}px) ${curSize}px, `;
    }
    genSizes += "100vw";
  }
  return { genSrcset, genSizes };
}
