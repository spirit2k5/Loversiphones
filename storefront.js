/* Keyboard support, form validation and an explicit WhatsApp handoff. */
(() => {
  'use strict';
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
