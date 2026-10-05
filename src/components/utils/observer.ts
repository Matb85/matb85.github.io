import { formats } from "../../../image.config.mjs";

interface BaseSizes extends Record<number, string> {
  thumbnail: string | RegExp;
}

const baseSizes = formats as unknown as BaseSizes;

/** Builds a srcset for a thumbnail URL by swapping its prefix for each requested width's prefix. */
export default function (src: string, sizes: number[]) {
  const genSrcset = sizes.map(size => `${src.replace(baseSizes.thumbnail, baseSizes[size])} ${size}w`).join(", ");
  return { genSrcset };
}
