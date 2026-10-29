/* Keyboard support, form validation and an explicit WhatsApp handoff. */
(() => {
  'use strict';
  const mobileViewport = matchMedia('(max-width: 900px)');
  const syncDisplayMode = () => {
    const phone = /iPhone|iPod|Android.*Mobile|Windows Phone|Mobile/i.test(navigator.userAgent || '');
    document.body.dataset.device = phone || mobileViewport.matches ? 'mobile' : 'desktop';
    document.body.dataset.input = matchMedia('(pointer: coarse)').matches ? 'touch' : 'mouse';
  };
  syncDisplayMode();
  mobileViewport.addEventListener('change', syncDisplayMode);
  const menu = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if (menu && nav) {
    menu.setAttribute('aria-controls', 'nav');
    const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); };
    menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
    nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
    matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
  }

  const forms = [...document.querySelectorAll('#orderForm, #quickForm')];
  forms.forEach(form => {
    for (const input of form.querySelectorAll('input, textarea')) {
      const validate = () => {
        input.setCustomValidity('');
        if (input.required && !input.value.trim()) input.setCustomValidity('Please enter this detail.');
        if (input.type === 'tel' && input.value.trim()) {
          const digits = input.value.replace(/\D/g, '');
          if (!/^[+\d\s().-]+$/.test(input.value) || digits.length < 7 || digits.length > 15) input.setCustomValidity('Enter a phone number with 7 to 15 digits.');
        }
      };
      input.addEventListener('input', validate);
      input.addEventListener('blur', validate);
    }
  });

  const dialogs = [document.getElementById('quickModal'), document.getElementById('orderReady')].filter(Boolean);
  let top = null;
  const returnFocus = new WeakMap();
  const originalInert = new Map();
  const visibleFocusable = root => [...root.querySelectorAll('a[href], button, input, select, textarea, [tabindex="0"]')].filter(el => !el.disabled && !el.closest('[inert]') && el.getClientRects().length);
  function syncDialogs() {
    const next = dialogs.filter(el => el.classList.contains('open')).at(-1) || null;
    dialogs.forEach(el => el.setAttribute('aria-hidden', String(!el.classList.contains('open'))));
    if (next === top) return;
    const previous = top;
    if (next && !returnFocus.has(next)) returnFocus.set(next, document.activeElement);
    originalInert.forEach((value, el) => { el.inert = value; }); originalInert.clear();
    top = next;
    if (top) {
      for (const el of document.body.children) {
        if (el === top || el.contains(top) || ['SCRIPT', 'STYLE'].includes(el.tagName)) continue;
        originalInert.set(el, el.inert); el.inert = true;
      }
      const focus = visibleFocusable(top)[0]; focus?.focus({preventScroll:true});
    }
    if (previous && !previous.classList.contains('open')) {
      const prior = returnFocus.get(previous); returnFocus.delete(previous);
      if (prior?.isConnected && !prior.closest('[inert]')) prior.focus({preventScroll:true});
      else if (!top) document.querySelector('.order-card')?.focus({preventScroll:true});
    }
  }
  dialogs.forEach(el => new MutationObserver(syncDialogs).observe(el, {attributes:true, attributeFilter:['class']}));
  syncDialogs();
  document.addEventListener('keydown', e => {
    if (!top) return;
    if (e.key === 'Escape') {
      e.preventDefault(); e.stopImmediatePropagation();
      if (top.id === 'orderReady') document.getElementById('readyBack')?.click();
      else top.querySelector('[data-close]')?.click();
    }
    if (e.key === 'Tab') {
      const list = visibleFocusable(top), first = list[0], last = list.at(-1);
      if (!first) { e.preventDefault(); return; }
      if (e.shiftKey && (document.activeElement === first || !top.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (document.activeElement === last || !top.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
    }
  }, true);
})();


/* LoversiPhones 4K-ready vector controls, 29 October 2026.
   Every icon is an inline SVG: sharp at any display resolution. */
(() => {
  'use strict';
  const NS='http://www.w3.org/2000/svg';
  const drawings={
    'whatsapp': '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.057-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.372-.024-.52-.075-.149-.67-1.612-.917-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01s-.52.074-.793.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.874 1.214 3.073.148.198 2.095 3.2 5.077 4.487.71.307 1.263.49 1.695.627.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.516-5.281c.002-5.444 4.434-9.876 9.889-9.876a9.83 9.83 0 0 1 6.993 2.898 9.83 9.83 0 0 1 2.893 6.998c-.003 5.444-4.435 9.876-9.885 9.876m8.413-18.288A11.8 11.8 0 0 0 12.05 0C5.495 0 .16 5.333.157 11.892a11.83 11.83 0 0 0 1.588 5.927L.057 24l6.326-1.659a11.91 11.91 0 0 0 5.664 1.443h.005c6.557 0 11.893-5.334 11.895-11.894a11.8 11.8 0 0 0-3.484-8.414z"/>',
    'phone':'<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.91.69 2.81a2 2 0 0 1-.45 2.11L9.05 10.9a16 16 0 0 0 4.05 4.05l1.26-1.27a2 2 0 0 1 2.11-.45c.9.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z"/>',
    'message':'<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8A8.5 8.5 0 0 1 12.5 20a8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5Z"/>',
    'mail':'<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/>',
    'bag':'<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    'grid':'<rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/>',
    'pin':'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.7"/>',
    'help':'<circle cx="12" cy="12" r="10"/><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2.1-3 4"/><path d="M12 17h.01"/>',
    'info':'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>',
    'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
    'close':'<path d="M5 5l14 14M19 5 5 19"/>',
    'left':'<path d="m15 18-6-6 6-6"/>',
    'right':'<path d="m9 18 6-6-6-6"/>',
    'up':'<path d="m6 14 6-6 6 6M12 8v12"/>',
    'arrow-right':'<path d="M4 12h16m-7-7 7 7-7 7"/>',
    'home':'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-8h6v8"/>',
    'file':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
    'shield':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    'rotate':'<path d="M3 11a9 9 0 0 1 15.3-6.4L21 7M21 3v4h-4"/><path d="M21 13a9 9 0 0 1-15.3 6.4L3 17m0 4v-4h4"/>',
    'check':'<path d="m5 12 4 4L19 6"/>',
    'search':'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
    'smartphone':'<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
    'external':'<path d="M13 5h6v6M19 5l-9 9"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/>'
  };

  function vector(name) {
    const svg=document.createElementNS(NS,'svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('aria-hidden','true');
    svg.setAttribute('focusable','false');
    svg.setAttribute('class','li-vector'+(name==='whatsapp'?' li-vector-wa':''));
    if(name==='whatsapp') { svg.setAttribute('fill','currentColor'); }
    else {
      svg.setAttribute('fill','none');
      svg.setAttribute('stroke','currentColor');
      svg.setAttribute('stroke-width','1.85');
      svg.setAttribute('stroke-linecap','round');
      svg.setAttribute('stroke-linejoin','round');
    }
    svg.innerHTML=drawings[name] || drawings['arrow-right'];
    return svg;
  }

  const isChoice=el=>el.matches('.photo-thumb,.angle-thumb,.modal-photo-thumb,.modal-angle-thumb,.colour-shot-button');
  const isIconOnly=el=>el.matches('.menu-btn,.card-arrow,.detail-nav,.modal-angle-arrow,.modal-close,.back-top,.floating-wa');

  function typeFor(el) {
    if(el.matches('.skip-link,.brand,.modal-backdrop') || el.closest('.brand')) return null;
    if(isChoice(el)) return 'check';
    if(el.id==='menuBtn') return el.getAttribute('aria-expanded')==='true'?'close':'menu';
    const cls=el.classList;
    if(cls.contains('floating-wa') || cls.contains('dock-wa')) return 'whatsapp';
    if(cls.contains('back-top')) return 'up';
    if(cls.contains('modal-close') || el.hasAttribute('data-close') || /close|dismiss/i.test(el.getAttribute('aria-label')||'')) return 'close';
    if(cls.contains('card-prev') || cls.contains('detail-prev') || cls.contains('modal-angle-prev') || /previous/i.test(el.getAttribute('aria-label')||'')) return 'left';
    if(cls.contains('card-next') || cls.contains('detail-next') || cls.contains('modal-angle-next') || /next/i.test(el.getAttribute('aria-label')||'')) return 'right';
    const href=(el.getAttribute('href')||'').toLowerCase();
    const title=((el.textContent||'')+' '+(el.getAttribute('aria-label')||'')).toLowerCase().trim();
    if(href.includes('wa.me/') || /whatsapp/.test(title)) return 'whatsapp';
    if(href.startsWith('tel:') || /^(call|phone)\b/.test(title)) return 'phone';
    if(href.startsWith('sms:') || /^(sms|text)\b/.test(title)) return 'message';
    if(href.startsWith('mailto:')) return 'mail';
    if(cls.contains('model') || href.includes('/phones/')) return 'smartphone';
    if(href.includes('warranty')) return 'shield';
    if(href.includes('returns')) return 'rotate';
    if(href.includes('privacy')) return 'shield';
    if(href.includes('terms')) return 'file';
    if(/(faq|questions)/.test(href+title)) return 'help';
    if(/(#visit|location|maps|directions)/.test(href+title)) return 'pin';
    if(/(#about|about us)/.test(href+title)) return 'info';
    if(/(#order|order|checkout|buy|purchase)/.test(href+title)) return 'bag';
    if(/(#phones|browse|catalogue|models|shop)/.test(href+title)) return 'grid';
    if(href==='#top' || href==='/' || title==='home' || href==='#main-content') return 'home';
    if(el.tagName==='SUMMARY') return 'help';
    if(/search/.test(title)) return 'search';
    if(el.matches('a[href^="http"]')) return 'external';
    return 'arrow-right';
  }

  function decorate(el) {
    const name=typeFor(el);
    if(!name || (el.dataset.liIcon===name && el.querySelector('.li-vector'))) return;
    const dock=el.matches('.mobile-dock a');
    const old= dock ? el.querySelector(':scope > .li-dock-icon') : el.querySelector(':scope > .li-glyph');
    if(old) old.remove();
    if(dock){
      const slot=el.querySelector(':scope > span');
      if(slot) { slot.classList.add('li-dock-icon'); slot.replaceChildren(vector(name)); }
      else { const holder=document.createElement('span'); holder.className='li-dock-icon';holder.append(vector(name));el.prepend(holder); }
      el.classList.add('li-pressable');
      el.dataset.liIcon=name;
      return;
    }
    const wrap=document.createElement('span');
    wrap.className='li-glyph'+(name==='whatsapp'?' li-glyph-wa':'');
    wrap.setAttribute('aria-hidden','true');
    wrap.append(vector(name));
    if(isIconOnly(el)) {
      for(const node of [...el.childNodes]) {
        if(node.nodeType===Node.TEXT_NODE && /^(WA|☰|×|‹|›|←|→|↑|✕|✖)$/.test(node.textContent.trim())) node.remove();
      }
      el.classList.add('li-icon-only');
      if(el.classList.contains('floating-wa')) el.textContent='';
    } else if(isChoice(el)) {
      el.classList.add('li-choice');
    } else {
      el.classList.add('li-with-icon');
    }
    if(el.classList.contains('model')) {
      const legacy=el.querySelector(':scope > b[aria-hidden="true"]');
      if(legacy) legacy.hidden=true;
    }
    el.classList.add('li-pressable');
    if(el.classList.contains('model')) el.append(wrap);
    else el.prepend(wrap);
    el.dataset.liIcon=name;
  }

  let pending=false;
  function applyIcons() {
    pending=false;
    document.querySelectorAll('a[href],button,summary,[role="button"]').forEach(decorate);
  }
  function schedule() {
    if(pending) return;
    pending=true;
    queueMicrotask(applyIcons);
  }
  schedule();
  new MutationObserver(schedule).observe(document.body,{
    childList:true,subtree:true,attributes:true,attributeFilter:['aria-expanded']
  });
})();
