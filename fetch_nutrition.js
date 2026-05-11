const fs = require('fs');
const path = require('path');
const google = require('googlethis');

// All nutrition products with their image filenames and a precise search term
const products = [
  { name: 'Ensure Nutrition Powder 400g Abbott', image: 'ensure.png' },
  { name: 'Horlicks Protein Plus 400g health drink', image: 'horlicks-protein.png' },
  { name: 'Protinex Original 250g protein supplement', image: 'protinex.png' },
  { name: 'MuscleBlaze Whey Protein 1kg', image: 'whey.png' },
  { name: 'Optimum Nutrition Gold Standard Whey 2lbs', image: 'on-gold.png' },
  { name: 'BCAA Amino Acids supplement 200g', image: 'bcaa.png' },
  { name: 'Creatine Monohydrate powder 250g', image: 'creatine.png' },
  { name: 'Vitamin C 1000mg tablets 60', image: 'vitc.png' },
  { name: 'Zinc tablets 50mg supplement', image: 'zinc.png' },
  { name: 'Multivitamin daily tablets supplement', image: 'multivit.png' },
  { name: 'Omega-3 Fish Oil capsules 60', image: 'omega3.png' },
  { name: 'Iron supplement tablets 100', image: 'iron.png' },
  { name: 'Vitamin B12 tablets 60 supplement', image: 'vitb12.png' },
  { name: 'Bournvita Health Drink 500g', image: 'bournvita.png' },
  { name: 'Boost Health Drink 500g', image: 'boost.png' },
  { name: 'Pediasure Vanilla nutrition 400g', image: 'pediasure.png' },
  { name: 'Complan Chocolate 500g health drink', image: 'complan.png' },
  { name: 'Glucon-D Orange flavour 500g', image: 'glucond-orange.png' },
  { name: 'Dabur Chyawanprash Special 1kg', image: 'chyawan-special.png' },
  { name: 'Ashwagandha Capsules 60 ayurvedic', image: 'ashwagandha.png' },
  { name: 'Dabur Tulsi Drops 30ml immunity', image: 'tulsi.png' },
  { name: 'Giloy Capsules 60 immunity booster', image: 'giloy.png' },
  { name: 'Mass Gainer Chocolate 3kg supplement', image: 'mass-gainer.png' },
  { name: 'Serious Mass 6lbs weight gainer', image: 'serious-mass.png' },
  { name: 'Pre-Workout Energy supplement 300g', image: 'preworkout.png' },
  { name: 'Collagen Peptides powder 200g supplement', image: 'collagen.png' },
  { name: 'Probiotics capsules 30 gut health', image: 'probiotics.png' },
  { name: 'Biotin Hair Vitamins tablets 60', image: 'biotin.png' },
  { name: 'Magnesium supplement tablets 100', image: 'magnesium.png' },
  { name: 'Green Tea Extract capsules 60', image: 'greentea.png' },
  { name: 'Apple Cider Vinegar 500ml', image: 'acv.png' },
];

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

  for (const product of products) {
    console.log('Searching for ' + product.name + '...');
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
      console.log('Error for ' + product.name + ': ' + e.message);
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log('Done!');
}

run();
