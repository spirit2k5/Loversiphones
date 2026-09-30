const products=[{"name":"iPhone 8 Plus","storage":"64GB","price":3500,"variants":[{"name":"Gold","hex":"#d7b27d","sprite":68},{"name":"Silver","hex":"#d6d7d2","sprite":70},{"name":"Space Gray","hex":"#64635f","sprite":71},{"name":"Red","hex":"#b8202e","sprite":69}]},{"name":"iPhone 11","storage":"64GB","price":5500,"variants":[{"name":"Black","hex":"#202124","sprite":5},{"name":"White","hex":"#f4f3ee","sprite":9},{"name":"Green","hex":"#8fa88d","sprite":6},{"name":"Yellow","hex":"#e6cf58","sprite":10},{"name":"Purple","hex":"#9a89bd","sprite":7},{"name":"Red","hex":"#b8202e","sprite":8}]},{"name":"iPhone 11 Pro","storage":"64GB","price":6200,"variants":[{"name":"Space Gray","hex":"#64635f","sprite":4},{"name":"Silver","hex":"#d6d7d2","sprite":3},{"name":"Gold","hex":"#d7b27d","sprite":1},{"name":"Midnight Green","hex":"#4d6258","sprite":2}]},{"name":"iPhone 11 Pro Max","storage":"64GB","price":6700,"variants":[{"name":"Space Gray","hex":"#64635f","sprite":4},{"name":"Silver","hex":"#d6d7d2","sprite":3},{"name":"Gold","hex":"#d7b27d","sprite":1},{"name":"Midnight Green","hex":"#4d6258","sprite":2}]},{"name":"iPhone 12","storage":"64GB","price":6000,"variants":[{"name":"Black","hex":"#202124","sprite":15},{"name":"White","hex":"#f4f3ee","sprite":20},{"name":"Green","hex":"#8fa88d","sprite":17},{"name":"Blue","hex":"#789fbd","sprite":16},{"name":"Purple","hex":"#9a89bd","sprite":18},{"name":"Red","hex":"#b8202e","sprite":19}]},{"name":"iPhone 12 Pro","storage":"128GB","price":6800,"variants":[{"name":"Graphite","hex":"#5e5a56","sprite":12},{"name":"Silver","hex":"#d6d7d2","sprite":14},{"name":"Gold","hex":"#d7b27d","sprite":11},{"name":"Pacific Blue","hex":"#516f81","sprite":13}]},{"name":"iPhone 12 Pro Max","storage":"128GB","price":7500,"variants":[{"name":"Graphite","hex":"#5e5a56","sprite":12},{"name":"Silver","hex":"#d6d7d2","sprite":14},{"name":"Gold","hex":"#d7b27d","sprite":11},{"name":"Pacific Blue","hex":"#516f81","sprite":13}]},{"name":"iPhone 13","storage":"128GB","price":7200,"variants":[{"name":"Midnight","hex":"#313943","sprite":28},{"name":"Starlight","hex":"#e8e0cf","sprite":31},{"name":"Blue","hex":"#789fbd","sprite":26},{"name":"Pink","hex":"#e3aeb8","sprite":29},{"name":"Green","hex":"#8fa88d","sprite":27},{"name":"Red","hex":"#b8202e","sprite":30}]},{"name":"iPhone 13 Pro","storage":"128GB","price":8500,"variants":[{"name":"Graphite","hex":"#5e5a56","sprite":23},{"name":"Silver","hex":"#d6d7d2","sprite":25},{"name":"Gold","hex":"#d7b27d","sprite":22},{"name":"Sierra Blue","hex":"#9cb5c7","sprite":24},{"name":"Alpine Green","hex":"#617866","sprite":21}]},{"name":"iPhone 13 Pro Max","storage":"128GB","price":9100,"variants":[{"name":"Graphite","hex":"#5e5a56","sprite":23},{"name":"Silver","hex":"#d6d7d2","sprite":25},{"name":"Gold","hex":"#d7b27d","sprite":22},{"name":"Sierra Blue","hex":"#9cb5c7","sprite":24},{"name":"Alpine Green","hex":"#617866","sprite":21}]},{"name":"iPhone 14","storage":"128GB","price":7800,"variants":[{"name":"Midnight","hex":"#313943","sprite":33},{"name":"Starlight","hex":"#e8e0cf","sprite":36},{"name":"Blue","hex":"#789fbd","sprite":32},{"name":"Purple","hex":"#9a89bd","sprite":34},{"name":"Yellow","hex":"#e6cf58","sprite":37},{"name":"Red","hex":"#b8202e","sprite":35}]},{"name":"iPhone 14 Plus","storage":"128GB","price":9200,"variants":[{"name":"Midnight","hex":"#313943","sprite":33},{"name":"Starlight","hex":"#e8e0cf","sprite":36},{"name":"Blue","hex":"#789fbd","sprite":32},{"name":"Purple","hex":"#9a89bd","sprite":34},{"name":"Yellow","hex":"#e6cf58","sprite":37},{"name":"Red","hex":"#b8202e","sprite":35}]},{"name":"iPhone 14 Pro","storage":"128GB","price":8300,"variants":[{"name":"Space Black","hex":"#373634","sprite":41},{"name":"Silver","hex":"#d6d7d2","sprite":40},{"name":"Gold","hex":"#d7b27d","sprite":39},{"name":"Deep Purple","hex":"#51445a","sprite":38}]},{"name":"iPhone 14 Pro Max","storage":"128GB","price":10100,"variants":[{"name":"Space Black","hex":"#373634","sprite":41},{"name":"Silver","hex":"#d6d7d2","sprite":40},{"name":"Gold","hex":"#d7b27d","sprite":39},{"name":"Deep Purple","hex":"#51445a","sprite":38}]},{"name":"iPhone 15","storage":"128GB","price":9600,"variants":[{"name":"Black","hex":"#202124","sprite":42},{"name":"Blue","hex":"#789fbd","sprite":43},{"name":"Green","hex":"#8fa88d","sprite":44},{"name":"Yellow","hex":"#e6cf58","sprite":46},{"name":"Pink","hex":"#e3aeb8","sprite":45}]},{"name":"iPhone 15 Plus","storage":"128GB","price":9800,"variants":[{"name":"Black","hex":"#202124","sprite":42},{"name":"Blue","hex":"#789fbd","sprite":43},{"name":"Green","hex":"#8fa88d","sprite":44},{"name":"Yellow","hex":"#e6cf58","sprite":46},{"name":"Pink","hex":"#e3aeb8","sprite":45}]},{"name":"iPhone 15 Pro","storage":"128GB","price":11200,"variants":[{"name":"Black Titanium","hex":"#4a4946","sprite":47},{"name":"White Titanium","hex":"#d8d5cd","sprite":50},{"name":"Blue Titanium","hex":"#5d7182","sprite":48},{"name":"Natural Titanium","hex":"#aaa298","sprite":49}]},{"name":"iPhone 15 Pro Max","storage":"128GB","price":14000,"variants":[{"name":"Black Titanium","hex":"#4a4946","sprite":47},{"name":"White Titanium","hex":"#d8d5cd","sprite":50},{"name":"Blue Titanium","hex":"#5d7182","sprite":48},{"name":"Natural Titanium","hex":"#aaa298","sprite":49}]},{"name":"iPhone 16","storage":"128GB","price":13000,"variants":[{"name":"Black","hex":"#202124","sprite":51},{"name":"White","hex":"#f4f3ee","sprite":55},{"name":"Pink","hex":"#e3aeb8","sprite":52},{"name":"Teal","hex":"#5fa59d","sprite":60},{"name":"Ultramarine","hex":"#6278cc","sprite":54}]},{"name":"iPhone 16 Plus","storage":"128GB","price":13500,"variants":[{"name":"Black","hex":"#202124","sprite":51},{"name":"White","hex":"#f4f3ee","sprite":55},{"name":"Pink","hex":"#e3aeb8","sprite":52},{"name":"Teal","hex":"#5fa59d","sprite":53},{"name":"Ultramarine","hex":"#6278cc","sprite":54}]},{"name":"iPhone 16 Pro","storage":"128GB","price":14700,"variants":[{"name":"Black Titanium","hex":"#4a4946","sprite":56},{"name":"White Titanium","hex":"#d8d5cd","sprite":59},{"name":"Natural Titanium","hex":"#aaa298","sprite":58},{"name":"Desert Titanium","hex":"#c6a07d","sprite":57}]},{"name":"iPhone 16 Pro Max","storage":"128GB","price":15500,"variants":[{"name":"Black Titanium","hex":"#4a4946","sprite":56},{"name":"White Titanium","hex":"#d8d5cd","sprite":59},{"name":"Natural Titanium","hex":"#aaa298","sprite":58},{"name":"Desert Titanium","hex":"#c6a07d","sprite":57}]},{"name":"iPhone 17 Air eSIM","storage":"256GB","price":19000,"variants":[{"name":"Sky Blue","hex":"#bfd7e7","sprite":63},{"name":"Light Gold","hex":"#e7dcc1","sprite":62},{"name":"Cloud White","hex":"#f3f3ef","sprite":61},{"name":"Space Black","hex":"#252525","sprite":64}]},{"name":"iPhone 17 Pro","storage":"256GB","price":24000,"variants":[{"name":"Silver","hex":"#d6d7d2","sprite":67},{"name":"Deep Blue","hex":"#34445f","sprite":66},{"name":"Cosmic Orange","hex":"#df7335","sprite":65}]},{"name":"iPhone 17 Pro Max","storage":"256GB","price":26000,"variants":[{"name":"Silver","hex":"#d6d7d2","sprite":67},{"name":"Deep Blue","hex":"#34445f","sprite":66},{"name":"Cosmic Orange","hex":"#df7335","sprite":65}]}];const COLS=8,ROWS=9;function spritePos(i){const c=i%COLS,r=Math.floor(i/COLS);return `${c/(COLS-1)*100}% ${r/(ROWS-1)*100}%`;}function setSprite(el,i,label=''){el.style.backgroundPosition=spritePos(i);el.dataset.sprite=i;if(label)el.setAttribute('aria-label',label);}function catalogStyle(i){return 'background-position:'+spritePos(i)+';';}document.querySelectorAll('[data-sprite]').forEach(el=>setSprite(el,Number(el.dataset.sprite)));const ANGLE_COLS=15,ANGLE_ROWS=14;const ANGLE_SETS={"iPhone 8 Plus":{"Silver":[3,4,5],"Space Gray":[6,7,8],"Gold":[0,1,2],"Red":[9,10,11]},"iPhone 11":{"Black":[12,13,14],"White":[15],"Green":[16,17],"Yellow":[18,19,20,21],"Purple":[22,23,24],"Red":[25,26,27]},"iPhone 11 Pro":{"Space Gray":[28,29,30],"Silver":[31,32,33],"Gold":[34,35,36],"Midnight Green":[37,38,39]},"iPhone 11 Pro Max":{"Space Gray":[28,29,30],"Silver":[31,32,33],"Gold":[34,35,36],"Midnight Green":[37,38,39]},"iPhone 12":{"Black":[40,41,42],"White":[43,44,45],"Green":[46,47,48],"Blue":[49,50,51],"Purple":[52,53,54],"Red":[55,56,57]},"iPhone 12 Pro":{"Graphite":[58,59,60],"Silver":[61,62,63],"Gold":[64,65,66],"Pacific Blue":[67,68,69]},"iPhone 12 Pro Max":{"Graphite":[58,59,60],"Silver":[61,62,63],"Gold":[64,65,66],"Pacific Blue":[67,68,69]},"iPhone 13":{"Midnight":[70,71,72,73],"Starlight":[74,75,76],"Blue":[77,78,79],"Pink":[80,81,82],"Green":[83,84,85],"Red":[86,87,88]},"iPhone 13 Pro":{"Graphite":[89,90,91],"Silver":[92,93,94],"Gold":[95,96,97],"Sierra Blue":[98,99,100],"Alpine Green":[101,102,103]},"iPhone 13 Pro Max":{"Graphite":[89,90,91],"Silver":[92,93,94],"Gold":[95,96,97],"Sierra Blue":[98,99,100],"Alpine Green":[101,102,103]},"iPhone 14":{"Midnight":[104,105,106],"Starlight":[107,108,109],"Blue":[110,111,112],"Purple":[113,114,115],"Yellow":[116,117,118],"Red":[119,120,121]},"iPhone 14 Plus":{"Midnight":[104,105,106],"Starlight":[107,108,109],"Blue":[110,111,112],"Purple":[113,114,115],"Yellow":[116,117,118],"Red":[119,120,121]},"iPhone 14 Pro":{"Space Black":[122,123,124],"Silver":[125,126,127],"Gold":[128,129,130],"Deep Purple":[131,132,133]},"iPhone 14 Pro Max":{"Space Black":[122,123,124],"Silver":[125,126,127],"Gold":[128,129,130],"Deep Purple":[131,132,133]},"iPhone 15":{"Black":[134,135,136],"Blue":[137,138,139],"Green":[140,141,142],"Yellow":[143,144,145],"Pink":[146,147,148]},"iPhone 15 Plus":{"Black":[134,135,136],"Blue":[137,138,139],"Green":[140,141,142],"Yellow":[143,144,145],"Pink":[146,147,148]},"iPhone 15 Pro":{"Black Titanium":[149,150,151],"White Titanium":[152,153,154],"Blue Titanium":[155,156,157],"Natural Titanium":[158,159,160]},"iPhone 15 Pro Max":{"Black Titanium":[149,150,151],"White Titanium":[152,153,154],"Blue Titanium":[155,156,157],"Natural Titanium":[158,159,160]},"iPhone 16":{"Black":[161,162,163],"White":[164,165,166],"Pink":[167,168,169],"Teal":[170,171,172],"Ultramarine":[173,174,175]},"iPhone 16 Plus":{"Black":[161,162,163],"White":[164,165,166],"Pink":[167,168,169],"Teal":[176,171,172],"Ultramarine":[173,174,175]},"iPhone 16 Pro":{"Black Titanium":[177,178,179],"White Titanium":[180,181,182],"Natural Titanium":[183,184,185],"Desert Titanium":[186,187,188]},"iPhone 16 Pro Max":{"Black Titanium":[177,178,179],"White Titanium":[180,181,182],"Natural Titanium":[183,184,185],"Desert Titanium":[186,187,188]},"iPhone 17 Air eSIM":{"Sky Blue":[189,190,191],"Light Gold":[192,193,194],"Cloud White":[195,196,197],"Space Black":[198,199,200]},"iPhone 17 Pro":{"Silver":[201,202,203],"Deep Blue":[204,205,206],"Cosmic Orange":[207,208,209]},"iPhone 17 Pro Max":{"Silver":[201,202,203],"Deep Blue":[204,205,206],"Cosmic Orange":[207,208,209]}};const IMAGE_SOURCES={
  catalog:{classes:"sprite",cols:COLS,rows:ROWS},
  angles:{classes:"angle-sprite",cols:ANGLE_COLS,rows:ANGLE_ROWS},
  uploaded:{classes:"angle-sprite product-photo-sprite",cols:4,rows:3}
};
const PRODUCT_IMAGE_SOURCES={"iPhone 8 Plus":{preview:"uploaded",angles:"uploaded"}};
function imageSourcesFor(p){return PRODUCT_IMAGE_SOURCES[p.name]||{preview:"catalog",angles:"angles"};}
function sourcePos(source,i){const cfg=IMAGE_SOURCES[source],c=i%cfg.cols,r=Math.floor(i/cfg.cols);return (c/(cfg.cols-1)*100)+"% "+(r/(cfg.rows-1)*100)+"%";}
function sourceStyle(source,i){return "background-position:"+sourcePos(source,i)+";";}
function sourceClass(source,base){return IMAGE_SOURCES[source].classes+" "+base;}
function setSourceSprite(el,source,i,label=""){if(i===undefined||i===null)return;el.classList.remove("sprite","angle-sprite","product-photo-sprite");IMAGE_SOURCES[source].classes.split(" ").forEach(c=>el.classList.add(c));el.style.backgroundPosition=sourcePos(source,i);el.dataset.angleSprite=i;if(label)el.setAttribute("aria-label",label);}
function anglesFor(p,v){return ANGLE_SETS[p.name]?.[v.name]||[];}
function previewIndex(p,v){const src=imageSourcesFor(p).preview;return src==="catalog"?v.sprite:(anglesFor(p,v)[0]??v.sprite);}
function setPhoneAngleSprite(el,p,i,label=""){setSourceSprite(el,imageSourcesFor(p).angles,i,label);}
function phoneAngleStyle(p,i){return sourceStyle(imageSourcesFor(p).angles,i);}
function phoneAngleClass(p,base){return sourceClass(imageSourcesFor(p).angles,base);}
function anglePos(i){const c=i%ANGLE_COLS,r=Math.floor(i/ANGLE_COLS);return (c/(ANGLE_COLS-1)*100)+'% '+(r/(ANGLE_ROWS-1)*100)+'%';}function setAngleSprite(el,i,label=''){if(i===undefined||i===null)return;el.style.backgroundPosition=anglePos(i);el.dataset.angleSprite=i;if(label)el.setAttribute('aria-label',label);}function angleStyle(i){return 'background-position:'+anglePos(i)+';';}function angleKey(p,v){return p.name+'|'+v.name;}function angleIndexFor(p,v){const a=anglesFor(p,v);if(!a.length)return 0;return Math.max(0,Math.min(a.length-1,selectedAngle.get(angleKey(p,v))||0));}function setAngleIndex(p,v,i){const a=anglesFor(p,v);if(!a.length)return 0;const n=(i+a.length)%a.length;selectedAngle.set(angleKey(p,v),n);return n;}
const grid=document.getElementById('productGrid'),searchInput=document.getElementById('searchInput'),sortSelect=document.getElementById('sortSelect'),emptyState=document.getElementById('emptyState'),productSelect=document.getElementById('productSelect'),colorSelect=document.getElementById('colorSelect');const money=n=>'R'+n.toLocaleString('en-ZA');const generation=n=>Number((n.match(/iPhone\s+(\d+)/i)||[])[1]||0);const rank=n=>/Pro Max/i.test(n)?4:/\bPro\b/i.test(n)?3:/\bPlus\b/i.test(n)?2:/\bAir\b/i.test(n)?1:0;const sortedBase=(dir='newest')=>[...products].sort((a,b)=>{const g=generation(a.name)-generation(b.name);if(g)return dir==='newest'?-g:g;const r=rank(a.name)-rank(b.name);return dir==='newest'?-r:r;});const selected=new Map(),selectedAngle=new Map();let view=sortedBase('newest'),activeProduct=null,activeVariant=null;function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}function colourPhoto(p,v){const a=anglesFor(p,v);return a.length?a[0]:null;}
function cardHTML(p){const v=selected.get(p.name)||p.variants[0],angles=anglesFor(p,v),key=angleKey(p,v),sources=imageSourcesFor(p),angleChosen=selectedAngle.has(key),idx=angleChosen?angleIndexFor(p,v):0,main=angles[idx],mainSource=angleChosen?sources.angles:sources.preview,mainIndex=angleChosen?main:previewIndex(p,v),mainClass=sourceClass(mainSource,"product-pic"),mainStyle=sourceStyle(mainSource,mainIndex),mainLabel=angleChosen?p.name+" in "+v.name+" angle "+(idx+1):p.name+" in "+v.name,countText=angleChosen?(idx+1)+" / "+angles.length+" views":angles.length+" angles";return '<article class="product-card" data-name="'+esc(p.name)+'"><div class="product-media card-gallery"><button class="card-arrow card-prev" type="button" aria-label="Previous angle">‹</button><span class="'+mainClass+'" data-angle-sprite="'+main+'" data-catalog-sprite="'+v.sprite+'" style="'+mainStyle+'" role="img" aria-label="'+esc(mainLabel)+'"></span><button class="card-arrow card-next" type="button" aria-label="Next angle">›</button><span class="image-count">'+countText+'</span></div><div class="product-info"><div class="product-top"><div><h3>'+esc(p.name)+'</h3><p>'+esc(p.storage)+'</p></div><div class="price">'+money(p.price)+'</div></div><div class="colour-picker colour-gallery"><div class="colour-head"><span>Choose colour</span><b class="colour-name">'+esc(v.name)+'</b></div><div class="photo-swatches">'+p.variants.map(x=>{const src=sources.preview,idx=previewIndex(p,x);return '<button class="photo-thumb" type="button" data-colour="'+esc(x.name)+'" title="'+esc(x.name)+'" aria-label="Show '+esc(p.name)+' in '+esc(x.name)+'" aria-pressed="'+String(x.name===v.name)+'"><span class="'+sourceClass(src,"colour-photo")+'" style="'+sourceStyle(src,idx)+'" role="img" aria-label="'+esc(x.name)+'"></span><small>'+esc(x.name)+'</small></button>';}).join('')+'</div></div><div class="angle-picker"><div class="angle-head"><span>'+esc(v.name)+' angles</span><b>'+angles.length+' view'+(angles.length===1?'':'s')+'</b></div><div class="angle-thumbs">'+angles.map((sprite,i)=>'<button class="angle-thumb" type="button" data-angle="'+i+'" aria-label="View angle '+(i+1)+'" aria-pressed="'+String(angleChosen&&i===idx)+'"><span class="'+phoneAngleClass(p,"angle-thumb-photo")+'" style="'+phoneAngleStyle(p,sprite)+'"></span><small>'+(i+1)+'</small></button>').join('')+'</div></div><div class="product-actions"><button class="btn primary order-card" type="button">Order</button><a class="btn quiet" href="tel:+27612840013">Call</a></div></div></article>';}
function render(){grid.innerHTML=view.map(cardHTML).join('');emptyState.hidden=view.length!==0;grid.querySelectorAll('.product-card').forEach(card=>{const p=products.find(x=>x.name===card.dataset.name);card.querySelectorAll('.photo-thumb').forEach(btn=>btn.addEventListener('click',()=>choose(card,p,btn.dataset.colour)));card.querySelectorAll('.angle-thumb').forEach(btn=>btn.addEventListener('click',()=>selectAngle(card,p,Number(btn.dataset.angle))));card.querySelector('.card-prev')?.addEventListener('click',()=>cycleAngle(card,p,-1));card.querySelector('.card-next')?.addEventListener('click',()=>cycleAngle(card,p,1));card.querySelector('.order-card')?.addEventListener('click',()=>openQuick(p));});}
function choose(card,p,name){const v=p.variants.find(x=>x.name===name)||p.variants[0];selected.set(p.name,v);selectedAngle.delete(angleKey(p,v));render();}
function selectAngle(card,p,index){const v=selected.get(p.name)||p.variants[0],angles=anglesFor(p,v);if(!angles.length)return;const idx=setAngleIndex(p,v,index),img=card.querySelector('.product-pic');if(img){img.classList.add('switching');setPhoneAngleSprite(img,p,angles[idx],p.name+' in '+v.name+' angle '+(idx+1));requestAnimationFrame(()=>img.classList.remove('switching'));}const count=card.querySelector('.image-count');if(count)count.textContent=(idx+1)+' / '+angles.length+' views';card.querySelectorAll('.angle-thumb').forEach(btn=>btn.setAttribute('aria-pressed',String(Number(btn.dataset.angle)===idx)));}
function cycleAngle(card,p,step){const v=selected.get(p.name)||p.variants[0],key=angleKey(p,v),current=selectedAngle.has(key)?angleIndexFor(p,v):(step<0?0:-1);selectAngle(card,p,current+step);}
function filterSort(){const q=searchInput.value.trim().toLowerCase();let rows=products.filter(p=>`${p.name} ${p.storage} ${p.variants.map(v=>v.name).join(' ')}`.toLowerCase().includes(q));const mode=sortSelect.value;if(mode==='low')rows.sort((a,b)=>a.price-b.price);else if(mode==='high')rows.sort((a,b)=>b.price-a.price);else rows.sort((a,b)=>{const g=generation(a.name)-generation(b.name);if(g)return mode==='newest'?-g:g;const r=rank(a.name)-rank(b.name);return mode==='newest'?-r:r;});view=rows;render();}searchInput.addEventListener('input',filterSort);sortSelect.addEventListener('change',filterSort);function fillProductSelect(){sortedBase('newest').forEach(p=>productSelect.add(new Option(`${p.name} — ${p.storage} — ${money(p.price)}`,p.name)));}function fillColours(name,preferred=''){colorSelect.innerHTML='';const p=products.find(x=>x.name===name);if(!p){colorSelect.add(new Option('Choose an iPhone first',''));colorSelect.disabled=true;return;}colorSelect.add(new Option('Choose a colour',''));p.variants.forEach(v=>colorSelect.add(new Option(v.name,v.name)));colorSelect.disabled=false;if(preferred)colorSelect.value=preferred;}productSelect.addEventListener('change',()=>fillColours(productSelect.value));function wa(text){window.open(`https://wa.me/27612840013?text=${encodeURIComponent(text)}`,'_blank','noopener');}document.getElementById('orderForm').addEventListener('submit',e=>{e.preventDefault();const p=products.find(x=>x.name===productSelect.value),colour=colorSelect.value;if(!p||!colour)return;let t=`Hi LoversiPhones, I would like to order.\n\nName: ${document.getElementById('customerName').value.trim()}\nPhone: ${document.getElementById('customerPhone').value.trim()}\nEmail: ${document.getElementById('customerEmail').value.trim()}\nAddress: ${document.getElementById('customerAddress').value.trim()}\niPhone: ${p.name}\nStorage: ${p.storage}\nPrice: ${money(p.price)}\nColour: ${colour}`;const m=document.getElementById('customerMessage').value.trim();if(m)t+=`\nMessage: ${m}`;wa(t);});const modal=document.getElementById('quickModal'),modalPhoto=document.getElementById('modalPhoto'),modalTitle=document.getElementById('modalTitle'),modalStorage=document.getElementById('modalStorage'),modalPrice=document.getElementById('modalPrice'),modalColourName=document.getElementById('modalColourName'),modalColours=document.getElementById('modalColours'),modalAngles=document.getElementById('modalAngles'),modalAngleCount=document.getElementById('modalAngleCount');
function renderModalColours(){modalColours.innerHTML='';const sources=imageSourcesFor(activeProduct);activeProduct.variants.forEach(v=>{const b=document.createElement('button');b.type='button';b.className='modal-photo-thumb';b.title=v.name;b.setAttribute('aria-label','Choose '+v.name);b.setAttribute('aria-pressed',String(v.name===activeVariant.name));const img=document.createElement('span');img.className=sourceClass(sources.preview,'modal-colour-photo');setSourceSprite(img,sources.preview,previewIndex(activeProduct,v),activeProduct.name+' in '+v.name);img.setAttribute('role','img');const label=document.createElement('small');label.textContent=v.name;b.append(img,label);b.addEventListener('click',()=>{activeVariant=v;selected.set(activeProduct.name,v);selectedAngle.delete(angleKey(activeProduct,v));modalColourName.textContent=v.name;renderModalColours();renderModalAngles();render();});modalColours.appendChild(b);});}
function renderModalAngles(){const angles=anglesFor(activeProduct,activeVariant),idx=angleIndexFor(activeProduct,activeVariant),sources=imageSourcesFor(activeProduct);modalAngles.innerHTML='';modalAngleCount.textContent=(idx+1)+' / '+angles.length;setSourceSprite(modalPhoto,sources.angles,angles[idx],activeProduct.name+' in '+activeVariant.name+' angle '+(idx+1));angles.forEach((sprite,i)=>{const b=document.createElement('button');b.type='button';b.className='modal-angle-thumb';b.setAttribute('aria-label','View angle '+(i+1));b.setAttribute('aria-pressed',String(i===idx));const img=document.createElement('span');img.className=sourceClass(sources.angles,'modal-angle-thumb-photo');setSourceSprite(img,sources.angles,sprite,'Angle '+(i+1));const label=document.createElement('small');label.textContent='View '+(i+1);b.append(img,label);b.addEventListener('click',()=>{setAngleIndex(activeProduct,activeVariant,i);renderModalAngles();const card=[...grid.querySelectorAll('.product-card')].find(c=>c.dataset.name===activeProduct.name);if(card)selectAngle(card,activeProduct,i);});modalAngles.appendChild(b);});}
function cycleModalAngle(step){if(!activeProduct||!activeVariant)return;setAngleIndex(activeProduct,activeVariant,angleIndexFor(activeProduct,activeVariant)+step);renderModalAngles();const card=[...grid.querySelectorAll('.product-card')].find(c=>c.dataset.name===activeProduct.name);if(card)selectAngle(card,activeProduct,angleIndexFor(activeProduct,activeVariant));}
document.getElementById('modalAnglePrev')?.addEventListener('click',()=>cycleModalAngle(-1));document.getElementById('modalAngleNext')?.addEventListener('click',()=>cycleModalAngle(1));
function openQuick(p){activeProduct=p;activeVariant=selected.get(p.name)||p.variants[0];modalTitle.textContent=p.name;modalStorage.textContent=p.storage;modalPrice.textContent=money(p.price);modalColourName.textContent=activeVariant.name;renderModalColours();renderModalAngles();modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>document.getElementById('quickName').focus(),80);}
function closeQuick(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');activeProduct=null;activeVariant=null;}
document.querySelectorAll('[data-close]').forEach(x=>x.addEventListener('click',closeQuick));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeQuick();});
document.getElementById('quickForm').addEventListener('submit',e=>{e.preventDefault();if(!activeProduct||!activeVariant)return;let t=`Hi LoversiPhones, I would like to order.\n\nName: ${document.getElementById('quickName').value.trim()}\nPhone: ${document.getElementById('quickPhone').value.trim()}\nEmail: ${document.getElementById('quickEmail').value.trim()}\nAddress: ${document.getElementById('quickAddress').value.trim()}\niPhone: ${activeProduct.name}\nStorage: ${activeProduct.storage}\nPrice: ${money(activeProduct.price)}\nColour: ${activeVariant.name}`;const m=document.getElementById('quickMessage').value.trim();if(m)t+=`\nMessage: ${m}`;wa(t);});
document.getElementById('quickCall').addEventListener('click',()=>location.href='tel:+27612840013');document.getElementById('quickText').addEventListener('click',()=>{if(!activeProduct)return;location.href=`sms:+27612840013?body=${encodeURIComponent(`Hi LoversiPhones, I want to order ${activeProduct.name} ${activeProduct.storage} in ${activeVariant.name}.`)}`;});
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const motionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view');});},{threshold:.2});document.querySelectorAll('.motion-card').forEach(card=>motionObserver.observe(card));
fillProductSelect();render();

