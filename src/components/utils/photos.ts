

interface PhotoModuleI {
  src: string;
  width: number;
  height: number;
  format: string;
}

function extractPhotos(folder: string, photos: Record<string, { default: PhotoModuleI }>): PhotoModuleI[] {
  return Object.values(photos)
    .map(photo => ({
      ...photo.default,
      src: "/images/" + folder + "/thumbnail_" + photo.default.src.match(/\/([^\/.]+)\./)![1] + ".webp",
    }))
    .sort((a, b) => a.src.localeCompare(b.src));
}

export const albums = [
  {
    name: "Street",
    slug: "street",
    sessions: [
      {
        desc: "Selected photos from my walks around several cities.",
        photos: extractPhotos("street", import.meta.glob("~/assets/photos/street/*.jpg", { eager: true })),
      },
    ],
  },
  {
    name: "Portraits",
    slug: "portraits",
    vertical: true,
    sessions: [
      {
        desc: "Selection of portraits from various sessions.",
        photos: extractPhotos("portraits", import.meta.glob("~/assets/photos/portraits/*.jpg", { eager: true })),
      },
    ],
  },
  {
    name: "Events",
    slug: "events",
    sessions: [
      {
        desc: "Selected photos from SMP 2024, an event organised annually for 500+ high school students.",
        photos: extractPhotos("smp", import.meta.glob("~/assets/photos/smp/*.jpg", { eager: true })),
      },
      {
        desc: "Selected photos from Parafia 2024, an event organised annually for ~1000 high school students focused on sports.",
        photos: extractPhotos("parafiada", import.meta.glob("~/assets/photos/parafiada/*.jpg", { eager: true })),
      },
    ],
  },
  {
    name: "Family Events",
    slug: "family-events",
    sessions: [
      {
        desc: "Selected photos from a 50th anniversary of marriage.",
        photos: extractPhotos(
          "family-events",
          import.meta.glob("~/assets/photos/family-events/*.jpg", { eager: true }),
        ),
      },
    ],
  },
  {
    name: "Church",
    slug: "church",
    sessions: [
      {
        desc: "Selected photos from various church celebrations.",
        photos: extractPhotos("church", import.meta.glob("~/assets/photos/church/*.jpg", { eager: true })),
      },
    ],
  },
  {
    name: "Real estate",
    slug: "real-estate",
    sessions: [
      {
        desc: "Selected photos from session for Pieniński Potok, all visible at pieninskipotok.pl",
        photos: extractPhotos("apartments-1", import.meta.glob("~/assets/photos/apartments-1/*.jpg", { eager: true })),
      },
      {
        desc: "Selected photos from session for Słoneczny Stok",
        photos: extractPhotos("apartments-2", import.meta.glob("~/assets/photos/apartments-2/*.jpg", { eager: true })),
      },
      {
        desc: "Selected photos from session for Domek u Wiktora, all visible at domekuwiktorka.pl",
        photos: extractPhotos("apartments-3", import.meta.glob("~/assets/photos/apartments-3/*.jpg", { eager: true })),
      },
    ],
  },
  {
    name: "Landscape",
    slug: "landscape",
    sessions: [
      {
        desc: "Selected photos from poznajgory.pl, all photos visible there have been taken by me.",
        photos: extractPhotos("landscape", import.meta.glob("~/assets/photos/landscape/*.jpg", { eager: true })),
      },
    ],
  },
  {
    name: "Drone",
    slug: "drone",
    sessions: [
      {
        desc: "Selected photos from poznajgory.pl, all photos visible there have been taken by me.",
        photos: extractPhotos("drone", import.meta.glob("~/assets/photos/drone/*.jpg", { eager: true })),
      },
    ],
  },
];
