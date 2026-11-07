// ====== EDIT THESE when the restaurant confirms the details ======
const CONFIG = {
  phone: "+8675523964118",
  whatsapp: "8618123777544",   // digits only with country code, example: "8613812345678"
  taxNumber: "91440300MAEXUW6366",      // example: "info@example.com"
  mapUrl: "https://surl.amap.com/kWOHY2mn8qd", // Amap share link from the restaurant
  address: "深圳市福田区华强北街道华航社区振兴路150-2", // from the menu PDF, to be confirmed
  city: "深圳"
};
// =================================================================

const T = {
zh:{name:"奥斯曼土耳其餐厅",nav_home:"首页",nav_menu:"菜单",nav_about:"关于我们",nav_contact:"联系我们",halal_tag:"清真 HALAL",hero_title:"地道土耳其清真美食",hero_sub:"深圳华强北 · 烤肉、曼迪饭、披萨与传统甜点",view_menu:"查看菜单",book:"预订座位",book_wa:"通过 WhatsApp 预订",menu_note:"价格单位：人民币（元）。图片仅供参考，以实物为准。",
about_1:"奥斯曼土耳其餐厅位于深圳福田区华强北，提供以土耳其为主的中东风味清真菜，也有阿拉伯、巴基斯坦和印度风味的菜品。",
about_2:"我们提供堂食，菜品包括炭火烤肉、沙威玛、曼迪饭、披萨、前菜、甜点和鲜榨果汁，也欢迎家庭聚餐、朋友聚会和生日活动。餐厅不提供任何酒类饮品。",
halal_h:"什么是“清真 / Halal”？",halal_p:"“Halal”是阿拉伯语，意思是“被允许的”。在饮食上，指符合伊斯兰教规的食物：不含猪肉，不含酒精，肉类需按规定方式屠宰。",
nav_gallery:"图片",gallery_h:"餐厅与美食图片",search_ph:"搜索菜品…",no_results:"没有找到相关菜品。",c_phone:"电话",wechat_hint:"扫码添加微信，在线预订",c_addr:"地址",addr:"深圳市福田区华强北街道华航社区振兴路150-2",directions:"高德地图导航",pending:"待确认",wa_msg:"您好，我想预订座位。"},
en:{name:"Ottoman Palace Restaurant",nav_home:"Home",nav_menu:"Menu",nav_about:"About us",nav_contact:"Contact",halal_tag:"HALAL",hero_title:"Authentic Halal Turkish Food",hero_sub:"Huaqiangbei, Shenzhen · Kebabs, mandi rice, pizza and traditional desserts",view_menu:"View menu",book:"Book a table",book_wa:"Book via WhatsApp",menu_note:"Prices are in Chinese Yuan (CNY). Photos are for reference only.",
about_1:"Ottoman Palace Restaurant is in Huaqiangbei, Futian District, Shenzhen. We serve halal Middle Eastern food with a Turkish focus, plus Arabic, Pakistani and Indian dishes.",
about_2:"We offer dine-in service with charcoal grills, shawarma, mandi rice, pizza, starters, desserts and fresh juices. Families, friends and birthday groups are welcome. No alcohol is served.",
halal_h:"What does “Halal” mean?",halal_p:"“Halal” is Arabic for “permitted”. For food, it means meeting Islamic dietary rules: no pork, no alcohol, and meat prepared in the prescribed way.",
nav_gallery:"Gallery",gallery_h:"Our food & restaurant",search_ph:"Search dishes…",no_results:"No dishes found.",c_phone:"Phone",wechat_hint:"Scan to add us on WeChat and book",c_addr:"Address",addr:"No. 150-2, Zhenxing Road, Huahang Community, Huaqiangbei Subdistrict, Futian District, Shenzhen, China.",directions:"Directions (Amap)",pending:"To be confirmed",wa_msg:"Hello, I would like to book a table."},
ar:{name:"مطعم القصر العثماني التركي",nav_home:"الرئيسية",nav_menu:"قائمة الطعام",nav_about:"من نحن",nav_contact:"تواصل معنا",halal_tag:"حلال HALAL",hero_title:"مأكولات تركية حلال أصيلة",hero_sub:"هواكيانغبي، شنتشن · مشاوي وأرز مندي وبيتزا وحلويات تقليدية",view_menu:"عرض القائمة",book:"احجز طاولة",book_wa:"احجز عبر واتساب",menu_note:"الأسعار باليوان الصيني (CNY). الصور للتوضيح فقط.",
about_1:"يقع مطعم القصر العثماني التركي في حي هواكيانغبي بمنطقة فوتيان في شنتشن. نقدم أطباقًا حلالًا من الشرق الأوسط بطابع تركي، إضافة إلى أطباق عربية وباكستانية وهندية.",
about_2:"نقدم الطعام داخل المطعم: مشاوي على الفحم وشاورما وأرز مندي وبيتزا ومقبلات وحلويات وعصائر طازجة. أهلاً بالعائلات والأصدقاء وحفلات أعياد الميلاد. لا نقدم أي مشروبات كحولية.",
halal_h:"ما معنى «حلال»؟",halal_p:"«حلال» كلمة عربية تعني «المباح». في الطعام تعني أنه مطابق لأحكام الشريعة الإسلامية: لا لحم خنزير ولا كحول، وتُحضَّر اللحوم بالطريقة المقررة شرعًا.",
nav_gallery:"معرض الصور",gallery_h:"مطعمنا وأطباقنا",search_ph:"ابحث عن طبق…",no_results:"لا توجد أطباق مطابقة.",c_phone:"الهاتف",wechat_hint:"امسح الرمز لإضافتنا على ويتشات والحجز",c_addr:"العنوان",addr:"رقم 150-2، طريق تشن شينغ، مجتمع هواهانغ، حي هواكيانغبي، منطقة فوتيان، شنتشن، الصين.",directions:"الاتجاهات (Amap)",pending:"سيُضاف قريبًا",wa_msg:"مرحبًا، أود حجز طاولة."},
tr:{name:"Osmanlı Saray Restoranı",nav_home:"Ana sayfa",nav_menu:"Menü",nav_about:"Hakkımızda",nav_contact:"İletişim",halal_tag:"HELAL",hero_title:"Otantik Helal Türk Mutfağı",hero_sub:"Shenzhen Huaqiangbei · Kebap, mandi pilavı, pide ve geleneksel tatlılar",view_menu:"Menüyü gör",book:"Rezervasyon yap",book_wa:"WhatsApp ile rezervasyon",menu_note:"Fiyatlar Çin Yuanı (CNY) cinsindendir. Fotoğraflar temsilidir.",
about_1:"Osmanlı Saray Restoranı, Shenzhen'in Futian bölgesindeki Huaqiangbei'de yer alır. Türk mutfağı ağırlıklı helal Orta Doğu yemeklerinin yanı sıra Arap, Pakistan ve Hint yemekleri sunar.",
about_2:"Restoranımızda mangal ızgaralar, şavurma, mandi pilavı, pizza, mezeler, tatlılar ve taze meyve suları servis edilir. Aileler, arkadaş grupları ve doğum günü kutlamaları için uygundur. Alkollü içki servis edilmez.",
halal_h:"“Helal” ne demek?",halal_p:"“Helal”, Arapçada “izin verilen” anlamına gelir. Yiyecekler için İslami kurallara uygun olması demektir: domuz eti ve alkol içermez, et ise usulüne uygun şekilde hazırlanır.",
nav_gallery:"Galeri",gallery_h:"Restoran ve yemeklerimiz",search_ph:"Yemek ara…",no_results:"Eşleşen yemek bulunamadı.",c_phone:"Telefon",wechat_hint:"WeChat'ten eklemek ve rezervasyon için QR kodu tarayın",c_addr:"Adres",addr:"Çin, Shenzhen, Futian Bölgesi, Huaqiangbei Alt Bölgesi, Huahang Topluluğu, Zhenxing Yolu No: 150-2.",directions:"Yol tarifi (Amap)",pending:"Yakında eklenecek",wa_msg:"Merhaba, rezervasyon yapmak istiyorum."}
};