/* ===== Device-aware LoversiPhones experience ===== */
const body=document.body;
const deviceChip=document.getElementById('deviceChip');
const deviceIcon=document.getElementById('deviceIcon');
const deviceLabel=document.getElementById('deviceLabel');
const deviceHint=document.getElementById('deviceHint');
const scrollProgress=document.getElementById('scrollProgress');
const backTop=document.getElementById('backTop');
const siteHeader=document.querySelector('.site-header');
const heroSection=document.querySelector('.hero');
const heroLogo=document.querySelector('.hero-logo');

function detectDeviceMode(){
  const ua=navigator.userAgent||'';
  const phoneUA=/iPhone|iPod|Android.*Mobile|Windows Phone|Mobile/i.test(ua);
  const coarse=window.matchMedia&&window.matchMedia('(pointer: coarse)').matches;
  const narrow=Math.min(window.innerWidth,(window.screen&&window.screen.width)||window.innerWidth)<=900;
  const mobile=phoneUA||(coarse&&narrow);
  const mode=mobile?'mobile':'desktop';
  body.dataset.device=mode;
  body.dataset.input=coarse?'touch':'mouse';
  if(deviceLabel){
    deviceLabel.textContent=mobile?'Mobile experience':'Desktop experience';
    deviceHint.textContent=mobile?'Swipe phone angles · tap a colour photo':'Hover, pick colours and browse every angle';
  }
  if(deviceIcon) deviceIcon.textContent=mobile?'▯':'▰';
  if(deviceChip) deviceChip.setAttribute('data-mode',mode);
  return mode;
}
let deviceMode=detectDeviceMode();
let deviceTimer;
window.addEventListener('resize',()=>{
  clearTimeout(deviceTimer);
  deviceTimer=setTimeout(()=>{deviceMode=detectDeviceMode();},120);
},{passive:true});

