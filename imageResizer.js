import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_FOLDER = path.join(__dirname, '/public/images');
const folders = ['/src/assets/mobile', '/src/assets/show', '/src/assets/ss'];

const specification = [
    {width: 30, prefix: 'thumbnail_'},
    {width: 480, prefix: 'hvga_'},
    {width: 720, prefix: 'wvga_'},
    {width: 1280, prefix: 'hd_'},
    {width: 1920, prefix: 'fhd_'},
];

const defaults = {
    // withoutEnlargement: true,
};


async function transformFolder(folder, outFolder) {
    const allProcesses = [];

    const files = await fs.readdir(path.join(__dirname, folder));
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const filename = path.join(__dirname, folder, file)
        console.log(filename);
        for (const spec of specification) {
            allProcesses.push(
                sharp(filename)
                    .resize(Object.assign(defaults, spec))
                    .webp()
                    .toFile(path.join(outFolder, `${spec.prefix}${file.replace(ext, '.webp')}`))
                    .then(newFileInfo => console.log('Success', JSON.stringify(newFileInfo)))
            );
        }
    }

    try {
        await Promise.all(allProcesses);
        console.log('finished processing folder', folder);
    } catch (err) {
        console.error('Error in processing', err);
    }
}

for (const folder of folders) {
    //await transformFolder(folder, OUT_FOLDER);
}

for (const file of await fs.readdir(path.join(__dirname, '/src/assets/photos'))) {
    // check if folder
    const isFolder = (await fs.stat(path.join(__dirname, '/src/assets/photos', file))).isDirectory();
    if (!isFolder) continue;
    const destination = path.join(OUT_FOLDER, file);
    // check if destination exists
    const destinationExists = (await fs.stat( destination).catch(() => null))?.isDirectory();
    // if not, create
    if (!destinationExists) {
        await fs.mkdir(destination);
    }
    console.log(file);
    await transformFolder('/src/assets/photos/' + file, destination);
}
