// ====== EDIT THESE when the restaurant confirms the details ======
const CONFIG = {
  phone: "+8675523964118",
  whatsapp: "8618123777544", // digits only, with country code
  taxNumber: "91440300MAEXUW6366",
  reviewsUrl: "",   // optional: link to the restaurant page on a review site (leave "" if none)
  mapUrl: "https://surl.amap.com/kWOHY2mn8qd", // Amap share link from the restaurant
  address: "深圳市福田区华强北街道华航社区振兴路150-2", // from the menu PDF, to be confirmed
  city: "深圳"
};
// =================================================================

const T = {
zh:{name:"奥斯曼土耳其餐厅",nav_home:"首页",nav_menu:"菜单",nav_about:"关于我们",nav_contact:"联系我们",halal_tag:"清真 HALAL",hero_title:"地道土耳其清真美食",hero_sub:"深圳华强北 · 烤肉、曼迪饭、披萨与传统甜点",view_menu:"查看菜单",book:"预订座位",book_wa:"通过 WhatsApp 预订",menu_note:"价格单位：人民币（元）。图片仅供参考，以实物为准。",
about_1:"提供以土耳其风味为主的清真中东菜，同时也有阿拉伯、巴基斯坦和印度风味的菜品。",
about_f1:"堂食服务",about_f2:"欢迎家庭聚餐、朋友聚会和生日活动",about_f3:"餐厅不提供任何酒类饮品",
halal_h:"什么是“清真 / Halal”？",halal_p:"“Halal”是阿拉伯语，意思是“被允许的”。在饮食上，指符合伊斯兰教规的食物：不含猪肉，不含酒精，肉类需按规定方式屠宰。",
halal_cert_h:"餐厅会员证书",halal_cert_p:"本餐厅是深圳市清真食品行业协会的会员单位。",halal_cert_hint:"点击证书查看大图。",
nav_gallery:"图片",gallery_h:"餐厅与美食图片",search_ph:"搜索菜品…",no_results:"没有找到相关菜品。",sig_title:"招牌菜",sig_goto:"在菜单中查看",clear_search:"清除搜索",to_top:"回到顶部",c_tax:"税号",nav_reviews:"评价",reviews_h:"顾客评价",reviews_count:"{n} 条评价",reviews_more:"查看更多评价",lb_close:"关闭",lb_prev:"上一张",lb_next:"下一张",c_phone:"电话",wechat_hint:"扫码添加微信，在线预订",c_addr:"地址",addr:"深圳市福田区华强北街道华航社区振兴路150-2",directions:"高德地图导航",pending:"待确认",wa_msg:"您好，我想预订座位。"},
en:{name:"Ottoman Palace Restaurant",nav_home:"Home",nav_menu:"Menu",nav_about:"About us",nav_contact:"Contact",halal_tag:"HALAL",hero_title:"Authentic Halal Turkish Food",hero_sub:"Huaqiangbei, Shenzhen · Kebabs, mandi rice, pizza and traditional desserts",view_menu:"View menu",book:"Book a table",book_wa:"Book via WhatsApp",menu_note:"Prices are in Chinese Yuan (CNY). Photos are for reference only.",
about_1:"A halal restaurant serving Middle Eastern food with a Turkish focus, alongside Arab, Pakistani and Indian dishes.",
about_f1:"Dine-in service",about_f2:"Families, friends and birthday groups are welcome",about_f3:"No alcohol is served",
halal_h:"What does “Halal” mean?",halal_p:"“Halal” is Arabic for “permitted”. For food, it means meeting Islamic dietary rules: no pork, no alcohol, and meat prepared in the prescribed way.",
halal_cert_h:"Restaurant Membership Certificate",halal_cert_p:"The restaurant is a member of the Shenzhen Halal Food Industry Association.",halal_cert_hint:"Click the certificate to view it in a larger size.",
nav_gallery:"Gallery",gallery_h:"Our food & restaurant",search_ph:"Search dishes…",no_results:"No dishes found.",sig_title:"Signature Dishes",sig_goto:"View in menu",clear_search:"Clear search",to_top:"Back to top",c_tax:"Tax Number",nav_reviews:"Reviews",reviews_h:"Customer Reviews",reviews_count:"{n} reviews",reviews_more:"See more reviews",lb_close:"Close",lb_prev:"Previous",lb_next:"Next",c_phone:"Phone",wechat_hint:"Scan to add us on WeChat and book",c_addr:"Address",addr:"No. 150-2, Zhenxing Road, Huahang Community, Huaqiangbei Subdistrict, Futian District, Shenzhen, China.",directions:"Directions (Amap)",pending:"To be confirmed",wa_msg:"Hello, I would like to book a table."},
ar:{name:"مطعم القصر العثماني التركي",nav_home:"الرئيسية",nav_menu:"قائمة الطعام",nav_about:"من نحن",nav_contact:"تواصل معنا",halal_tag:"حلال HALAL",hero_title:"مأكولات تركية حلال أصيلة",hero_sub:"هواكيانغبي، شنتشن · مشاوي وأرز مندي وبيتزا وحلويات تقليدية",view_menu:"عرض القائمة",book:"احجز طاولة",book_wa:"احجز عبر واتساب",menu_note:"الأسعار باليوان الصيني (CNY). الصور للتوضيح فقط.",
about_1:"مطعم حلال يقدم أطباق الشرق الأوسط بطابع تركي، إلى جانب أطباق عربية وباكستانية وهندية.",
about_f1:"الطعام داخل المطعم",about_f2:"أهلاً بالعائلات والأصدقاء وحفلات أعياد الميلاد",about_f3:"لا نقدم أي مشروبات كحولية",
halal_h:"ما معنى «حلال»؟",halal_p:"«حلال» كلمة عربية تعني «المباح». في الطعام تعني أنه مطابق لأحكام الشريعة الإسلامية: لا لحم خنزير ولا كحول، وتُحضَّر اللحوم بالطريقة المقررة شرعًا.",
halal_cert_h:"شهادة عضوية المطعم",halal_cert_p:"المطعم عضو في جمعية صناعة الأغذية الحلال بمدينة شينزن.",halal_cert_hint:"اضغط على الشهادة لمشاهدتها بحجم أكبر.",    
nav_gallery:"معرض الصور",gallery_h:"مطعمنا وأطباقنا",search_ph:"ابحث عن طبق…",no_results:"لا توجد أطباق مطابقة.",sig_title:"الأطباق المميزة",sig_goto:"عرض في القائمة",clear_search:"مسح البحث",to_top:"العودة للأعلى",c_tax:"الرقم الضريبي",nav_reviews:"التقييمات",reviews_h:"آراء العملاء",reviews_count:"{n} تقييم",reviews_more:"عرض المزيد من التقييمات",lb_close:"إغلاق",lb_prev:"السابق",lb_next:"التالي",c_phone:"الهاتف",wechat_hint:"امسح الرمز لإضافتنا على ويتشات والحجز",c_addr:"العنوان",addr:"رقم 150-2، طريق تشن شينغ، مجتمع هواهانغ، حي هواكيانغبي، منطقة فوتيان، شنتشن، الصين.",directions:"الاتجاهات (Amap)",pending:"سيُضاف قريبًا",wa_msg:"مرحبًا، أود حجز طاولة."},
tr:{name:"Osmanlı Saray Restoranı",nav_home:"Ana sayfa",nav_menu:"Menü",nav_about:"Hakkımızda",nav_contact:"İletişim",halal_tag:"HELAL",hero_title:"Otantik Helal Türk Mutfağı",hero_sub:"Shenzhen Huaqiangbei · Kebap, mandi pilavı, pide ve geleneksel tatlılar",view_menu:"Menüyü gör",book:"Rezervasyon yap",book_wa:"WhatsApp ile rezervasyon",menu_note:"Fiyatlar Çin Yuanı (CNY) cinsindendir. Fotoğraflar temsilidir.",
about_1:"Türk mutfağı ağırlıklı helal Orta Doğu yemeklerinin yanı sıra Arap, Pakistan ve Hint yemekleri sunan bir helal restoran.",
about_f1:"Restoranda yemek servisi",about_f2:"Aileler, arkadaş grupları ve doğum günü kutlamaları için uygundur",about_f3:"Alkollü içki servis edilmez",
halal_h:"“Helal” ne demek?",halal_p:"“Helal”, Arapçada “izin verilen” anlamına gelir. Yiyecekler için İslami kurallara uygun olması demektir: domuz eti ve alkol içermez, et ise usulüne uygun şekilde hazırlanır.",
halal_cert_h:"Restoran Üyelik Belgesi",halal_cert_p:"Restoran, Shenzhen Helal Gıda Endüstrisi Derneği'nin üyesidir.",halal_cert_hint:"Belgeyi daha büyük görüntülemek için üzerine tıklayın.",
nav_gallery:"Galeri",gallery_h:"Restoran ve yemeklerimiz",search_ph:"Yemek ara…",no_results:"Eşleşen yemek bulunamadı.",sig_title:"İmza Yemekler",sig_goto:"Menüde göster",clear_search:"Aramayı temizle",to_top:"Başa dön",c_tax:"Vergi Numarası",nav_reviews:"Yorumlar",reviews_h:"Müşteri Yorumları",reviews_count:"{n} yorum",reviews_more:"Daha fazla yorum gör",lb_close:"Kapat",lb_prev:"Önceki",lb_next:"Sonraki",c_phone:"Telefon",wechat_hint:"WeChat'ten eklemek ve rezervasyon için QR kodu tarayın",c_addr:"Adres",addr:"Çin, Shenzhen, Futian Bölgesi, Huaqiangbei Alt Bölgesi, Huahang Topluluğu, Zhenxing Yolu No: 150-2.",directions:"Yol tarifi (Amap)",pending:"Yakında eklenecek",wa_msg:"Merhaba, rezervasyon yapmak istiyorum."}
};

