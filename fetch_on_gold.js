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
  } catch (e) {
    return false;
  }
}

async function run() {
  const options = { page: 0, safe: false, additional_params: { hl: 'en' } };
  const dest = path.join('public', 'products', 'on-gold.png');

  const queries = [
    'Optimum Nutrition Gold Standard Whey Protein 2lbs container',
    'ON Gold Standard 100% Whey protein powder tub',
    'Optimum Nutrition Gold Standard product box pharmeasy'
  ];

  for (const query of queries) {
    console.log('Trying query: ' + query);
    const images = await google.image(query, options);
    if (images && images.length > 0) {
      for (let i = 0; i < Math.min(images.length, 10); i++) {
        const url = images[i].url;
        if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')) {
          console.log('Downloading: ' + url);
          if (await downloadImage(url, dest)) {
            console.log('Success!');
            return;
          }
        }
      }
    }
  }
  console.log('Failed to download image.');
}

run();
