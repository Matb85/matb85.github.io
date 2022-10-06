const sharp = require("sharp");
const fs = require("fs").promises;
const OUT_FOLDER = __dirname + "/public/images";

const folders = ["/src/assets/mobile", "/src/assets/show", "/src/assets/ss"];

/** specify how to resize the images and how to name them */
/** assume that each photo has a 3/2 aspect ratio - of course it is not a requiremet, just a reference  */
const specification = [
  { width: 30, prefix: "thumbnail_" }, // width: 30
  { width: 480, prefix: "hvga_" }, // width: 480
  { width: 720, prefix: "wvga_" }, // width: 720
  { width: 1280, prefix: "hd_" }, // width: 1280
  { width: 1920, prefix: "fhd_" }, // width: 1920
];

const defaults = {
  //withoutEnlargement: true,
};

const allProcesses = [];

for (const folder of folders)
  fs.readdir(__dirname + folder).then(files => {
    files.forEach(file => {
      console.log(__dirname + folder + "/" + file);
      for (const spec of specification) {
        allProcesses.push(
          sharp(__dirname + folder + "/" + file)
            .resize(Object.assign(defaults, spec))
            .toFormat("webp")
            .toFile(OUT_FOLDER + "/" + spec.prefix + file.replace(".png", ".webp"))
            .then(newFileInfo => console.log("Success", newFileInfo))
        );
      }
    });

    Promise.all(allProcesses).then(() => {
      console.log("finished!");
    });
  });
