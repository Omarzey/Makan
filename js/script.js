// ====== EDIT THESE when the restaurant confirms the details ======


const CONFIG = {

  phone: "+8675523964118",

@@ -88,7 +89,7 @@ function dishCard(e, sig){

  const d = e.d, name = d[lang], sub = lang==="en" ? "" : d.en;

  const desc = d.desc && typeof d.desc[lang]==="string" ? d.desc[lang].trim() : "";

  const pic = d.img


    ? `<div class="pic"><img src="images/${d.img}.webp" alt="${esc(d.en)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.parentNode.className='pic ph';this.src='images/logo.png';this.alt=''"></div>`

    : `<div class="pic ph"><img src="images/logo.png" alt="" loading="lazy"></div>`;

  return `<article class="dish" id="dish-${e.ci}-${e.di}">${pic}<div class="body"><div class="n" title="${esc(name)}">${esc(name)}</div>${sub?`<div class="sub">${esc(sub)}</div>`:""}${desc?`<p class="desc">${esc(desc)}</p>`:""}<div class="p"><span class="cur">¥</span>${d.p}</div>${sig?`<button type="button" class="goto" data-goto="${e.ci}-${e.di}">${T[lang].sig_goto}</button>`:""}</div></article>`;

}

@@ -105,14 +106,16 @@ function updateTabs(){

}

function centerTab(){

  const el = $("#tabs"), on = el.querySelector("button.on"); if(!on) return;


  const max = el.scrollWidth - el.clientWidth, x = Math.max(0, Math.min(max, on.offsetLeft + on.offsetWidth/2 - el.clientWidth/2));


  el.scrollTo({left: document.documentElement.dir==="rtl" ? x - max : x, behavior: reduced() ? "auto" : "smooth"});

}

function renderTabs(){


  const el = $("#tabs"), keepX = el.scrollLeft, sig = hasSig();

  if(cat==="sig" && !sig) cat = 0;

  el.innerHTML = (sig ? `<button type="button" role="tab" data-c="sig">★ ${T[lang].sig_title}</button>` : "") + MENU.map((c,i)=>`<button type="button" role="tab" data-c="${i}">${c.n[lang]}</button>`).join("");


  el.scrollLeft = keepX; updateTabs();



}

function renderMenu(){ if(cat===null) cat = hasSig() ? "sig" : 0; renderTabs(); renderItems(); }

function gotoDish(id){

@@ -175,7 +178,7 @@ function onScroll(){

  const y = window.scrollY, dy = y - lastY;

  topbar.classList.toggle("scrolled", y > 24);

  tools.classList.toggle("stuck", tools.getBoundingClientRect().top <= topbar.offsetHeight - 60 + 1);


  if(Math.abs(dy) > 6){                       // search row slides under the header when scrolling down, comes back when scrolling up

    const keep = $("#search").value.trim() !== "" || document.activeElement === $("#search");

    tools.classList.toggle("showsearch", dy < 0 || keep); lastY = y;

  }

@@ -189,7 +192,7 @@ scrim.addEventListener("click", ()=>closeNav(true));

document.addEventListener("keydown", e=>{

  if(!drawer.classList.contains("open")) return;

  if(e.key==="Escape"){ e.preventDefault(); closeNav(true); return; }


  if(e.key==="Tab"){            // keep keyboard focus inside the open menu: [menu button + links]

    const it = [burger, ...drawer.querySelectorAll("a:not([hidden])")], i = it.indexOf(document.activeElement);

    e.preventDefault();

    it[i < 0 ? (e.shiftKey ? it.length-1 : 0) : (i + (e.shiftKey ? -1 : 1) + it.length) % it.length].focus();

@@ -198,8 +201,6 @@ document.addEventListener("keydown", e=>{

// highlight the section being viewed

const navLinks = [...drawer.querySelectorAll("a")];

let inHome = false, inMenu = false;


// The floating WhatsApp button never covers anything: it is hidden over the hero and the menu (the menu bar has its own WhatsApp button),


// and everywhere else it fades out while it would sit on top of text or a button, then comes back in the free gaps.

const FLOAT_AVOID = "main p, main h2, main h3, main li, main blockquote, main .rv-meta, main .btn, main .card a, footer";

function floatCovers(){

  const f = $("#waFloat"), cs = getComputedStyle(f), pad = 6;

@@ -224,37 +225,64 @@ document.querySelectorAll("main > section").forEach(sec=>spy.observe(sec));

let floatTick = false;

addEventListener("scroll", ()=>{ if(!floatTick){ floatTick = true; requestAnimationFrame(()=>{ floatTick = false; floatState(); }); } }, {passive:true});

addEventListener("resize", floatState);


// reservation fallback: briefly highlight the contact options that exist today

function pulse(){ ["#cardPhone","#cardWechat"].forEach(id=>{ const c=$(id); c.classList.remove("pulse"); void c.offsetWidth; c.classList.add("pulse"); setTimeout(()=>c.classList.remove("pulse"),1900); }); }



// ---- search ----

$("#search").addEventListener("input", e=>{ query = e.target.value; updateClear(); if(query.trim()) tools.classList.add("showsearch"); renderItems(); updateTabs(); });

$("#search").addEventListener("focus", ()=>tools.classList.add("showsearch"));

// ---- photo viewer (lightbox) ----

const gal = [...document.querySelectorAll(".g-item img")], lb = $("#lightbox"), lbImg = $("#lbImg");

let gi = 0, lastFocus = null, swipeX = null, swiped = false;

const isRtl = () => document.documentElement.dir === "rtl";

function showLb(){

  const im = gal[gi]; lbImg.src = im.currentSrc || im.src; lbImg.alt = im.alt;

  $("#lbCap").textContent = im.alt; $("#lbCount").textContent = (gi+1) + " / " + gal.length;


  [gi+1, gi-1].forEach(k=>{ new Image().src = gal[(k+gal.length)%gal.length].src; });   // preload neighbours

}

function openLb(i){ gi = i; lastFocus = document.activeElement; showLb(); lb.hidden = false; document.body.style.overflow = "hidden"; $(".lb-close").focus(); }

function closeLb(){ lb.hidden = true; document.body.style.overflow = ""; if(lastFocus) lastFocus.focus(); }

function lbAction(a){ if(a==="close") return closeLb(); gi = (gi + (a==="next" ? 1 : -1) + gal.length) % gal.length; showLb(); }


lb.addEventListener("click", e=>{ if(swiped) return; if(e.target===lb) closeLb(); });   // a swipe must never count as a click on the backdrop

lb.addEventListener("pointerdown", e=>{ swipeX = e.target.closest(".lb-btn") ? null : e.clientX; swiped = false; });

lb.addEventListener("pointerup", e=>{

  if(swipeX===null) return; const dx = e.clientX - swipeX; swipeX = null;


  if(Math.abs(dx) > 50){ swiped = true; setTimeout(()=>{ swiped = false; }, 60); lbAction((dx<0) !== isRtl() ? "next" : "prev"); }   // swipe towards the next photo

});

document.addEventListener("keydown", e=>{

  if(lb.hidden) return;

  if(e.key==="Escape") closeLb();

  else if(e.key==="ArrowRight") lbAction(isRtl() ? "prev" : "next");

  else if(e.key==="ArrowLeft") lbAction(isRtl() ? "next" : "prev");


  else if(e.key==="Tab"){                       // keep focus inside the viewer

    const it = [...lb.querySelectorAll("button")], i = it.indexOf(document.activeElement);

    e.preventDefault(); it[(i + (e.shiftKey ? -1 : 1) + it.length) % it.length].focus();

  }
