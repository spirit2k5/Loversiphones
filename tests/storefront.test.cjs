const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const sitemap=[...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]));
function literal(source,name){
 const marker='const '+name+'=';let start=source.indexOf(marker)+marker.length;
 assert(start>=marker.length,'Missing catalogue '+name);
 const open=source[start],close=open==='['?']':'}';let depth=0,quoted=false,escaped=false;
 for(let i=start;i<source.length;i++){const c=source[i];if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue;}if(c==='"'){quoted=true;continue;}if(c===open)depth++;if(c===close&&!--depth)return JSON.parse(source.slice(start,i+1));}
 throw Error('Unclosed catalogue '+name);
}
const products=literal(read('script.js'),'products');
test('31 distinct public pages are restored and indexable',()=>{
 assert.equal(sitemap.length,31);assert.equal(new Set(sitemap.map(x=>x.pathname)).size,31);
 const titles=new Set();
 for(const url of sitemap){const file=url.pathname==='/'?'index.html':url.pathname.slice(1),html=read(file);assert.doesNotMatch(html,/Website Under Maintenance|Website needs maintenance|Temporarily unavailable/);assert.match(html,/<meta name="robots" content="index,follow/);assert(html.includes('href="'+url.href+'"'));assert.equal((html.match(/<h1\b/g)||[]).length,1);titles.add(html.match(/<title>(.*?)<\/title>/)[1]);assert.match(html,/storefront\.css\?v=20261029/);assert.match(html,/storefront\.js\?v=20261029/);}
 assert.equal(titles.size,31);assert.match(read('robots.txt'),/Allow: \//);assert.doesNotMatch(read('robots.txt'),/Disallow: \//);
});
test('Every local HTML resource and page destination exists',()=>{
 const files=sitemap.map(x=>x.pathname==='/'?'index.html':x.pathname.slice(1)).concat('404.html');
 for(const file of files){const html=read(file);for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(?:https?:|tel:|sms:|mailto:|data:|#)/.test(m[1]))continue;const ref=new URL(m[1],'https://loversiphones.co.za/'+(file==='index.html'?'':file));const p=path.join(root,decodeURIComponent(ref.pathname));assert(fs.existsSync(p),file+' -> '+ref.pathname);}}
});
test('25 models have matching catalogue prices, storage and product schema',()=>{
 assert.equal(products.length,25);const details=literal(read('product-page.js'),'PRODUCTS');assert.deepEqual(details,products);
 for(const p of products){const slug=p.name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),html=read('phones/'+slug+'.html');const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);assert.equal(schema.name,p.name+' '+p.storage);assert.equal(Number(schema.offers.price),p.price);assert.equal(schema.offers.priceCurrency,'ZAR');assert.match(html,new RegExp('<h1>'+p.name+'</h1>'));for(const v of p.variants){assert(Number.isInteger(v.sprite)&&v.sprite>0&&v.sprite<72);}}
});
test('Each model and colour has matching angle mappings in both galleries',()=>{
 const home=literal(read('script.js'),'ANGLE_SETS'),detail=literal(read('product-page.js'),'ANGLES');assert.deepEqual(detail,home);
 for(const p of products)for(const v of p.variants){assert(home[p.name][v.name].length>0);for(const index of home[p.name][v.name])assert(Number.isInteger(index)&&index>=0&&index<210);}
});
test('Storefront contains no inline executable scripts or injected handlers',()=>{
 for(const url of sitemap){const file=url.pathname==='/'?'index.html':url.pathname.slice(1),html=read(file);assert.doesNotMatch(html,/<script(?![^>]*(?:src=|application\/ld\+json))[^>]*>[\s\S]*?<\/script>/i);assert.doesNotMatch(html,/\son(?:click|load|error|submit)\s*=/i);assert.match(html,/script-src 'self'/);assert.match(html,/form-action 'none'/);}
});
