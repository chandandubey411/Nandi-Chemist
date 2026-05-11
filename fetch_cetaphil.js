const fs = require('fs');
const path = require('path');
const google = require('googlethis');

async function downloadImage(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(dest, buffer);
    return true;
  } catch (e) { return false; }
}

async function run() {
  const options = { page: 0, safe: false, additional_params: { hl: 'en' } };
  const dest = path.join('public', 'products', 'cetaphil-cleanser.png');
  const queries = [
    'Cetaphil Gentle Skin Cleanser face wash bottle',
    'Cetaphil cleanser sensitive skin 125ml',
    'Cetaphil face wash moisturizing lotion'
  ];
  for (const query of queries) {
    console.log('Trying: ' + query);
    const images = await google.image(query, options);
    if (images) {
      for (let i = 0; i < Math.min(images.length, 10); i++) {
        const url = images[i].url;
        if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')) {
          if (await downloadImage(url, dest)) { console.log('Success!'); return; }
        }
      }
    }
  }
  console.log('Failed.');
}
run();