const saved = localStorage.getItem("lang");
let lang = ["zh","en","ar","tr"].includes(saved) ? saved : "zh";
let cat = 0;
let query = "";
const $ = s => document.querySelector(s);

function renderMenu(){
  const q = query.trim().toLocaleLowerCase(lang);
  $("#tabs").innerHTML = MENU.map((c,i)=>`<button type="button" role="tab" aria-selected="${!q&&i===cat}" class="${!q&&i===cat?"on":""}" data-c="${i}">${c.n[lang]}</button>`).join("");
  const list = q ? MENU.flatMap(c=>c.d).filter(d=>d[lang].toLocaleLowerCase(lang).includes(q)) : MENU[cat].d;
  $("#items").innerHTML = list.map(d=>{
    const sub = lang==="en" ? "" : d.en;
    const pic = d.img ? `<img src="images/${d.img}.webp" alt="${d.en}" loading="lazy" decoding="async">` : `<div class="ph"><img src="images/logo.png" alt="" loading="lazy"></div>`;
    return `<article class="dish">${pic}<div class="body"><div class="n">${d[lang]}${sub?`<small>${sub}</small>`:""}</div><div class="p">¥${d.p}</div></div></article>`;
  }).join("");
  $("#empty").hidden = list.length > 0;
}

function contact(){
  const t = T[lang], pend = t.pending;
  const ph = $("#phoneLink"), wa = $("#waLink"), ml = $("#mailLink");
  ph.textContent = CONFIG.phone ? CONFIG.phone.replace(/^\+86(\d{3})(\d{4})(\d{4})$/,"+86 $1 $2 $3") : pend; ph.href = CONFIG.phone ? "tel:"+CONFIG.phone : "#contact";
  wa.textContent = CONFIG.whatsapp ? "+"+CONFIG.whatsapp : pend;
  wa.href = CONFIG.whatsapp ? waLink() : "#contact";
  const wf = $("#waFloat"); wf.href = wa.href; wf.target = CONFIG.whatsapp ? "_blank" : ""; wf.rel = "noopener"; wf.setAttribute("aria-label", "WhatsApp");
  ml.textContent = CONFIG.taxNumber;
ml.removeAttribute("href");
ml.removeAttribute("target");
ml.style.cursor = "default";
  $("#addr").textContent = t.addr; $("#addr").dir = lang==="ar" ? "rtl" : "ltr";
  $("#mapLink").href = CONFIG.mapUrl || ("https://uri.amap.com/search?keyword="+encodeURIComponent(CONFIG.address)+"&city="+encodeURIComponent(CONFIG.city));
}
const waLink = () => "https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(T[lang].wa_msg);

