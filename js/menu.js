//   desc: {zh:"", en:"", ar:"", tr:""}           -> short description shown on the card; empty or missing = nothing is shown


//   Example: {"zh":"...","en":"...","ar":"...","tr":"...","p":38,"img":"pide","signature":true,"desc":{"zh":"...","en":"...","ar":"...","tr":"..."}}

const MENU = [


{n:{"zh":"沙拉","en":"Salads","ar":"سلطات","tr":"Salatalar"},d:[


 {"zh":"塔博勒沙拉","en":"Tabbouleh","ar":"تبولة","tr":"Tabule","p":32,"img":"m-2-24"},


 {"zh":"金枪鱼沙拉","en":"Tuna Salad","ar":"سلطة التونة","tr":"Ton Balıklı Salata","p":35,"img":"m-2-28"},


 {"zh":"奥斯曼沙拉","en":"Ottoman Salad","ar":"السلطة العثمانية","tr":"Osmanlı Salatası","p":32,"img":"m-2-26"},


 {"zh":"水果蔬菜沙拉","en":"Mixed Fruit and Vegetable Salad","ar":"سلطة الفواكه والخضروات المشكّلة","tr":"Karışık Meyve ve Sebze Salatası","p":34,"img":"m-2-30"},


 {"zh":"甜玉米沙拉","en":"Corn Salad","ar":"سلطة الذرة الحلوة","tr":"Tatlı Mısır Salatası","p":28,"img":"m-2-29"},


 {"zh":"俄罗斯沙拉","en":"Russian Salad","ar":"السلطة الروسية","tr":"Rus Salatası","p":34}]},


{n:{"zh":"汤品","en":"Soups","ar":"شوربات","tr":"Çorbalar"},d:[


 {"zh":"蘑菇汤","en":"Mushroom Soup","ar":"شوربة الفطر","tr":"Mantar Çorbası","p":26,"img":"mushroom"},


 {"zh":"酸辣汤","en":"Hot and Sour Soup","ar":"شوربة حارة وحامضة","tr":"Ekşi Acı Çorba","p":28,"img":"m-3-43"},


 {"zh":"意大利虾仁蔬菜汤","en":"Italian Shrimp and Vegetable Soup","ar":"شوربة الجمبري والخضروات الإيطالية","tr":"İtalyan Usulü Karidesli Sebze Çorbası","p":38,"img":"m-3-47"},


 {"zh":"小扁豆汤","en":"Lentil Soup","ar":"شوربة العدس","tr":"Mercimek Çorbası","p":24,"img":"m-3-45"},


 {"zh":"南瓜汤","en":"Pumpkin Soup","ar":"شوربة القرع","tr":"Balkabağı Çorbası","p":28,"img":"m-3-46"}]},


{n:{"zh":"面包","en":"Breads","ar":"خبز","tr":"Ekmekler"},d:[


 {"zh":"芝士烤饼","en":"Cheese Naan","ar":"نان بالجبن","tr":"Peynirli Naan","p":25,"img":"m-3-48"},


 {"zh":"层叠煎饼","en":"Paratha","ar":"براتا","tr":"Paratha","p":16,"img":"m-3-50"},


 {"zh":"土耳其原味面包","en":"Turkish Plain Bread","ar":"خبز تركي سادة","tr":"Sade Türk Ekmeği","p":10,"img":"m-3-49"},


 {"zh":"蒜香烤饼","en":"Garlic Naan","ar":"نان بالثوم","tr":"Sarımsaklı Naan","p":18,"img":"m-3-53"},


 {"zh":"土耳其皮塔面包","en":"Turkish Pita Bread","ar":"خبز بيتا تركي","tr":"Pide Ekmeği","p":16},


 {"zh":"纯烤饼","en":"Plain Naan","ar":"نان سادة","tr":"Sade Naan","p":16}]},


{n:{"zh":"鹰嘴豆泥与酸奶","en":"Hummus & Yogurt","ar":"حمص ولبن","tr":"Humus ve Yoğurt"},d:[


 {"zh":"土耳其沙拉拼盘","en":"Mixed Turkish Meze","ar":"مقبلات تركية مشكّلة","tr":"Karışık Meze","p":65,"img":"meze"},


 {"zh":"鹰嘴豆泥","en":"Hummus","ar":"حمص","tr":"Humus","p":32},


 {"zh":"贝鲁特鹰嘴豆泥","en":"Hummus Beiruti","ar":"حمص بيروتي","tr":"Beyrut Usulü Humus","p":32,"img":"m-4-81"},


 {"zh":"羊肉鹰嘴豆泥","en":"Hummus with Meat","ar":"حمص باللحم","tr":"Etli Humus","p":46},


 {"zh":"巴巴甘奴士茄子酸奶沙拉","en":"Baba Ghanoush","ar":"بابا غنوج","tr":"Baba Gannuş","p":28},


 {"zh":"穆罕默拉色拉","en":"Muhammara","ar":"محمرة","tr":"Muhammara","p":32},


 {"zh":"绿橄榄","en":"Green Olives","ar":"زيتون أخضر","tr":"Yeşil Zeytin","p":34,"img":"m-4-85"},


 {"zh":"酸黄瓜","en":"Pickled Cucumbers","ar":"مخلل الخيار","tr":"Salatalık Turşusu","p":31,"img":"m-4-82"},


 {"zh":"爱滋美","en":"Ezme","ar":"إزمة","tr":"Ezme","p":26,"img":"m-4-83"},


 {"zh":"绿森林薄荷酸奶","en":"Yogurt Mint Raita","ar":"رايتا اللبن بالنعناع","tr":"Naneli Yoğurt Raita","p":25,"img":"m-5-99"},


 {"zh":"阿拉伯酸奶","en":"Labne","ar":"لبنة","tr":"Labne","p":25,"img":"labne"},


 {"zh":"酸奶黄瓜沙拉","en":"Cucumber Salad","ar":"سلطة الخيار باللبن","tr":"Cacık","p":28,"img":"m-5-104"},


 {"zh":"酸奶（甜/咸）","en":"Sweet / Sour Yogurt","ar":"لبن (حلو / مالح)","tr":"Yoğurt (Tatlı / Tuzlu)","p":25}]},


{n:{"zh":"前菜","en":"Appetizers","ar":"مقبلات","tr":"Mezeler"},d:[


 {"zh":"炸鹰嘴豆球","en":"Falafel","ar":"فلافل","tr":"Falafel","p":36,"img":"m-5-105"},


 {"zh":"蜜汁鸡棒","en":"Honey Glazed Chicken Sticks","ar":"أصابع دجاج بالعسل","tr":"Ballı Tavuk Çubukları","p":65,"img":"m-5-106"},


 {"zh":"鱼和薯条","en":"Fish and Fries","ar":"سمك وبطاطس مقلية","tr":"Balık ve Patates Kızartması","p":75,"img":"m-6-119"},


 {"zh":"酥脆虾球","en":"Crispy Shrimp Balls","ar":"كرات الجمبري المقرمشة","tr":"Çıtır Karides Topları","p":39,"img":"shrimp"},


 {"zh":"新鲜薯条","en":"Fresh Fries","ar":"بطاطس مقلية طازجة","tr":"Taze Patates Kızartması","p":25,"img":"m-6-120"},


 {"zh":"炸鸡排","en":"Fried Chicken Sticks","ar":"أصابع دجاج مقلية","tr":"Kızarmış Tavuk Çubukları","p":58,"img":"m-6-121"},


 {"zh":"芝士鸡肉丸","en":"Cheese Chicken Meatballs","ar":"كرات اللحم بالجبن","tr":"Peynirli Tavuk Köftesi","p":58,"img":"m-6-122"},


 {"zh":"奶酪卷三宝沙","en":"Fried Cheese Rolls","ar":"رولات الجبن المقلية","tr":"Kızarmış Peynir Rulosu","p":42,"img":"m-6-124"},


 {"zh":"香煎三文鱼排","en":"Pan-Seared Salmon Steak","ar":"ستيك سلمون مقلي بالمقلاة","tr":"Tavada Somon Biftek","p":42,"img":"m-6-125"},


 {"zh":"鸡块","en":"Chicken Nuggets","ar":"ناجتس الدجاج","tr":"Tavuk Nugget","p":32,"img":"m-6-126"}]},


{n:{"zh":"沙威玛","en":"Shawarma","ar":"شاورما","tr":"Şavurma"},d:[


 {"zh":"鸡肉多纳配薯条","en":"Chicken Döner with Fries","ar":"دونر دجاج مع البطاطس","tr":"Patatesli Tavuk Döner","p":68},


 {"zh":"阿达纳土耳其烤肉卷","en":"Adana Kebab Wrap","ar":"لفافة كباب أضنة","tr":"Adana Kebap Dürüm","p":58},


 {"zh":"鸡肉多纳配米饭","en":"Chicken Doner Rice","ar":"دونر دجاج مع الأرز","tr":"Pilav Üstü Tavuk Döner","p":68},


 {"zh":"鸡肉烤肉卷","en":"Chicken Kebab Wrap","ar":"ساندويتش كباب دجاج","tr":"Tavuk Kebap Dürüm","p":58,"img":"m-7-140"},


 {"zh":"沙威玛牛肉拼盘（配混合沙拉）","en":"Beef Shawarma Plate with Mixed Salad","ar":"طبق شاورما لحم مع سلطة مشكّلة","tr":"Karışık Salatalı Dana Şavurma Tabağı","p":62,"img":"m-7-142"},


 {"zh":"牛肉烤肉卷","en":"Beef Shawarma Wrap","ar":"ساندويتش شاورما لحم","tr":"Dana Şavurma Dürüm","p":58,"img":"wrap"}]},


{n:{"zh":"烧烤","en":"BBQ","ar":"مشاوي","tr":"Izgara"},d:[


 {"zh":"碳烤超大拼盘","en":"Grand Mixed Grill Platter","ar":"طبق مشاوي مشكلة كبير على الفحم","tr":"Büyük Karışık Izgara Tabağı","p":428,"img":"m-8-159"},


 {"zh":"双人土耳其烟火烤肉拼盘","en":"Perfect Mixed Grill Platter","ar":"طبق مشاوي تركية مشكلة لشخصين","tr":"İki Kişilik Karışık Izgara Tabağı","p":279,"img":"m-8-160"},


 {"zh":"土耳其烟火烤肉拼盘","en":"Single Grill Platter","ar":"طبق مشاوي تركي","tr":"Türk Izgara Tabağı","p":148,"img":"m-8-160"},


 {"zh":"蘑菇牛肉卡巴","en":"Mushroom Kebab","ar":"كباب لحم بالفطر","tr":"Mantarlı Dana Kebap","p":68,"img":"m-8-162"},


 {"zh":"炭烤羊肉","en":"Lamb Kebab","ar":"كباب لحم ضأن","tr":"Kuzu Kebap","p":75,"img":"m-8-158"},


 {"zh":"炭烤鸡肉","en":"Chicken Kebab","ar":"كباب دجاج","tr":"Tavuk Kebap","p":58,"img":"m-9-179"},


 {"zh":"炭烤牛肝","en":"Liver Kebab","ar":"كباب كبدة","tr":"Ciğer Kebap","p":75,"img":"m-9-180"},


 {"zh":"奥斯曼宫廷牛肉卡巴","en":"Adana Ottoman Palace Kebab","ar":"كباب أضنة القصر العثماني","tr":"Osmanlı Saray Adana Kebabı","p":65,"img":"m-9-181"},


 {"zh":"烤牛排","en":"Grilled Beef Steak","ar":"ستيك لحم بقري مشوي","tr":"Izgara Dana Biftek","p":68,"img":"m-9-183"},


 {"zh":"卡布萨烤鸡","en":"Kabsa Chicken","ar":"دجاج كبسة","tr":"Kabsa Tavuk","p":55,"img":"m-9-185"},


 {"zh":"鸡肉哈拉比卡巴","en":"Minced Chicken Kebab","ar":"كباب حلبي بالدجاج","tr":"Tavuk Halep Kebabı","p":62,"img":"m-9-176"},


 {"zh":"土耳其羊排","en":"Turkish Lamb Chops","ar":"ريش ضأن تركية","tr":"Türk Usulü Kuzu Pirzola","p":88,"img":"m-9-182"},


 {"zh":"烤鸡中翅膀","en":"Grilled Chicken Wing","ar":"أجنحة دجاج مشوية","tr":"Izgara Tavuk Kanat","p":52,"img":"m-9-184"},


 {"zh":"烤鱼","en":"Grilled Fish","ar":"سمك مشوي","tr":"Izgara Balık","p":66,"img":"m-9-178"},


 {"zh":"烤鸡腿","en":"Grilled Chicken Leg","ar":"فخذ دجاج مشوي","tr":"Izgara Tavuk But","p":28,"img":"m-9-177"}]},


{n:{"zh":"热菜","en":"Main Courses","ar":"أطباق رئيسية","tr":"Ana Yemekler"},d:[


 {"zh":"黑铁虾","en":"(Black) Iron Shrimps","ar":"جمبري على الحديد الأسود","tr":"Demir Tavada Karides","p":88,"img":"m-10-201"},


 {"zh":"黄油鸡","en":"Butter Chicken","ar":"دجاج بالزبدة","tr":"Tereyağlı Tavuk","p":65},


 {"zh":"羊肉科尔马咖喱","en":"Mutton Korma","ar":"كورما لحم ضأن","tr":"Koyun Eti Korma","p":72},


 {"zh":"牛肉酱意大利面","en":"Spaghetti with Beef Bolognese","ar":"سباغيتي بولونيز باللحم","tr":"Dana Etli Bolonez Spagetti","p":46},


 {"zh":"酸奶牛肉饼咔吧","en":"Minced Beef Kebab with Yogurt","ar":"كباب لحم مفروم باللبن","tr":"Yoğurtlu Köfte Kebabı","p":78,"img":"m-10-207"},


 {"zh":"番茄牛肉意面","en":"Tomato Beef Pasta","ar":"معكرونة باللحم والطماطم","tr":"Domatesli Dana Makarna","p":56},


 {"zh":"鸡肉奶油意面","en":"Creamy Chicken Pasta","ar":"معكرونة بالدجاج والكريمة","tr":"Kremalı Tavuklu Makarna","p":42},


 {"zh":"鸡肉库斯库斯","en":"Chicken Couscous","ar":"كسكس بالدجاج","tr":"Tavuklu Kuskus","p":78,"img":"m-11-223"},


 {"zh":"羊肉库斯库斯","en":"Mutton Couscous","ar":"كسكس بلحم الضأن","tr":"Koyun Etli Kuskus","p":88},


 {"zh":"香烤贝蒂咔吧牛肉","en":"Beef Beyti","ar":"بيتي كباب لحم بقري","tr":"Dana Beyti","p":78},


 {"zh":"香烤贝蒂咔吧鸡肉","en":"Chicken Beyti","ar":"بيتي كباب دجاج","tr":"Tavuk Beyti","p":68},


 {"zh":"虾法萨","en":"Shrimp Fahsa","ar":"فحسة الجمبري","tr":"Karidesli Fahsa","p":58},


 {"zh":"鸡肉法萨","en":"Chicken Fahsa","ar":"فحسة الدجاج","tr":"Tavuklu Fahsa","p":46},


 {"zh":"牛肉法萨","en":"Beef Fahsa","ar":"فحسة اللحم","tr":"Etli Fahsa","p":48},


 {"zh":"奶酪北非蛋","en":"Cheese Shakshuka","ar":"شكشوكة بالجبن","tr":"Peynirli Şakşuka","p":62,"img":"m-11-220"},


 {"zh":"北非蛋","en":"Shakshuka","ar":"شكشوكة","tr":"Şakşuka","p":56},


 {"zh":"土豆芝士炒鸡蛋","en":"Potato & Cheese Scrambled Eggs","ar":"بيض مخفوق بالبطاطس والجبن","tr":"Patatesli Peynirli Karışık Yumurta","p":42,"img":"m-12-261"},


 {"zh":"沙舒卡煎蛋","en":"Shakshuka Eggs","ar":"بيض شكشوكة","tr":"Şakşuka Yumurta","p":38},


 {"zh":"干辣牛肉","en":"Beef Dry Chilli","ar":"لحم بقري بالفلفل الحار الجاف","tr":"Kuru Acılı Dana Eti","p":62},


 {"zh":"马卡尼扁豆","en":"Daal Makhani","ar":"دال مخاني","tr":"Dal Makhani","p":42},


 {"zh":"辣椒炒土豆","en":"Chilli Potato","ar":"بطاطس بالفلفل الحار","tr":"Acılı Patates","p":42},


 {"zh":"紫苏黑头虾","en":"Perilla Blackhead Prawns","ar":"جمبري بالبيريلا","tr":"Perilla Soslu Karides","p":52,"img":"m-12-258"},


 {"zh":"泰式酸辣虾","en":"Thai Tom Yum Prawns","ar":"جمبري توم يم التايلندي","tr":"Tayland Usulü Tom Yum Karides","p":34},


 {"zh":"玛莎拉咖喱鸡（辣）","en":"Chicken Karahi","ar":"دجاج كراهي (حار)","tr":"Tavuk Karahi (Acı)","p":65},


 {"zh":"蒜蓉生菜","en":"Garlic Lettuce","ar":"خس بالثوم","tr":"Sarımsaklı Marul","p":28},


 {"zh":"蒜蓉西兰花","en":"Sauteed Broccoli with Chili","ar":"بروكلي سوتيه بالفلفل الحار","tr":"Acılı Soteli Brokoli","p":35},


 {"zh":"羊肉炖菜","en":"Lamb Goulash","ar":"غولاش لحم ضأن","tr":"Kuzu Yahni","p":88},


 {"zh":"牛肉炖菜","en":"Beef Goulash","ar":"غولاش لحم بقري","tr":"Dana Yahni","p":82},


 {"zh":"土耳其纯牛肉","en":"Beef Kavurma","ar":"قاورما لحم بقري","tr":"Dana Kavurma","p":72},


 {"zh":"土耳其纯羊肉","en":"Mutton Kavurma","ar":"قاورما لحم ضأن","tr":"Koyun Kavurma","p":78},


 {"zh":"土耳其纯鸡肉","en":"Chicken Kavurma","ar":"قاورما دجاج","tr":"Tavuk Kavurma","p":65},


 {"zh":"炒牛肝","en":"Fried Beef Liver","ar":"كبدة بقري مقلية","tr":"Tava Ciğer","p":48},


 {"zh":"奶油炸鸡","en":"Cream Fried Chicken","ar":"دجاج مقلي بالكريمة","tr":"Kremalı Kızarmış Tavuk","p":68,"img":"m-13-276"},


 {"zh":"马萨拉鹰嘴豆","en":"Channa Masala","ar":"شانا مسالا","tr":"Channa Masala","p":48,"img":"m-14-296"},


 {"zh":"咖喱鸡","en":"Chicken Curry","ar":"كاري الدجاج","tr":"Tavuk Köri","p":65},


 {"zh":"咔吧咖喱","en":"Kofta Karahi","ar":"كفتة كراهي","tr":"Köfte Karahi","p":75,"img":"m-14-297"},


 {"zh":"扁豆咖喱","en":"Dal Tadka","ar":"دال تادكا","tr":"Dal Tadka","p":38},


 {"zh":"铁板鸡肉","en":"Chicken Sizzler","ar":"دجاج سيزلر على الصاج","tr":"Sıcak Tavada Tavuk","p":65,"img":"m-14-298"},


 {"zh":"混合蔬菜咖喱","en":"Mixed Vegetable Curry","ar":"كاري الخضروات المشكلة","tr":"Karışık Sebze Köri","p":52,"img":"m-14-295"},


 {"zh":"提卡马萨拉咖喱","en":"Tikka Masala","ar":"تكا مسالا","tr":"Tikka Masala","p":72}]},


{n:{"zh":"米饭","en":"Rice","ar":"أرز","tr":"Pilavlar"},d:[


 {"zh":"奥斯曼招牌乌兹米饭","en":"Ottoman Signature Ouzi Rice","ar":"أوزي العثماني المميز","tr":"Osmanlı Özel Ouzi Pilavı","p":399,"img":"m-15-316"},


 {"zh":"卡布萨半鸡配米饭","en":"Kabsa Chicken (Half) with Rice","ar":"كبسة نصف دجاجة مع الأرز","tr":"Kabsa Pilavlı Yarım Tavuk","p":68,"img":"m-15-319"},


 {"zh":"羊肉曼迪米饭（全份）","en":"Mutton Mandi Rice (Full)","ar":"مندي لحم ضأن (كامل)","tr":"Koyun Etli Mandi Pilavı (Tam)","p":145,"img":"mandi1"},


 {"zh":"洪扎抓饭整鸡","en":"Hunzai Pulao Full Piece","ar":"بلاو هونزا بالدجاجة كاملة","tr":"Hunza Pilavı (Bütün Tavuk)","p":106,"img":"m-15-318"},


 {"zh":"卡拉奇比亚尼饭","en":"Karachi Biryani","ar":"برياني كراتشي","tr":"Karaçi Biryani","p":65,"img":"m-16-340"},


 {"zh":"白米饭","en":"White Rice","ar":"أرز أبيض","tr":"Beyaz Pilav","p":15,"img":"m-16-335"},


 {"zh":"鸡肉曼迪米饭(全份)","en":"Chicken Mandi Rice (Full)","ar":"مندي دجاج (كامل)","tr":"Tavuklu Mandi Pilavı (Tam)","p":106},


 {"zh":"曼迪米饭","en":"Mandi Rice","ar":"أرز مندي","tr":"Mandi Pilavı","p":20,"img":"m-16-333"},


 {"zh":"抓饭","en":"Chinese Traditional Rice","ar":"أرز صيني تقليدي","tr":"Geleneksel Çin Pilavı","p":20,"img":"m-16-336"},


 {"zh":"羊肉曼迪饭(一半)","en":"Mutton Mandi Rice (Half)","ar":"مندي لحم ضأن (نصف)","tr":"Koyun Etli Mandi Pilavı (Yarım)","p":76},


 {"zh":"鸡肉曼迪米饭（半份）","en":"Chicken Mandi Rice (Half)","ar":"مندي دجاج (نصف)","tr":"Tavuklu Mandi Pilavı (Yarım)","p":65,"img":"m-16-334"}]},


{n:{"zh":"披萨","en":"Pizza & Pide","ar":"بيتزا وبيدا","tr":"Pizza ve Pide"},d:[


 {"zh":"奥斯曼特色羊肉鸡肉奶酪披萨","en":"Ottoman Special Lamb, Chicken, Cheese Pizza","ar":"بيتزا عثمانية بالضأن والدجاج والجبن","tr":"Osmanlı Özel Kuzu, Tavuk ve Peynirli Pizza","p":68,"img":"m-17-357"},


 {"zh":"玛格丽披萨","en":"Margherita Pizza","ar":"بيتزا مارغريتا","tr":"Margherita Pizza","p":42},


 {"zh":"奶酪披萨","en":"Cheese Pizza","ar":"بيتزا بالجبن","tr":"Peynirli Pizza","p":58},


 {"zh":"土耳其特色羊肉披萨","en":"Turkish Lamb Pizza (Pide)","ar":"بيدا تركية باللحم","tr":"Kuzu Etli Pide","p":38,"img":"pide"},


 {"zh":"烟熏烤肠披萨","en":"Sausage Pizza","ar":"بيتزا النقانق المدخنة","tr":"Füme Sosisli Pizza","p":46},


 {"zh":"一人份特色奶酪披萨","en":"Labne Cheese Pizza (One Person)","ar":"بيتزا لبنة (فردية)","tr":"Labneli Pizza (Tek Kişilik)","p":25,"img":"m-18-375"},


 {"zh":"特色鸡肉披萨","en":"Special Chicken Pizza","ar":"بيتزا الدجاج الخاصة","tr":"Özel Tavuklu Pizza","p":52,"img":"m-18-378"},


 {"zh":"土耳其纯牛肉芝士披萨","en":"Special Beef Pizza with Cheese","ar":"بيتزا اللحم البقري بالجبن","tr":"Peynirli Özel Dana Pizza","p":58,"img":"m-18-380"},


 {"zh":"一人份拉不特色橄榄披萨","en":"Labne Olives Pizza (One Person)","ar":"بيتزا لبنة بالزيتون (فردية)","tr":"Labneli Zeytinli Pizza (Tek Kişilik)","p":25,"img":"m-18-377"},


 {"zh":"蔬菜披萨","en":"Mix Vegetable Pizza","ar":"بيتزا الخضروات المشكلة","tr":"Karışık Sebzeli Pizza","p":52,"img":"m-18-376"},


 {"zh":"牛肉里脊披萨","en":"Beef Pizza","ar":"بيتزا لحم بقري","tr":"Dana Etli Pizza","p":58,"img":"m-18-379"}]},


{n:{"zh":"甜品","en":"Desserts","ar":"حلويات","tr":"Tatlılar"},d:[


 {"zh":"双球冰淇淋","en":"Two-Scoop Ice Cream","ar":"آيس كريم كرتان","tr":"İki Top Dondurma","p":22,"img":"m-19-407"},


 {"zh":"单球冰淇淋","en":"One-Scoop Ice Cream","ar":"آيس كريم كرة واحدة","tr":"Tek Top Dondurma","p":15,"img":"m-19-393"},


 {"zh":"土耳其千层酥","en":"Baklava","ar":"بقلاوة","tr":"Baklava","p":25,"img":"m-19-397"},


 {"zh":"菜哇妮蛋糕","en":"Basbousa","ar":"بسبوسة","tr":"Revani","p":25,"img":"m-19-394"},


 {"zh":"冰淇淋米饭布丁","en":"Rice Pudding with Ice Cream","ar":"أرز بالحليب مع الآيس كريم","tr":"Dondurmalı Sütlaç","p":38,"img":"pudding"},


 {"zh":"水果冰淇淋船","en":"Ice Cream Boat","ar":"قارب الآيس كريم بالفواكه","tr":"Meyveli Dondurma Gemisi","p":38,"img":"icecream"},


 {"zh":"阿瑞卡甜烙千层","en":"Areeka Fatteh","ar":"فتة العريكة","tr":"Areeka Fatteh","p":46,"img":"m-19-406"},


 {"zh":"米饭布丁","en":"Milk Pudding","ar":"أرز بالحليب","tr":"Sütlaç","p":24},


 {"zh":"甜奶米","en":"Sweet Milk Rice","ar":"أرز بالحليب الحلو","tr":"Tatlı Sütlü Pirinç","p":22,"img":"m-19-398"},


 {"zh":"库纳法","en":"Kunafa","ar":"كنافة","tr":"Künefe","p":42,"img":"m-19-405"}]},


{n:{"zh":"饮品","en":"Drinks","ar":"مشروبات","tr":"İçecekler"},d:[


 {"zh":"菠萝奶昔","en":"Pineapple Milkshake","ar":"ميلك شيك الأناناس","tr":"Ananaslı Milkshake","p":28,"img":"m-19-402"},


 {"zh":"粉红奶茶","en":"Kashmiri Pink Tea","ar":"شاي كشميري وردي","tr":"Keşmir Pembe Çayı","p":22,"img":"m-19-404"},


 {"zh":"矿泉水","en":"Water","ar":"مياه معدنية","tr":"Su","p":5},


 {"zh":"雪碧","en":"Sprite","ar":"سبرايت","tr":"Sprite","p":6},


 {"zh":"玛萨拉茶","en":"Masala Tea","ar":"شاي مسالا","tr":"Masala Çayı","p":15},


 {"zh":"七喜","en":"7UP","ar":"سفن أب","tr":"7UP","p":6},


 {"zh":"百事可乐","en":"Pepsi","ar":"بيبسي كولا","tr":"Pepsi","p":6},


 {"zh":"可口可乐","en":"Coca-Cola","ar":"كوكا كولا","tr":"Coca-Cola","p":6},


 {"zh":"美年达","en":"Mirinda","ar":"ميريندا","tr":"Mirinda","p":6},


 {"zh":"大窑","en":"Dayao","ar":"داياو","tr":"Dayao","p":10},


 {"zh":"柠檬汽水","en":"Lemonade","ar":"ليمونادة","tr":"Limonata","p":15},


 {"zh":"咸酸奶拉西","en":"Salty Yogurt Lassi","ar":"لبن لاسي مالح","tr":"Tuzlu Yoğurt Lassi","p":25},


 {"zh":"甜酸奶拉西","en":"Sweet Yogurt Lassi","ar":"لبن لاسي حلو","tr":"Tatlı Yoğurt Lassi","p":25},


 {"zh":"奥利奥奶昔","en":"Oreo Milkshake","ar":"ميلك شيك أوريو","tr":"Oreo Milkshake","p":25,"img":"m-19-400"},


 {"zh":"草莓奶昔","en":"Strawberry Milkshake","ar":"ميلك شيك الفراولة","tr":"Çilekli Milkshake","p":28,"img":"m-19-403"},


 {"zh":"芒果奶昔","en":"Mango Milkshake","ar":"ميلك شيك المانجو","tr":"Mangolu Milkshake","p":25,"img":"m-19-401"},


 {"zh":"土耳其传统咖啡","en":"Turkish Traditional Coffee","ar":"قهوة تركية تقليدية","tr":"Geleneksel Türk Kahvesi","p":22,"img":"m-20-426"},


 {"zh":"鲜榨石榴汁","en":"Fresh Pomegranate Juice","ar":"عصير رمان طازج","tr":"Taze Nar Suyu","p":35,"img":"m-20-420"},


 {"zh":"鲜榨橙汁","en":"Fresh Orange Juice","ar":"عصير برتقال طازج","tr":"Taze Portakal Suyu","p":26,"img":"m-20-424"},


 {"zh":"奶盖格瓦斯","en":"Kvass with Milk Cream","ar":"كفاس بالقشدة","tr":"Sütlü Kremalı Kvas","p":28,"img":"m-20-423"},


 {"zh":"土耳其茶（一壶）","en":"Turkish Tea (One Pot)","ar":"شاي تركي (إبريق)","tr":"Türk Çayı (Demlik)","p":22,"img":"m-20-429"},


 {"zh":"鲜榨胡萝卜汁","en":"Fresh Carrot Juice","ar":"عصير جزر طازج","tr":"Taze Havuç Suyu","p":26,"img":"m-20-421"},


 {"zh":"鲜榨柠檬汁","en":"Fresh Lemon Juice","ar":"عصير ليمون طازج","tr":"Taze Limon Suyu","p":22,"img":"m-20-425"},


 {"zh":"鲜榨猕猴桃汁","en":"Fresh Kiwi Juice","ar":"عصير كيوي طازج","tr":"Taze Kivi Suyu","p":26,"img":"m-20-427"},


 {"zh":"玫瑰花茶（热）","en":"Rose Tea (Pot)","ar":"شاي الورد (إبريق)","tr":"Gül Çayı (Demlik)","p":32},


 {"zh":"水果茶","en":"Mixed Fruit Drink (Pot)","ar":"شاي الفواكه (إبريق)","tr":"Meyve Çayı (Demlik)","p":42,"img":"m-20-422"},


 {"zh":"混合鲜榨果汁","en":"Fresh Mixed Fruit Juice","ar":"عصير فواكه مشكل طازج","tr":"Taze Karışık Meyve Suyu","p":32,"img":"m-20-428"}]},


{n:{"zh":"水烟","en":"Shisha","ar":"شيشة","tr":"Nargile"},d:[


 {"zh":"薄荷口香糖","en":"Mint Gum Flavor","ar":"نكهة علكة النعناع","tr":"Naneli Sakız Aroması","p":88},


 {"zh":"蓝莓口味","en":"Blueberry Flavor","ar":"نكهة التوت الأزرق","tr":"Yaban Mersini Aroması","p":88},


 {"zh":"苹果味","en":"Apple Flavor","ar":"نكهة التفاح","tr":"Elma Aroması","p":88},


 {"zh":"薄荷味","en":"Mint Flavor","ar":"نكهة النعناع","tr":"Nane Aroması","p":88},


 {"zh":"柠檬味","en":"Lemon Flavor","ar":"نكهة الليمون","tr":"Limon Aroması","p":88},


 {"zh":"Love666","en":"Love666","ar":"لوف 666","tr":"Love666","p":88},


 {"zh":"西瓜味","en":"Watermelon Flavor","ar":"نكهة البطيخ","tr":"Karpuz Aroması","p":88}]}

];
