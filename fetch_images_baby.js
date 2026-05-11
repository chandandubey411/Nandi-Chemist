const fs = require('fs');
const path = require('path');
const google = require('googlethis');

const dataFile = 'data/index.ts';
const data = fs.readFileSync(dataFile, 'utf8');

const products = [];

// Manually adding pampers if it didn't match
products.push({ name: 'Pampers Baby Diapers', image: 'pampers.png' }); 

const fullRegex = /{[\s\S]*?name:\s*'([^']+)'[\s\S]*?image:\s*'\/products\/([^']+)'[\s\S]*?category:\s*'baby-care'[\s\S]*?}/g;

let match;
while ((match = fullRegex.exec(data)) !== null) {
  products.push({ name: match[1], image: match[2] });
}

console.log('Found', products.length, 'baby care products');

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
  const options = {
    page: 0, 
    safe: false, 
    additional_params: { 
      hl: 'en' 
    }
  };

  for (const product of products) {
    console.log(`Searching for ${product.name}...`);
    try {
      const images = await google.image(product.name + ' baby care product', options);
      if (images && images.length > 0) {
        let downloaded = false;
        for (let i = 0; i < Math.min(images.length, 5); i++) {
          const url = images[i].url;
          if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')) {
             console.log(`Downloading ${url}...`);
             const dest = path.join('public', 'products', product.image);
             if (await downloadImage(url, dest)) {
               console.log(`Success for ${product.name}`);
               downloaded = true;
               break;
             }
          }
        }
        if (!downloaded) {
          console.log(`Could not download image for ${product.name}`);
        }
      } else {
        console.log(`No images found for ${product.name}`);
      }
    } catch (e) {
      console.log(`Error searching for ${product.name}: ${e.message}`);
    }
    // sleep for 1 second
    await new Promise(r => setTimeout(r, 1000));
  }
}

run();
