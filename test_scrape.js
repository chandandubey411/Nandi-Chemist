const fs = require('fs');

async function searchNetmeds(query) {
  try {
    const res = await fetch(`https://www.netmeds.com/catalogsearch/result/${encodeURIComponent(query)}/all`);
    const html = await res.text();
    const match = html.match(/<img[^>]*src=["'](https:\/\/www\.netmeds\.com\/images\/product-v1\/trip\/[^"']+)["']/i);
    if (match) {
      return match[1];
    }
  } catch (e) {
    // console.error(e);
  }
  return null;
}

async function searchPharmeasy(query) {
  try {
    const res = await fetch(`https://pharmeasy.in/api/search/search/?intent_id=1&q=${encodeURIComponent(query)}`);
    const json = await res.json();
    if (json.data && json.data.products && json.data.products.length > 0) {
      return json.data.products[0].images[0];
    }
  } catch (e) {}
  return null;
}

async function run() {
  const url1 = await searchNetmeds('dolo 650');
  const url2 = await searchPharmeasy('dolo 650');
  console.log('Netmeds:', url1);
  console.log('Pharmeasy:', url2);
}

run();