// ---- gallery captions (same order as the photos in index.html) ----
const CAPTIONS = [
  {zh:"用餐区",en:"Dining hall",ar:"قاعة الطعام",tr:"Yemek salonu"},
  {zh:"烤肉拼盘",en:"Grilled kebab platter",ar:"طبق كباب مشوي",tr:"Izgara kebap tabağı"},
  {zh:"羊肉曼迪米饭拼盘",en:"Lamb mandi rice tray",ar:"صينية مندي لحم ضأن",tr:"Kuzu etli mandi pilavı tepsisi"},
  {zh:"羊腿曼迪米饭",en:"Mandi rice with lamb shank",ar:"مندي بساق ضأن",tr:"Kuzu incikli mandi pilavı"},
  {zh:"热汤",en:"Soup",ar:"شوربة",tr:"Çorba"},
  {zh:"土耳其沙拉拼盘",en:"Meze platter",ar:"مقبلات تركية مشكّلة",tr:"Karışık meze"},
  {zh:"酥脆虾球",en:"Crispy shrimp balls",ar:"كرات الجمبري المقرمشة",tr:"Çıtır karides topları"},
  {zh:"水果冰淇淋船",en:"Fruit ice cream boat",ar:"قارب الآيس كريم بالفواكه",tr:"Meyveli dondurma gemisi"},
  {zh:"土耳其特色羊肉披萨",en:"Turkish lamb bread",ar:"بيدا تركية باللحم",tr:"Kuzu etli pide"}
];
function applyGalleryText(){
  document.querySelectorAll(".g-item").forEach((b,i)=>{ const t = CAPTIONS[i] ? CAPTIONS[i][lang] : ""; b.setAttribute("aria-label", t); b.querySelector("img").alt = t; });
  const ai = document.querySelector(".about-img"); if(ai) ai.alt = T[lang].nav_about;
}

