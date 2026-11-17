(() => {
 const cfg = window.DED_CONFIG || {};
 document.querySelectorAll('[data-gite-link]').forEach(a => {a.href=cfg.giteUrl || 'https://frba.utn.edu.ar/ead/investigacion/'; a.target='_blank'; a.rel='noopener noreferrer';});
 document.querySelectorAll('[data-contact-email]').forEach(a=>{const mail=cfg.contactoEmail || 'virtual@frba.utn.edu.ar';a.textContent=mail;a.href='mailto:'+mail;});
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(o));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
})();
