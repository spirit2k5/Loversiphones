const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');

const root=path.resolve(__dirname,'..');
const read=(name)=>fs.readFileSync(path.join(root,name),'utf8');
const rootUrl='https://loversiphones.co.za/';
const sitemap=read('sitemap.xml');
const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
const fileFor=(url)=>new URL(url).pathname.slice(1)||'index.html';
const htmlFiles=urls.map(fileFor);
const phoneFiles=htmlFiles.filter(file=>file.startsWith('phones/'));

function contentOf(html,tag,re) {
  const match=html.match(re);
  assert.ok(match,tag+' missing');
  return match[1];
}
test('sitemap and robots allow all intended URLs',()=>{
  assert.equal(urls.length,31);
  assert.equal(new Set(urls).size,urls.length);
  assert.equal(phoneFiles.length,25);
  assert.match(read('robots.txt'),/^User-agent: \*\s*\nAllow: \//m);
  assert.match(read('robots.txt'),/Sitemap: https:\/\/loversiphones\.co\.za\/sitemap\.xml/);
  for(const url of urls){
    assert.ok(url.startsWith(rootUrl),'off-site URL '+url);
    assert.ok(fs.existsSync(path.join(root,fileFor(url))),'missing '+url);
  }
});
test('sitemap pages have unique titles, descriptions, self-canonicals, and H1',()=>{
  const titles=new Set();
  for(let i=0;i<urls.length;i++){
    const html=read(htmlFiles[i]);
    const title=contentOf(html,'title',/<title>([^<]+)<\/title>/i);
    assert.ok(!titles.has(title),'duplicate title: '+title);
    titles.add(title);
    assert.ok(!title.includes('in Soweto in Soweto'),'duplicated locality '+title);
    assert.match(html,/<meta name="description" content="[^"]+"/);
    assert.match(html,/<meta name="robots" content="index,follow/);
    assert.ok(html.includes('rel="canonical" href="'+urls[i]+'"'),'canonical mismatch: '+urls[i]);
    assert.equal((html.match(/<h1\b/gi)||[]).length,1,'H1 count on '+htmlFiles[i]);
    assert.match(html,/<meta name="viewport"/);
    for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
      assert.doesNotThrow(()=>JSON.parse(match[1]),'invalid structured data on '+htmlFiles[i]);
    }
  }
});
test('all 25 iPhone detail pages link to the model directory and related models',()=>{
  for(const name of phoneFiles){
    const html=read(name);
    const title=contentOf(html,'product title',/<title>([^<]+)<\/title>/);
    assert.match(title,/ in Soweto \| LoversiPhones$/,'local title on '+name);
    const og=contentOf(html,'Open Graph title',/<meta property="og:title" content="([^"]+)"/);
    assert.equal(og,title,'OG title mismatch on '+name);
    assert.match(html,/data-li-seo-related="1"/,'related models missing: '+name);
    assert.match(html,/href="\/browse-phones\.html">Browse iPhones<\/a>/,'directory breadcrumb missing: '+name);
    assert.match(html,/href="\/phones\/iphone-[^"]+\.html"/,'related phone link missing: '+name);
    assert.match(html,/"@type":"Product"/,'product structured data missing: '+name);
    for(const link of html.matchAll(/href="(\/phones\/[^"]+\.html)"/g)){
      assert.ok(fs.existsSync(path.join(root,link[1].slice(1))),'broken related link '+name+': '+link[1]);
    }
  }
  assert.match(read('storefront.js'),/BreadcrumbList/,'breadcrumb structured-data generator missing');
});
test('model directory has social image metadata and expected URL',()=>{
  const html=read('browse-phones.html');
  assert.match(html,/<meta property="og:image"/);
  assert.match(html,/<meta name="twitter:card"/);
  assert.match(html,/rel="canonical" href="https:\/\/loversiphones\.co\.za\/browse-phones\.html"/);
});
test('404 page is noindex',()=>{
  assert.match(read('404.html'),/<meta name="robots" content="noindex,follow"/);
});
