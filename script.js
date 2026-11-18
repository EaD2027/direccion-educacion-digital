(()=>{const b=document.querySelector('.nav-toggle'),n=document.querySelector('#primary-nav');if(b&&n){b.addEventListener('click',()=>{const v=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(v));n.classList.toggle('is-open',v)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('is-open');b.setAttribute('aria-expanded','false')}))}const cfg=window.SITE_CONFIG||{};document.querySelectorAll('[data-gite-link]').forEach(a=>{a.href=cfg.giteUrl||'https://frba.utn.edu.ar/ead/investigacion/';a.target='_blank';a.rel='noopener noreferrer'});document.querySelectorAll('[data-contact-email]').forEach(a=>{const e=cfg.contactEmail||'virtual@frba.utn.edu.ar';a.href='mailto:'+e})})();

(()=>{
 const track=document.getElementById('slider-track');if(!track)return;
 const entries=Array.isArray(window.DESTACADOS)?window.DESTACADOS:[];
 if(!entries.length)return;
 const dots=document.getElementById('slider-dots');const count=document.getElementById('slider-count');
 const prev=document.querySelector('.slider-prev'),next=document.querySelector('.slider-next'),play=document.querySelector('.slider-play');
 const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let active=0,paused=reduce,timer;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const safeUrl=s=>{const str=String(s||'');return /^(https?:\/\/|[a-zA-Z0-9_./#-]+$)/.test(str)&&!str.startsWith('//')?str:'#'};
 track.innerHTML=entries.map((it,i)=>`<article class="slide" aria-roledescription="diapositiva" aria-label="${i+1} de ${entries.length}"><div class="slide-copy"><span class="slide-category">${esc(it.categoria)}</span><h3>${esc(it.titulo)}</h3><p>${esc(it.descripcion)}</p><a class="slide-link" href="${esc(safeUrl(it.enlace))}">${esc(it.boton||'Leer más')} <span aria-hidden="true">↗</span></a></div><div class="slide-art"><img src="${esc(safeUrl(it.imagen))}" alt="${esc(it.titulo)}" loading="${i===0?'eager':'lazy'}"/></div></article>`).join('');
 dots.innerHTML=entries.map((_,i)=>`<button type="button" class="slider-dot" aria-label="Ver destacado ${i+1}" aria-current="${i===0?'true':'false'}"></button>`).join('');
 function update(){track.style.transform=`translateX(-${active*100}%)`;dots.querySelectorAll('button').forEach((b,i)=>{b.setAttribute('aria-current',String(i===active))});count.textContent=String(active+1).padStart(2,'0')+' / '+String(entries.length).padStart(2,'0');}
 function go(i){active=(i+entries.length)%entries.length;update()}
 function stop(){clearInterval(timer)}
 function start(){stop();if(!paused&&entries.length>1)timer=setInterval(()=>go(active+1),6500)}
 prev?.addEventListener('click',()=>{go(active-1);start()});next?.addEventListener('click',()=>{go(active+1);start()});
 dots.querySelectorAll('button').forEach((b,i)=>b.addEventListener('click',()=>{go(i);start()}));
 function renderPlay(){play.setAttribute('aria-pressed',String(paused));play.setAttribute('aria-label',paused?'Reanudar reproducción automática':'Pausar reproducción automática');play.innerHTML=paused?'▶ <span>Reanudar</span>':'Ⅱ <span>Pausar</span>'}
 play?.addEventListener('click',()=>{paused=!paused;renderPlay();start()});renderPlay();
 const slider=document.querySelector('.news-slider');slider?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();go(active-1);start()}if(e.key==='ArrowRight'){e.preventDefault();go(active+1);start()}});
 slider?.addEventListener('mouseenter',stop);slider?.addEventListener('mouseleave',start);
 slider?.addEventListener('focusin',stop);slider?.addEventListener('focusout',e=>{if(!slider.contains(e.relatedTarget))start()});
 document.addEventListener('visibilitychange',()=>document.hidden?stop():start());start();
})();
