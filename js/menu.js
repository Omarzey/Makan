// Menu data. One object per dish: zh / en / ar / tr names, p = price in CNY, img = optional photo file name (without .webp).
// To add a dish: copy one line and edit it. Prices come from the restaurant's menu PDF.
const MENU = [
{n:{"zh":"沙拉","en":"Salads","ar":"سلطات","tr":"Salatalar"},d:[
 {"zh":"塔博勒沙拉","en":"Tabbouleh","ar":"تبولة","tr":"Tabule","p":32},
 {"zh":"金枪鱼沙拉","en":"Tuna Salad","ar":"سلطة التونة","tr":"Ton Balıklı Salata","p":35},
 {"zh":"奥斯曼沙拉","en":"Ottoman Salad","ar":"السلطة العثمانية","tr":"Osmanlı Salatası","p":32}]},
{n:{"zh":"汤品","en":"Soups","ar":"شوربات","tr":"Çorbalar"},d:[
 {"zh":"蘑菇汤","en":"Mushroom Soup","ar":"شوربة الفطر","tr":"Mantar Çorbası","p":26,"img":"mushroom"},
 {"zh":"小扁豆汤","en":"Lentil Soup","ar":"شوربة العدس","tr":"Mercimek Çorbası","p":24},
 {"zh":"南瓜汤","en":"Pumpkin Soup","ar":"شوربة القرع","tr":"Balkabağı Çorbası","p":28}]},
{n:{"zh":"面包","en":"Breads","ar":"خبز","tr":"Ekmekler"},d:[
 {"zh":"芝士烤饼","en":"Cheese Naan","ar":"نان بالجبن","tr":"Peynirli Nan","p":25},
 {"zh":"蒜香烤饼","en":"Garlic Naan","ar":"نان بالثوم","tr":"Sarımsaklı Nan","p":18},
 {"zh":"土耳其皮塔面包","en":"Turkish Pita Bread","ar":"خبز بيتا تركي","tr":"Pide Ekmeği","p":16}]},
{n:{"zh":"鹰嘴豆泥与酸奶","en":"Hummus & Yogurt","ar":"حمص ولبن","tr":"Humus ve Yoğurt"},d:[
 {"zh":"鹰嘴豆泥","en":"Hummus","ar":"حمص","tr":"Humus","p":32},
 {"zh":"土耳其沙拉拼盘","en":"Karisik Meze","ar":"مقبلات تركية مشكّلة","tr":"Karışık Meze","p":65,"img":"meze"},
 {"zh":"阿拉伯酸奶","en":"Labne","ar":"لبنة","tr":"Labne","p":25,"img":"labne"}]},
{n:{"zh":"前菜","en":"Appetizers","ar":"مقبلات","tr":"Mezeler"},d:[
 {"zh":"炸鹰嘴豆球","en":"Falafel","ar":"فلافل","tr":"Falafel","p":36},
 {"zh":"酥脆虾球","en":"Crispy Shrimp Balls","ar":"كرات الجمبري المقرمشة","tr":"Çıtır Karides Topları","p":39,"img":"shrimp"},
 {"zh":"新鲜薯条","en":"Fresh Fries","ar":"بطاطس مقلية طازجة","tr":"Taze Patates Kızartması","p":25}]},
{n:{"zh":"沙威玛","en":"Shawarma","ar":"شاورما","tr":"Şavurma"},d:[
 {"zh":"牛肉烤肉卷","en":"Beef Shawarma Wrap","ar":"ساندويتش شاورما لحم","tr":"Dana Şavurma Dürüm","p":58,"img":"wrap"},
 {"zh":"鸡肉烤肉卷","en":"Chicken Kebab Wrap","ar":"ساندويتش كباب دجاج","tr":"Tavuk Kebap Dürüm","p":58},
 {"zh":"沙威玛牛肉拼盘（配混合沙拉）","en":"Beef Shawarma Plate with Mixed Salad","ar":"طبق شاورما لحم مع سلطة مشكّلة","tr":"Karışık Salatalı Dana Şavurma Tabağı","p":62}]},
{n:{"zh":"烧烤","en":"BBQ","ar":"مشاوي","tr":"Izgara"},d:[
 {"zh":"炭火烤羊肉","en":"Lamb Kebab","ar":"كباب لحم ضأن","tr":"Kuzu Kebap","p":75},
 {"zh":"炭火烤鸡肉","en":"Chicken Kebab","ar":"كباب دجاج","tr":"Tavuk Kebap","p":58},
 {"zh":"土耳其羊排","en":"Turkish Lamb Chops","ar":"ريش ضأن تركية","tr":"Türk Usulü Kuzu Pirzola","p":88},
 {"zh":"土耳其烟火烤肉拼盘","en":"Single Grill Platter","ar":"طبق مشاوي تركي","tr":"Türk Izgara Tabağı","p":148}]},
{n:{"zh":"热菜","en":"Main Courses","ar":"أطباق رئيسية","tr":"Ana Yemekler"},d:[
 {"zh":"黄油鸡","en":"Butter Chicken","ar":"دجاج بالزبدة","tr":"Tereyağlı Tavuk","p":65},
 {"zh":"羊肉科尔马咖喱","en":"Mutton Korma","ar":"كورما لحم ضأن","tr":"Koyun Eti Korma","p":72},
 {"zh":"鸡肉库斯库斯","en":"Chicken Couscous","ar":"كسكس بالدجاج","tr":"Tavuklu Kuskus","p":78},
 {"zh":"北非蛋","en":"Shakshuka","ar":"شكشوكة","tr":"Şakşuka","p":56}]},
{n:{"zh":"米饭","en":"Rice","ar":"أرز","tr":"Pilavlar"},d:[
 {"zh":"羊肉曼迪米饭（全份）","en":"Mutton Mandi Rice (Full)","ar":"مندي لحم ضأن (كامل)","tr":"Koyun Etli Mandi Pilavı (Tam)","p":145,"img":"mandi1"},
 {"zh":"鸡肉曼迪米饭（半份）","en":"Chicken Mandi Rice (Half)","ar":"مندي دجاج (نصف)","tr":"Tavuklu Mandi Pilavı (Yarım)","p":65},
 {"zh":"卡布萨半鸡配米饭","en":"Kabsa Chicken (Half) with Rice","ar":"كبسة نصف دجاجة مع الأرز","tr":"Kabsa Pilavlı Yarım Tavuk","p":68},
 {"zh":"白米饭","en":"White Rice","ar":"أرز أبيض","tr":"Beyaz Pilav","p":15}]},
{n:{"zh":"披萨","en":"Pizza & Pide","ar":"بيتزا وبيدا","tr":"Pizza ve Pide"},d:[
 {"zh":"土耳其特色羊肉披萨","en":"Turkish Lamb Pizza (Pide)","ar":"بيدا تركية باللحم","tr":"Kuzu Etli Pide","p":38,"img":"pide"},
 {"zh":"奶酪披萨","en":"Cheese Pizza","ar":"بيتزا بالجبن","tr":"Peynirli Pizza","p":58},
 {"zh":"玛格丽披萨","en":"Margherita Pizza","ar":"بيتزا مارغريتا","tr":"Margherita Pizza","p":42}]},
{n:{"zh":"甜品","en":"Desserts","ar":"حلويات","tr":"Tatlılar"},d:[
 {"zh":"土耳其千层酥","en":"Baklava","ar":"بقلاوة","tr":"Baklava","p":25},
 {"zh":"库纳法","en":"Kunafa","ar":"كنافة","tr":"Künefe","p":42},
 {"zh":"冰淇淋米饭布丁","en":"Rice Pudding with Ice Cream","ar":"أرز بالحليب مع الآيس كريم","tr":"Dondurmalı Sütlaç","p":38,"img":"pudding"},
 {"zh":"水果冰淇淋船","en":"Ice Cream Boat","ar":"قارب الآيس كريم بالفواكه","tr":"Meyveli Dondurma Gemisi","p":38,"img":"icecream"}]},
{n:{"zh":"饮品","en":"Drinks","ar":"مشروبات","tr":"İçecekler"},d:[
 {"zh":"土耳其传统咖啡","en":"Turkish Traditional Coffee","ar":"قهوة تركية تقليدية","tr":"Geleneksel Türk Kahvesi","p":22},
 {"zh":"土耳其茶（一壶）","en":"Turkish Tea (One Pot)","ar":"شاي تركي (إبريق)","tr":"Türk Çayı (Demlik)","p":22},
 {"zh":"鲜榨石榴汁","en":"Fresh Pomegranate Juice","ar":"عصير رمان طازج","tr":"Taze Nar Suyu","p":35},
 {"zh":"玛萨拉茶","en":"Masala Tea","ar":"شاي مسالا","tr":"Masala Çayı","p":15}]}
];
