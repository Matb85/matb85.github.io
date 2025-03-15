import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_FOLDER = path.join(__dirname, '/public/images');
const folders = ['/src/assets/photos', '/src/assets/mobile', '/src/assets/show', '/src/assets/ss'];

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

const allProcesses = [];

for (const folder of folders) {
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
                    .toFile(path.join(OUT_FOLDER, `${spec.prefix}${file.replace(ext, '.webp')}`))
                    .then(newFileInfo => console.log('Success', newFileInfo))
            );
        }
    }
}

try {
    await Promise.all(allProcesses);
    console.log('finished!');
} catch (err) {
    console.error('Error in processing', err);
}

