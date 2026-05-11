const fs = require('fs');
const path = require('path');
const google = require('googlethis');

const products = [
  { name: 'Himalaya Neem Face Wash 150ml purifying', image: 'himalaya.png' },
  { name: 'Cetaphil Gentle Skin Cleanser 125ml', image: 'cetaphil-cleanser.png' },
  { name: 'Neutrogena Deep Clean face wash 200ml oil free', image: 'neutrogena-clean.png' },
  { name: 'Nivea Soft Light Moisturizing Cream 200ml', image: 'nivea-soft.png' },
  { name: 'Vaseline Intensive Care Body Lotion 400ml', image: 'vaseline.png' },
  { name: 'Lakme Sun Expert SPF 50 sunscreen 50ml', image: 'lakme-sun.png' },
  { name: 'Himalaya Lip Balm 4.5g natural honey', image: 'himalaya-lipbalm.png' },
  { name: 'Dove Nourishing Shampoo 340ml intensive repair', image: 'dove-hair.png' },
  { name: 'Pantene Smooth and Silky Conditioner 340ml', image: 'pantene-cond.png' },
  { name: 'Parachute Advansed Coconut Hair Oil 200ml', image: 'parachute.png' },
  { name: 'Livon Hair Serum 100ml frizz control', image: 'livon-serum.png' },
  { name: 'Clinic Plus Strength and Shine Shampoo 340ml', image: 'clinic-plus.png' },
  { name: 'Dove Beauty Bar soap 125g moisturizing', image: 'dove-soap.png' },
  { name: 'Dettol Body Wash 250ml germ protection', image: 'dettol-wash.png' },
  { name: 'Lifebuoy Germ Protection Hand Wash 200ml', image: 'lifebuoy.png' },
  { name: 'Savlon Hand Sanitizer 500ml 99.9% germs', image: 'savlon.png' },
  { name: 'Wet Wipes 80 pcs pack personal care', image: 'wet-wipes.png' },
  { name: 'Gillette Mach3 Razor blade men grooming', image: 'gillette.png' },
  { name: 'Gillette Sensitive Shaving Foam 418g', image: 'gillette-foam.png' },
  { name: 'Philips BT3221 Cordless beard trimmer', image: 'philips-trimmer.png' },
  { name: 'Nivea Men Deodorant spray 150ml 48hr', image: 'nivea-deo.png' },
  { name: 'Fogg Deodorant body spray 150ml long lasting', image: 'fogg.png' },
  { name: 'Wild Stone CODE Perfume 100ml men', image: 'wildstone.png' },
  { name: 'Colgate Total toothpaste 150g whitening', image: 'colgate.png' },
  { name: 'Sensodyne Toothpaste 100g sensitivity relief', image: 'sensodyne.png' },
  { name: 'Listerine Mouthwash 250ml cool mint', image: 'listerine.png' },
  { name: 'Oral-B Toothbrush soft bristle cross action', image: 'oralb.png' },
  { name: 'Pepsodent Toothpaste 150g germ check', image: 'pepsodent.png' },
  { name: 'The Man Company Charcoal Face Wash 100ml', image: 'mancompany.png' },
  { name: 'Beardo Beard and Hair Growth Oil 30ml', image: 'beardo.png' },
  { name: 'Garnier Men Acno Fight Face Wash 100g', image: 'garnier-men.png' },
  { name: 'Biotique Bio Kelp Protein Shampoo 190ml hair fall', image: 'biotique-shampoo.png' },
  { name: 'Pears Transparent Soap 125g pure gentle', image: 'pears.png' },
  { name: 'Axe Body Spray Deodorant 150ml', image: 'axe.png' },
  { name: 'Mamaearth Ubtan Face Wash 100ml natural', image: 'mamaearth-face.png' },
  { name: 'Plum Body Lotion 200ml vegan moisturizer', image: 'plum-lotion.png' },
];

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
  for (const product of products) {
    console.log('Searching: ' + product.name);
    try {
      const images = await google.image(product.name, options);
      if (images && images.length > 0) {
        let downloaded = false;
        for (let i = 0; i < Math.min(images.length, 8); i++) {
          const url = images[i].url;
          if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')) {
            const dest = path.join('public', 'products', product.image);
            if (await downloadImage(url, dest)) {
              console.log('Success: ' + product.image);
              downloaded = true;
              break;
            }
          }
        }
        if (!downloaded) console.log('FAILED: ' + product.name);
      }
    } catch (e) {
      console.log('Error: ' + e.message);
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log('All done!');
}

run();
