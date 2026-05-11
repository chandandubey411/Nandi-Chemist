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

const products = [
  { name: `Johnson's Baby Lotion`, image: 'johnsons-lotion.png' },
  { name: `Johnson's Baby Shampoo`, image: 'johnsons-shampoo.png' },
  { name: `Johnson's Baby Soap`, image: 'johnsons-soap.png' },
  { name: `Johnson's Baby Oil`, image: 'johnsons-oil.png' },
  { name: `Johnson's Baby Powder`, image: 'johnsons-powder.png' }
];

async function run() {
  const options = { page: 0, safe: false, additional_params: { hl: 'en' } };

  for (const product of products) {
    console.log('Searching for ' + product.name + '...');
    try {
      const images = await google.image(product.name + ' baby care pharmeasy', options);
      if (images && images.length > 0) {
        let downloaded = false;
        for (let i = 0; i < Math.min(images.length, 5); i++) {
          const url = images[i].url;
          if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')) {
             const dest = path.join('public', 'products', product.image);
             if (await downloadImage(url, dest)) {
               console.log('Success for ' + product.name);
               downloaded = true;
               break;
             }
          }
        }
      }
    } catch (e) {
      console.log('Error: ' + e.message);
    }
  }
}

run();