function updateScrollUI(){
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const progress=max>0?Math.min(1,window.scrollY/max):0;
  if(scrollProgress) scrollProgress.style.width=(progress*100)+'%';
  if(backTop) backTop.classList.toggle('show',window.scrollY>650);
  if(siteHeader) siteHeader.classList.toggle('scrolled',window.scrollY>12);
}
updateScrollUI();
window.addEventListener('scroll',updateScrollUI,{passive:true});
if(backTop) backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* Section reveal */
body.classList.add('motion-ready');
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.01,rootMargin:'0px 0px -2% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}else{
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('revealed'));
}

/* Active navigation while scrolling */
if('IntersectionObserver' in window){
  const sectionLinks=[...document.querySelectorAll('.nav a[href^="#"],.mobile-dock a[href^="#"]')];
  const sectionObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const id='#'+entry.target.id;
      sectionLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===id));
    });
  },{rootMargin:'-38% 0px -52% 0px',threshold:0});
  document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));
}

/* Desktop spotlight + gentle hero parallax */
window.addEventListener('pointermove',e=>{
  if(body.dataset.device!=='desktop')return;
  body.style.setProperty('--spot-x',e.clientX+'px');
  body.style.setProperty('--spot-y',e.clientY+'px');
  if(heroSection&&heroLogo){
    const rect=heroSection.getBoundingClientRect();
    if(e.clientY>=rect.top&&e.clientY<=rect.bottom){
      const x=(e.clientX-window.innerWidth/2)/window.innerWidth;
      const y=(e.clientY-(rect.top+rect.height/2))/Math.max(rect.height,1);
      heroLogo.style.transform=`translate3d(${x*12}px,${y*10}px,0) rotate(${x*1.5}deg)`;
    }
  }
},{passive:true});
heroSection?.addEventListener('pointerleave',()=>{if(heroLogo)heroLogo.style.transform='';});

