import { readdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

export interface PhotoI {
  /** Thumbnail URL under public/images; larger variants share the name with another prefix. */
  src: string;
  width: number;
  height: number;
}

// Resolved from the project root: the build bundles this module into dist/, so import.meta.url is no use here.
const PHOTOS_DIR = path.resolve("src/assets/photos");

/** Lists a folder's JPEGs with their displayed dimensions, without importing the originals into the build. */
async function loadFolder(folder: string): Promise<PhotoI[]> {
  const dir = path.join(PHOTOS_DIR, folder);
  const files = readdirSync(dir)
    .filter(file => /\.jpe?g$/i.test(file))
    .sort((a, b) => a.localeCompare(b));

  return Promise.all(
    files.map(async file => {
      const { width = 0, height = 0, orientation = 1 } = await sharp(path.join(dir, file)).metadata();
      const rotated = orientation >= 5; // EXIF orientations 5–8 swap width and height
      return {
        src: `/images/${folder}/thumbnail_${file.replace(/\.jpe?g$/i, ".webp")}`,
        width: rotated ? height : width,
        height: rotated ? width : height,
      };
    }),
  );
}

export const albums = [
  {
    name: "Official Events",
    slug: "official-events",
    sessions: [
      {
        desc: "Selected photos from a 50th anniversary of marriage.",
        photos: await loadFolder("prom"),
      },
      {
        desc: "Selected photos from a 50th anniversary of marriage.",
        photos: await loadFolder("family-events"),
      },
    ],
  },
  {
    name: "Portraits & sessions",
    slug: "portraits",
    vertical: true,
    sessions: [
      {
        desc: "Selection of portraits from various sessions.",
        photos: await loadFolder("portraits"),
      },
    ],
  },
  {
    name: "Parties",
    slug: "events",
    sessions: [
      {
        desc: "Selected photos from Juwe Prozak 2.0 parties.",
        photos: await loadFolder("prozak"),
      },
      {
        desc: "Selected photos from SMP 2025, an event organised annually for 500+ high school students.",
        photos: await loadFolder("smp"),
      },
    ],
  },
  {
    name: "Sport",
    slug: "sport",
    sessions: [
      {
        desc: "Selected photos from Parafiada 2024, an event organised annually for ~1000 high school students focused on sports.",
        photos: await loadFolder("skis"),
      },
      {
        desc: "Selected photos from Parafiada 2024, an event organised annually for ~1000 high school students focused on sports.",
        photos: await loadFolder("parafiada"),
      },
    ],
  },
  {
    name: "Real estate",
    slug: "real-estate",
    sessions: [
      {
        desc: "Selected photos from session for Pieniński Potok, all visible at pieninskipotok.pl",
        photos: await loadFolder("apartments-1"),
      },
      {
        desc: "Selected photos from session for Słoneczny Stok",
        photos: await loadFolder("apartments-2"),
      },
      {
        desc: "Selected photos from session for Domek u Wiktora, all visible at domekuwiktorka.pl",
        photos: await loadFolder("apartments-3"),
      },
    ],
  },
  {
    name: "Church",
    slug: "church",
    sessions: [
      {
        desc: "Selected photos from various church celebrations.",
        photos: await loadFolder("church"),
      },
    ],
  },
  {
    name: "Street",
    slug: "street",
    sessions: [
      {
        desc: "Selected photos from my walks around several cities.",
        photos: await loadFolder("street"),
      },
    ],
  },
  {
    name: "Landscape & Drone",
    slug: "landscape",
    sessions: [
      {
        desc: "Selected photos from poznajgory.pl, all photos visible there have been taken by me.",
        photos: await loadFolder("landscape"),
      },
      {
        desc: "Selected photos from poznajgory.pl, all photos visible there have been taken by me.",
        photos: await loadFolder("drone"),
      },
    ],
  },
];
