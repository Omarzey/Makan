// ====== EDIT THESE when the restaurant confirms the details ======
const CONFIG = {
  phone: "",      // example: "+8675512345678"  (leave "" until confirmed)
  whatsapp: "",   // digits only with country code, example: "8613812345678"
  email: "",      // example: "info@example.com"
  address: "深圳市福田区华强北街道华航社区振兴路150-2", // from the menu PDF, to be confirmed
  city: "深圳"
};
// =================================================================

const T = {
zh:{name:"奥斯曼土耳其餐厅",nav_home:"首页",nav_menu:"菜单",nav_about:"关于我们",nav_contact:"联系我们",halal_tag:"清真 HALAL",hero_title:"地道土耳其清真美食",hero_sub:"深圳华强北 · 烤肉、曼迪饭、披萨与传统甜点",view_menu:"查看菜单",book:"预订座位",book_wa:"通过 WhatsApp 预订",menu_note:"价格单位：人民币（元）。图片仅供参考，以实物为准。",
about_1:"奥斯曼土耳其餐厅位于深圳福田区华强北，提供以土耳其为主的中东风味清真菜，也有阿拉伯、巴基斯坦和印度风味的菜品。",
about_2:"我们提供堂食，菜品包括炭火烤肉、沙威玛、曼迪饭、披萨、前菜、甜点和鲜榨果汁，也欢迎家庭聚餐、朋友聚会和生日活动。餐厅不提供任何酒类饮品。",
halal_h:"什么是“清真 / Halal”？",halal_p:"“Halal”是阿拉伯语，意思是“被允许的”。在饮食上，指符合伊斯兰教规的食物：不含猪肉，不含酒精，肉类需按规定方式屠宰。",
c_phone:"电话",c_addr:"地址",directions:"高德地图导航",pending:"待确认",wa_msg:"您好，我想预订座位。"},
en:{name:"Ottoman Palace Restaurant",nav_home:"Home",nav_menu:"Menu",nav_about:"About us",nav_contact:"Contact",halal_tag:"HALAL",hero_title:"Authentic Halal Turkish Food",hero_sub:"Huaqiangbei, Shenzhen · Kebabs, mandi rice, pizza and traditional desserts",view_menu:"View menu",book:"Book a table",book_wa:"Book via WhatsApp",menu_note:"Prices are in Chinese Yuan (CNY). Photos are for reference only.",
about_1:"Ottoman Palace Restaurant is in Huaqiangbei, Futian District, Shenzhen. We serve halal Middle Eastern food with a Turkish focus, plus Arabic, Pakistani and Indian dishes.",
about_2:"We offer dine-in service with charcoal grills, shawarma, mandi rice, pizza, starters, desserts and fresh juices. Families, friends and birthday groups are welcome. No alcohol is served.",
halal_h:"What does “Halal” mean?",halal_p:"“Halal” is Arabic for “permitted”. For food, it means meeting Islamic dietary rules: no pork, no alcohol, and meat prepared in the prescribed way.",
c_phone:"Phone",c_addr:"Address",directions:"Directions (Amap)",pending:"To be confirmed",wa_msg:"Hello, I would like to book a table."},
ar:{name:"مطعم القصر العثماني التركي",nav_home:"الرئيسية",nav_menu:"قائمة الطعام",nav_about:"من نحن",nav_contact:"تواصل معنا",halal_tag:"حلال HALAL",hero_title:"مأكولات تركية حلال أصيلة",hero_sub:"هواكيانغبي، شنتشن · مشاوي وأرز مندي وبيتزا وحلويات تقليدية",view_menu:"عرض القائمة",book:"احجز طاولة",book_wa:"احجز عبر واتساب",menu_note:"الأسعار باليوان الصيني (CNY). الصور للتوضيح فقط.",
about_1:"يقع مطعم القصر العثماني التركي في حي هواكيانغبي بمنطقة فوتيان في شنتشن. نقدم أطباقًا حلالًا من الشرق الأوسط بطابع تركي، إضافة إلى أطباق عربية وباكستانية وهندية.",
about_2:"نقدم الطعام داخل المطعم: مشاوي على الفحم وشاورما وأرز مندي وبيتزا ومقبلات وحلويات وعصائر طازجة. أهلاً بالعائلات والأصدقاء وحفلات أعياد الميلاد. لا نقدم أي مشروبات كحولية.",
halal_h:"ما معنى «حلال»؟",halal_p:"«حلال» كلمة عربية تعني «المباح». في الطعام تعني أنه مطابق لأحكام الشريعة الإسلامية: لا لحم خنزير ولا كحول، وتُحضَّر اللحوم بالطريقة المقررة شرعًا.",
c_phone:"الهاتف",c_addr:"العنوان",directions:"الاتجاهات (Amap)",pending:"سيُضاف قريبًا",wa_msg:"مرحبًا، أود حجز طاولة."}
};

const saved = localStorage.getItem("lang");
let lang = ["zh","en","ar"].includes(saved) ? saved : "zh";
let cat = 0;
const $ = s => document.querySelector(s);

function renderMenu(){
  $("#tabs").innerHTML = MENU.map((c,i)=>`<button class="${i===cat?"on":""}" data-c="${i}">${c.n[lang]}</button>`).join("");
  $("#items").innerHTML = MENU[cat].d.map(([zh,en,ar,p,img])=>{
    const main = {zh,en,ar}[lang], sub = lang==="en" ? "" : en;
    return `<div class="item">${img?`<img src="images/${img}.webp" alt="${en}" loading="lazy">`:""}<div class="n">${main}${sub?`<small>${sub}</small>`:""}</div><div class="p">¥${p}</div></div>`;
  }).join("");
}

function contact(){
  const t = T[lang], pend = t.pending;
  const ph = $("#phoneLink"), wa = $("#waLink"), ml = $("#mailLink");
  ph.textContent = CONFIG.phone || pend; ph.href = CONFIG.phone ? "tel:"+CONFIG.phone : "#contact";
  wa.textContent = CONFIG.whatsapp ? "+"+CONFIG.whatsapp : pend;
  wa.href = CONFIG.whatsapp ? waLink() : "#contact";
  ml.textContent = CONFIG.email || pend; ml.href = CONFIG.email ? "mailto:"+CONFIG.email : "#contact";
  $("#addr").textContent = CONFIG.address;
  $("#mapLink").href = "https://uri.amap.com/search?keyword="+encodeURIComponent(CONFIG.address)+"&city="+encodeURIComponent(CONFIG.city);
}
const waLink = () => "https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(T[lang].wa_msg);

function setLang(l){
  lang = l; localStorage.setItem("lang", l);
  document.documentElement.lang = l==="zh" ? "zh-CN" : l;
  document.documentElement.dir = l==="ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(e=>{ const v=T[l][e.dataset.i18n]; if(v) e.textContent=v; });
  document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("on", b.dataset.lang===l));
  document.title = T[l].name;
  renderMenu(); contact();
}

document.addEventListener("click", e=>{
  const b = e.target.closest("button,a"); if(!b) return;
  if(b.dataset.lang) setLang(b.dataset.lang);
  if(b.dataset.c){ cat = +b.dataset.c; renderMenu(); }
  if(b.id==="burger") $("#drawer").classList.toggle("open");
  else $("#drawer").classList.remove("open");
  if(b.hasAttribute("data-book")){
    if(CONFIG.whatsapp) window.open(waLink(), "_blank");
    else $("#contact").scrollIntoView();
  }
});
setLang(lang);