/* Desktop 3D product tilt using event delegation */
grid.addEventListener('pointermove',e=>{
  if(body.dataset.device!=='desktop')return;
  const card=e.target.closest('.product-card');
  if(!card)return;
  const rect=card.getBoundingClientRect();
  const px=(e.clientX-rect.left)/rect.width-.5;
  const py=(e.clientY-rect.top)/rect.height-.5;
  const rx=(-py*4.5).toFixed(2);
  const ry=(px*5.5).toFixed(2);
  card.classList.add('tilt-active');
  card.style.transform=`perspective(950px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
},{passive:true});
grid.addEventListener('pointerout',e=>{
  const card=e.target.closest('.product-card');
  if(!card||card.contains(e.relatedTarget))return;
  card.classList.remove('tilt-active');
  card.style.transform='';
});

/* Mobile swipe changes colour */
const swipeState=new WeakMap();
grid.addEventListener('pointerdown',e=>{
  if(body.dataset.device!=='mobile'||e.pointerType==='mouse'||e.target.closest('button,a'))return;
  const media=e.target.closest('.product-media');
  const card=e.target.closest('.product-card');
  if(!media||!card)return;
  swipeState.set(card,{x:e.clientX,y:e.clientY});
});
grid.addEventListener('pointerup',e=>{
  if(body.dataset.device!=='mobile'||e.pointerType==='mouse')return;
  const card=e.target.closest('.product-card');
  if(!card)return;
  const start=swipeState.get(card);
  swipeState.delete(card);
  if(!start)return;
  const dx=e.clientX-start.x,dy=e.clientY-start.y;
  if(Math.abs(dx)<42||Math.abs(dx)<Math.abs(dy))return;
  const p=products.find(x=>x.name===card.dataset.name);
  if(p)cycleAngle(card,p,dx<0?1:-1);
});

/* Small tactile feedback for touch devices */
document.addEventListener('pointerdown',e=>{
  if(body.dataset.device!=='mobile')return;
  const target=e.target.closest('.btn,.photo-thumb,.modal-photo-thumb,.mobile-dock a');
  if(!target)return;
  target.classList.add('touching');
},{passive:true});
document.addEventListener('pointerup',()=>document.querySelectorAll('.touching').forEach(el=>el.classList.remove('touching')),{passive:true});