// ---- customer reviews (data comes from js/reviews.js; the section stays hidden without real data) ----
function renderReviews(){
  const sec = $("#reviews"), t = T[lang];
  const list = (typeof REVIEWS !== "undefined" ? REVIEWS : []).filter(r=>r && Number(r.rating)>=1 && Number(r.rating)<=5 && r.text && Object.values(r.text).some(v=>String(v).trim()));
  const hasUrl = !!CONFIG.reviewsUrl, show = list.length>0 || hasUrl;
  sec.hidden = !show; document.querySelector('#drawer a[href="#reviews"]').hidden = !show;
  const sum = $("#ratingSum");
  if(list.length){
    const avg = list.reduce((a,r)=>a+Number(r.rating),0)/list.length;
    sum.textContent = "★ " + avg.toFixed(1) + " · " + t.reviews_count.replace("{n}", list.length); sum.hidden = false;
  } else sum.hidden = true;
  $("#reviewList").innerHTML = list.map(r=>{
    const lg = [lang,"en","zh","ar","tr"].find(k=>r.text[k] && String(r.text[k]).trim()), n = Math.round(Number(r.rating));
    const meta = [r.name, r.date, r.source].filter(Boolean).map(x=>"<bdi>"+esc(x)+"</bdi>").join(" · ");
    return `<article class="review"><div class="stars" role="img" aria-label="${n} / 5">${"★".repeat(n)}<span class="off">${"★".repeat(5-n)}</span></div><blockquote lang="${lg==="zh"?"zh-CN":lg}" dir="auto">${esc(String(r.text[lg]).trim())}</blockquote>${meta?`<div class="rv-meta">${meta}</div>`:""}</article>`;
  }).join("");
  const a = $("#reviewsLink"); a.hidden = !hasUrl; if(hasUrl) a.href = CONFIG.reviewsUrl;
}

const saved = localStorage.getItem("lang");
let lang = ["zh","en","ar","tr"].includes(saved) ? saved : "zh";
let cat = null;
let query = "";
const $ = s => document.querySelector(s);

