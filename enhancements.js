(function(){
  const angleUrl='assets/lovers-angles.webp?v=20260930-lazy';

  function markAngle(el){
    if(!el||el.classList.contains('angle-loaded'))return;
    el.classList.add('angle-loaded');
  }
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){markAngle(e.target);io.unobserve(e.target);}});
    },{rootMargin:'260px 0px'});
    const watch=()=>document.querySelectorAll('.angle-sprite:not(.angle-loaded)').forEach(el=>io.observe(el));
    watch();
    new MutationObserver(watch).observe(document.body,{subtree:true,childList:true});
    document.addEventListener('click',e=>{
      if(e.target.closest('.photo-thumb,.angle-thumb,.card-arrow,.order-card,.modal-photo-thumb,.modal-angle-thumb')) setTimeout(watch,0);
    });
  }else{
    document.querySelectorAll('.angle-sprite').forEach(markAngle);
  }

  const hero=document.querySelector('.hero-logo-image');
  if(hero) hero.setAttribute('aria-label','LoversiPhones logo');

  function slug(s){return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
  function decorateCards(){
    document.querySelectorAll('#productGrid .product-card').forEach(card=>{
      if(card.querySelector('.card-detail-link'))return;
      const name=card.dataset.name;
      if(!name)return;
      const actions=card.querySelector('.product-actions');
      if(!actions)return;
      const a=document.createElement('a');
      a.className='card-detail-link';
      a.href='/phones/'+slug(name)+'.html';
      a.textContent='View full phone details';
      actions.insertAdjacentElement('afterend',a);
    });
  }
  decorateCards();
  const grid=document.getElementById('productGrid');
  if(grid)new MutationObserver(decorateCards).observe(grid,{childList:true,subtree:true});

  const ready=document.createElement('div');
  ready.className='order-ready';
  ready.id='orderReady';
  ready.innerHTML='<div class="order-ready-card" role="dialog" aria-modal="true" aria-labelledby="readyTitle"><p class="eyebrow">ORDER CHECK</p><h3 id="readyTitle">Your order is ready.</h3><p>Check the details below, then continue to WhatsApp to send them to LoversiPhones.</p><div class="order-ready-summary" id="readySummary"></div><div class="order-ready-actions"><button class="btn primary" id="readyContinue" type="button">Continue to WhatsApp</button><button class="btn quiet" id="readyBack" type="button">Go back</button></div></div>';
  document.body.appendChild(ready);
  const summary=ready.querySelector('#readySummary'),cont=ready.querySelector('#readyContinue'),back=ready.querySelector('#readyBack');
  let pending=null;
  function text(id){return (document.getElementById(id)?.value||'').trim();}
  function selectedText(id){const el=document.getElementById(id);return el&&el.selectedIndex>=0?el.options[el.selectedIndex].text:'';}
  function buildSummary(form){
    if(form.id==='orderForm'){
      return [
        'Name: '+text('customerName'),
        'Phone: '+text('customerPhone'),
        'Email: '+text('customerEmail'),
        'Address: '+text('customerAddress'),
        'iPhone: '+selectedText('productSelect'),
        'Colour: '+selectedText('colorSelect'),
        text('customerMessage')?'Message: '+text('customerMessage'):''
      ].filter(Boolean).join('\n');
    }
    return [
      'Name: '+text('quickName'),
      'Phone: '+text('quickPhone'),
      'Email: '+text('quickEmail'),
      'Address: '+text('quickAddress'),
      'iPhone: '+(document.getElementById('modalTitle')?.textContent||''),
      'Storage: '+(document.getElementById('modalStorage')?.textContent||''),
      'Price: '+(document.getElementById('modalPrice')?.textContent||''),
      'Colour: '+(document.getElementById('modalColourName')?.textContent||''),
      text('quickMessage')?'Message: '+text('quickMessage'):''
    ].filter(Boolean).join('\n');
  }
  const approved=new WeakSet();
  document.addEventListener('submit',e=>{
    const form=e.target;
    if(!(form instanceof HTMLFormElement)||!['orderForm','quickForm'].includes(form.id))return;
    if(approved.has(form)){approved.delete(form);return;}
    if(!form.checkValidity())return;
    e.preventDefault();
    e.stopImmediatePropagation();
    pending=form;
    summary.textContent=buildSummary(form);
    ready.classList.add('open');
    setTimeout(()=>cont.focus(),30);
  },true);
  cont.addEventListener('click',()=>{
    if(!pending)return;
    const f=pending;
    pending=null;
    ready.classList.remove('open');
    approved.add(f);
    f.requestSubmit();
  });
  back.addEventListener('click',()=>{pending=null;ready.classList.remove('open');});
  ready.addEventListener('click',e=>{if(e.target===ready){pending=null;ready.classList.remove('open');}});
})();