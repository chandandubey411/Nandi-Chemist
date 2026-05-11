const fs = require('fs');
const path = require('path');
const google = require('googlethis');

const products = [
  { name: 'Omron HEM-7120 digital blood pressure monitor upper arm', image: 'omron.png' },
  { name: 'Dr Morepen BP-02 blood pressure monitor', image: 'morepen-bp.png' },
  { name: 'Omron MC-246 digital clinical thermometer', image: 'omron-thermo.png' },
  { name: 'Dr Trust infrared non-contact forehead thermometer', image: 'drtrust-thermo.png' },
  { name: 'BPL fingertip pulse oximeter SpO2 monitor', image: 'bpl-oximeter.png' },
  { name: 'Dr Morepen PO-04 pulse oximeter fingertip', image: 'morepen-oximeter.png' },
  { name: 'Accu-Chek Active glucometer blood glucose monitor', image: 'accuchek.png' },
  { name: 'Dr Morepen BG-03 glucometer diabetes monitor', image: 'morepen-gluco.png' },
  { name: 'Omron HN-289 digital weighing scale bathroom', image: 'omron-scale.png' },
  { name: 'Dr Trust digital weighing scale body weight', image: 'drtrust-scale.png' },
  { name: 'Tynor knee cap support orthopedic pair', image: 'tynor-knee.png' },
  { name: 'Vissco back support lumbar belt ortho', image: 'vissco-back.png' },
  { name: 'Tynor cervical contour memory foam pillow neck', image: 'tynor-pillow.png' },
  { name: 'Vissco wrist brace support splint', image: 'vissco-wrist.png' },
  { name: 'Tynor ankle binder compression support', image: 'tynor-ankle.png' },
  { name: 'Omron NE-C106 nebulizer compressor machine', image: 'omron-nebulizer.png' },
  { name: 'Dr Morepen CN-10 nebulizer machine asthma', image: 'morepen-nebulizer.png' },
  { name: 'Vicks steam inhaler vaporizer V1200', image: 'vicks-vaporizer.png' },
  { name: 'portable oxygen concentrator home therapy 5L', image: 'oxygen-concentrator.png' },
  { name: 'adjustable aluminum walking stick elderly cane', image: 'walking-stick.png' },
  { name: 'foldable wheelchair portable lightweight', image: 'wheelchair.png' },
  { name: 'walker with wheels rollator elderly support', image: 'walker.png' },
  { name: 'first aid kit box 100 pieces emergency', image: 'firstaid.png' },
  { name: 'electric heating pad ortho pain relief', image: 'heating-pad.png' },
  { name: 'Dr Trust electric body massager full', image: 'massager.png' },
  { name: 'rubber hot water bag 2 litre pain relief', image: 'hotwater-bag.png' },
  { name: 'Dr Morepen stethoscope dual head medical', image: 'stethoscope.png' },
  { name: 'Omron HBF-375 body composition monitor fat', image: 'omron-body.png' },
  { name: 'Vissco lumbar sacral support spinal belt', image: 'vissco-lumbar.png' },
  { name: 'peak flow meter asthma lung function monitor', image: 'peak-flow.png' },
  { name: 'portable commode chair elderly handicap toilet', image: 'commode.png' },
];

async function downloadImage(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(arrayBuffer));
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