function setLang(l){
  lang = l; localStorage.setItem("lang", l);
  document.documentElement.lang = l==="zh" ? "zh-CN" : l;
  document.documentElement.dir = l==="ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(e=>{ const v=T[l][e.dataset.i18n]; if(v) e.textContent=v; });
  document.querySelectorAll("[data-i18n-ph]").forEach(e=>{ const v=T[l][e.dataset.i18nPh]; if(v) e.placeholder=v; });
  document.querySelectorAll("[data-i18n-aria]").forEach(e=>{ const v=T[l][e.dataset.i18nAria]; if(v) e.setAttribute("aria-label",v); });
  document.querySelectorAll("[data-lang]").forEach(b=>{ const on = b.dataset.lang===l; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
  document.title = T[l].name;
  renderMenu(); contact();
}

document.addEventListener("click", e=>{
  const b = e.target.closest("button,a"); if(!b) return;
  if(b.dataset.lang) setLang(b.dataset.lang);
  if(b.dataset.c){ cat = +b.dataset.c; query = ""; $("#search").value = ""; renderMenu(); }
  if(b.dataset.gi!==undefined) openLb(+b.dataset.gi);
  if(b.dataset.lb) lbAction(b.dataset.lb);
  if(b.id==="burger"){ drawer.classList.contains("open") ? closeNav(true) : openNav(); }
  else if(drawer.classList.contains("open")) closeNav(false);
  if(b.hasAttribute("data-book")){
    if(CONFIG.whatsapp) window.open(waLink(), "_blank");
    else { $("#contact").scrollIntoView(); pulse(); }
  }
});
// ---- header: live height, scroll effect, side menu ----
const topbar = document.querySelector(".top"), drawer = $("#drawer"), burger = $("#burger"), scrim = $("#scrim");
function syncHeader(){ document.documentElement.style.setProperty("--hh", topbar.offsetHeight + "px"); }
new ResizeObserver(syncHeader).observe(topbar); topbar.addEventListener("transitionend", syncHeader); syncHeader();
let ticking = false;
function onScroll(){ topbar.classList.toggle("scrolled", window.scrollY > 24); ticking = false; }
window.addEventListener("scroll", ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, {passive:true});
onScroll();
function openNav(){ drawer.classList.add("open"); scrim.classList.add("show"); burger.setAttribute("aria-expanded","true"); document.body.classList.add("nav-open"); drawer.querySelector("a").focus(); }
function closeNav(restore){ drawer.classList.remove("open"); scrim.classList.remove("show"); burger.setAttribute("aria-expanded","false"); document.body.classList.remove("nav-open"); if(restore) burger.focus(); }
scrim.addEventListener("click", ()=>closeNav(true));
document.addEventListener("keydown", e=>{
  if(!drawer.classList.contains("open")) return;
  if(e.key==="Escape"){ e.preventDefault(); closeNav(true); return; }
  if(e.key==="Tab"){            // keep keyboard focus inside the open menu: [menu button + links]
    const it = [burger, ...drawer.querySelectorAll("a")], i = it.indexOf(document.activeElement);
    e.preventDefault();
    it[i < 0 ? (e.shiftKey ? it.length-1 : 0) : (i + (e.shiftKey ? -1 : 1) + it.length) % it.length].focus();
  }
});
// highlight the section being viewed
const navLinks = [...drawer.querySelectorAll("a")];
const spy = new IntersectionObserver(es=>es.forEach(en=>{
  if(!en.isIntersecting) return;
  $("#waFloat").classList.toggle("hide", en.target.id==="home");   // do not cover the hero buttons
  navLinks.forEach(a=>{ const on = a.getAttribute("href")==="#"+en.target.id; a.classList.toggle("active", on); on ? a.setAttribute("aria-current","location") : a.removeAttribute("aria-current"); });
}), {rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main > section").forEach(sec=>spy.observe(sec));
// reservation fallback: briefly highlight the contact options that exist today
function pulse(){ ["#cardPhone","#cardWechat"].forEach(id=>{ const c=$(id); c.classList.remove("pulse"); void c.offsetWidth; c.classList.add("pulse"); setTimeout(()=>c.classList.remove("pulse"),1900); }); }

// ---- search ----
$("#search").addEventListener("input", e=>{ query = e.target.value; renderMenu(); });

// ---- photo viewer (lightbox) ----
const gal = [...document.querySelectorAll(".g-item img")];
let gi = 0, lastFocus = null;
function showLb(){ $("#lbImg").src = gal[gi].src; $("#lbImg").alt = gal[gi].alt; }
function openLb(i){ gi = i; lastFocus = document.activeElement; showLb(); $("#lightbox").hidden = false; document.body.style.overflow = "hidden"; $(".lb-close").focus(); }
function closeLb(){ $("#lightbox").hidden = true; document.body.style.overflow = ""; if(lastFocus) lastFocus.focus(); }
function lbAction(a){ if(a==="close") closeLb(); else { gi = (gi + (a==="next"?1:-1) + gal.length) % gal.length; showLb(); } }
$("#lightbox").addEventListener("click", e=>{ if(e.target.id==="lightbox") closeLb(); });
document.addEventListener("keydown", e=>{
  if($("#lightbox").hidden) return;
  if(e.key==="Escape") closeLb(); else if(e.key==="ArrowRight") lbAction("next"); else if(e.key==="ArrowLeft") lbAction("prev");
});

setLang(lang);