const ALL = MENU.flatMap((c,ci)=>c.d.map((d,di)=>({d,ci,di})));
const esc = v => String(v).replace(/[&<>"]/g, ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
const hasSig = () => ALL.some(e=>e.d.signature===true);
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
function updateClear(){ $("#clearSearch").hidden = !$("#search").value; }
function dishCard(e, sig){
  const d = e.d, name = d[lang], sub = lang==="en" ? "" : d.en;
  const desc = d.desc && typeof d.desc[lang]==="string" ? d.desc[lang].trim() : "";
  const pic = d.img
    ? `<div class="pic"><img src="images/${d.img}.webp" alt="${esc(d.en)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.parentNode.className='pic ph';this.src='images/logo.png';this.alt=''"></div>`
    : `<div class="pic ph"><img src="images/logo.png" alt="" loading="lazy"></div>`;
  return `<article class="dish" id="dish-${e.ci}-${e.di}">${pic}<div class="body"><div class="n" title="${esc(name)}">${esc(name)}</div>${sub?`<div class="sub">${esc(sub)}</div>`:""}${desc?`<p class="desc">${esc(desc)}</p>`:""}<div class="p"><span class="cur">¥</span>${d.p}</div>${sig?`<button type="button" class="goto" data-goto="${e.ci}-${e.di}">${T[lang].sig_goto}</button>`:""}</div></article>`;
}
function renderItems(){
  const q = query.trim().toLocaleLowerCase(lang);
  const list = q ? ALL.filter(e=>e.d[lang].toLocaleLowerCase(lang).includes(q))
             : cat==="sig" ? ALL.filter(e=>e.d.signature===true) : ALL.filter(e=>e.ci===cat);
  $("#items").innerHTML = list.map(e=>dishCard(e, !q && cat==="sig")).join("");
  $("#empty").hidden = list.length > 0;
}
function updateTabs(){
  const searching = query.trim() !== "";
  $("#tabs").querySelectorAll("button").forEach(b=>{ const on = !searching && b.dataset.c===String(cat); b.classList.toggle("on", on); b.setAttribute("aria-selected", on); });
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
  const [ci] = id.split("-").map(Number);
  cat = ci; query = ""; $("#search").value = ""; updateClear(); renderItems(); updateTabs(); centerTab();
  const el = document.getElementById("dish-"+id); if(!el) return;
  el.scrollIntoView({behavior: reduced() ? "auto" : "smooth", block:"start"});
  el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); setTimeout(()=>el.classList.remove("flash"), 1900);
}

function contact(){
  const t = T[lang], pend = t.pending;
  const ph = $("#phoneLink"), wa = $("#waLink");
  ph.textContent = CONFIG.phone ? CONFIG.phone.replace(/^\+86(\d{3})(\d{4})(\d{4})$/,"+86 $1 $2 $3") : pend; ph.href = CONFIG.phone ? "tel:"+CONFIG.phone : "#contact";
  wa.textContent = CONFIG.whatsapp ? "+"+CONFIG.whatsapp : pend;
  wa.href = CONFIG.whatsapp ? waLink() : "#contact";
  const wf = $("#waFloat"); wf.href = wa.href; wf.target = CONFIG.whatsapp ? "_blank" : ""; wf.rel = "noopener noreferrer"; wf.setAttribute("aria-label", "WhatsApp");
  const wm = $("#waMini"); wm.href = wa.href; wm.target = CONFIG.whatsapp ? "_blank" : ""; wm.rel = "noopener noreferrer";
  $("#taxNumber").textContent = CONFIG.taxNumber || pend;
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
  renderMenu(); contact(); applyGalleryText(); renderReviews();
}

document.addEventListener("click", e=>{
  const b = e.target.closest("button,a"); if(!b) return;
  if(b.dataset.lang) setLang(b.dataset.lang);
  if(b.dataset.c){ cat = b.dataset.c==="sig" ? "sig" : +b.dataset.c; query = ""; $("#search").value = ""; updateClear(); renderItems(); updateTabs(); centerTab(); }
  if(b.dataset.goto) gotoDish(b.dataset.goto);
  if(b.id==="clearSearch"){ query = ""; $("#search").value = ""; updateClear(); renderItems(); updateTabs(); $("#search").focus(); }
  if(b.id==="toTop") window.scrollTo({top:0, behavior: reduced() ? "auto" : "smooth"});
  if(b.dataset.gi!==undefined) openLb(+b.dataset.gi);
  if(b.dataset.lb) lbAction(b.dataset.lb);
  if(b.id==="burger"){ drawer.classList.contains("open") ? closeNav(true) : openNav(); }
  else if(drawer.classList.contains("open")) closeNav(false);
  if(b.hasAttribute("data-book")){
    if(CONFIG.whatsapp) window.open(waLink(), "_blank", "noopener,noreferrer");
    else { $("#contact").scrollIntoView(); pulse(); }
  }
});
// ---- header: live height, scroll effect, side menu ----
const topbar = document.querySelector(".top"), drawer = $("#drawer"), burger = $("#burger"), scrim = $("#scrim");
function syncHeader(){ document.documentElement.style.setProperty("--hh", topbar.offsetHeight + "px"); }
new ResizeObserver(syncHeader).observe(topbar); topbar.addEventListener("transitionend", syncHeader); syncHeader();
const tools = $("#menuTools");
let ticking = false, lastY = window.scrollY;
function onScroll(){
  const y = window.scrollY, dy = y - lastY;
  topbar.classList.toggle("scrolled", y > 24);
  tools.classList.toggle("stuck", tools.getBoundingClientRect().top <= topbar.offsetHeight - 60 + 1);
  if(Math.abs(dy) > 6){                       // search row slides under the header when scrolling down, comes back when scrolling up
    const keep = $("#search").value.trim() !== "" || document.activeElement === $("#search");
    tools.classList.toggle("showsearch", dy < 0 || keep); lastY = y;
  }
  ticking = false;
}
window.addEventListener("scroll", ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, {passive:true});
onScroll();
function openNav(){ drawer.classList.add("open"); scrim.classList.add("show"); burger.setAttribute("aria-expanded","true"); document.body.classList.add("nav-open"); drawer.querySelector("a").focus(); }
function closeNav(restore){ drawer.classList.remove("open"); scrim.classList.remove("show"); burger.setAttribute("aria-expanded","false"); document.body.classList.remove("nav-open"); if(restore) burger.focus(); }
scrim.addEventListener("click", ()=>closeNav(true));
document.addEventListener("keydown", e=>{
  if(!drawer.classList.contains("open")) return;
  if(e.key==="Escape"){ e.preventDefault(); closeNav(true); return; }
  if(e.key==="Tab"){            // keep keyboard focus inside the open menu: [menu button + links]
    const it = [burger, ...drawer.querySelectorAll("a:not([hidden])")], i = it.indexOf(document.activeElement);
    e.preventDefault();
    it[i < 0 ? (e.shiftKey ? it.length-1 : 0) : (i + (e.shiftKey ? -1 : 1) + it.length) % it.length].focus();
  }
});
// highlight the section being viewed
const navLinks = [...drawer.querySelectorAll("a")];
let inHome = false, inMenu = false;
// The floating WhatsApp button never covers anything: it is hidden over the hero and the menu (the menu bar has its own WhatsApp button),
// and everywhere else it fades out while it would sit on top of text or a button, then comes back in the free gaps.
const FLOAT_AVOID = "main p, main h2, main h3, main li, main blockquote, main .rv-meta, main .btn, main .card a, footer";
function floatCovers(){
  const f = $("#waFloat"), cs = getComputedStyle(f), pad = 6;
  const R = document.documentElement.clientWidth - parseFloat(cs.right) + pad, L = R - f.offsetWidth - 2*pad;
  const B = innerHeight - parseFloat(cs.bottom) + pad, T = B - f.offsetHeight - 2*pad, rg = document.createRange();
  for(const el of document.querySelectorAll(FLOAT_AVOID)){
    if(el.closest("[hidden]")) continue;
    const box = el.getBoundingClientRect(); if(box.bottom < T || box.top > B) continue;
    let rects; if(el.matches(".btn")) rects = [box]; else { rg.selectNodeContents(el); rects = [...rg.getClientRects()]; }
    if(rects.some(r=>r.width > 1 && r.height > 1 && r.right > L && r.left < R && r.bottom > T && r.top < B)) return true;
  }
  return false;
}
function floatState(){ $("#waFloat").classList.toggle("hide", inHome || inMenu || floatCovers()); }
new IntersectionObserver(es=>{ inMenu = es[0].isIntersecting; floatState(); }).observe($("#menu"));
const spy = new IntersectionObserver(es=>es.forEach(en=>{
  if(!en.isIntersecting) return;
  inHome = en.target.id==="home"; floatState();
  navLinks.forEach(a=>{ const on = a.getAttribute("href")==="#"+en.target.id; a.classList.toggle("active", on); on ? a.setAttribute("aria-current","location") : a.removeAttribute("aria-current"); });
}), {rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main > section").forEach(sec=>spy.observe(sec));
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
});

setLang(lang);
floatState(); addEventListener("load", floatState);
