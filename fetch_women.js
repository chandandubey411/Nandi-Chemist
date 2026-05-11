const fs = require('fs');
const path = require('path');
const google = require('googlethis');

const products = [
  { name: 'Whisper Ultra Soft XL 30 pads sanitary', image: 'whisper.png' },
  { name: 'Stayfree Secure XL 30 pads sanitary', image: 'stayfree.png' },
  { name: 'Sofy Antibacterial Pads XL 28 pcs', image: 'sofy.png' },
  { name: 'Whisper Choice Panty Liners 40 pcs', image: 'whisper-liners.png' },
  { name: 'Sirona Menstrual Cup Medium reusable', image: 'menstrual-cup.png' },
  { name: 'VWash Plus Intimate Hygiene Wash 200ml', image: 'vwash.png' },
  { name: 'Lactacyd Intimate Wash 150ml feminine', image: 'lactacyd.png' },
  { name: 'Iron supplement for women tablets 60', image: 'iron-women.png' },
  { name: 'Calcium Vitamin D for Women tablets 60', image: 'calcium-women.png' },
  { name: 'Multivitamin for Women tablets 60 supplement', image: 'multivit-women.png' },
  { name: 'PCOS Support Supplement capsules hormonal balance', image: 'pcos.png' },
  { name: 'Folic Acid tablets for women pregnancy 90', image: 'folic.png' },
  { name: 'Evening Primrose Oil capsules 60 womens health', image: 'primrose.png' },
  { name: 'Cetaphil Gentle Face Wash 125ml', image: 'cetaphil-wash.png' },
  { name: 'Neutrogena Hydro Boost gel moisturizer 50g', image: 'neutrogena.png' },
  { name: 'Lakme Sun Expert SPF 50 sunscreen 50ml', image: 'lakme-sunscreen.png' },
  { name: 'Plum Vitamin C serum 30ml brightening', image: 'plum-serum.png' },
  { name: 'Nivea Soft moisturizing cream 100ml', image: 'nivea.png' },
  { name: 'Himalaya Lip Care balm 4.5g natural', image: 'himalaya-lip.png' },
  { name: 'Mamaearth Onion Hair Oil 250ml growth', image: 'onion-oil.png' },
  { name: 'Dove Hair Fall Rescue Shampoo 340ml', image: 'dove-shampoo.png' },
  { name: 'Pantene Hair Conditioner 340ml smooth', image: 'pantene.png' },
  { name: 'Livon Hair Serum 100ml frizz control', image: 'livon.png' },
  { name: "Palmer's Stretch Mark Cream 125g pregnancy", image: 'palmers.png' },
  { name: 'Prenatal Multivitamin tablets 60 pregnancy', image: 'prenatal.png' },
  { name: 'Lansinoh Nipple Cream 40g nursing breastfeeding', image: 'lansinoh.png' },
  { name: "Mama's Choice Belly Oil 100ml pregnancy", image: 'belly-oil.png' },
  { name: 'Biotique Bio Almond Face Wash 150ml', image: 'biotique.png' },
  { name: 'Garnier Micellar Water 125ml makeup remover', image: 'garnier-micellar.png' },
  { name: 'Lotus Herbals Night Cream 60g overnight repair', image: 'lotus.png' },
  { name: 'Bella Vita Perfume 100ml women fragrance', image: 'bellavita.png' },
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
