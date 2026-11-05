// Menu data. Each dish: [Chinese, English, Arabic, price in CNY, optional photo file]
// To add a dish: copy one line and edit it. Prices come from the restaurant's menu PDF.
const MENU = [
{n:{zh:"沙拉",en:"Salads",ar:"سلطات"},d:[
 ["塔博勒沙拉","Tabbouleh","تبولة",32],["金枪鱼沙拉","Tuna Salad","سلطة التونة",35],["奥斯曼沙拉","Ottoman Salad","السلطة العثمانية",32]]},
{n:{zh:"汤品",en:"Soups",ar:"شوربات"},d:[
 ["蘑菇汤","Mushroom Soup","شوربة الفطر",26,"mushroom"],["小扁豆汤","Lentil Soup","شوربة العدس",24],["南瓜汤","Pumpkin Soup","شوربة القرع",28]]},
{n:{zh:"面包",en:"Breads",ar:"خبز"},d:[
 ["芝士烤饼","Cheese Naan","نان بالجبن",25],["蒜香烤饼","Garlic Naan","نان بالثوم",18],["土耳其皮塔面包","Turkish Pita Bread","خبز بيتا تركي",16]]},
{n:{zh:"鹰嘴豆泥与酸奶",en:"Hummus & Yogurt",ar:"حمص ولبن"},d:[
 ["鹰嘴豆泥","Hummus","حمص",32],["土耳其沙拉拼盘","Karisik Meze","مقبلات تركية مشكّلة",65,"meze"],["阿拉伯酸奶","Labne","لبنة",25,"labne"]]},
{n:{zh:"前菜",en:"Appetizers",ar:"مقبلات"},d:[
 ["炸鹰嘴豆球","Falafel","فلافل",36],["酥脆虾球","Crispy Shrimp Balls","كرات الجمبري المقرمشة",39,"shrimp"],["新鲜薯条","Fresh Fries","بطاطس مقلية طازجة",25]]},
{n:{zh:"沙威玛",en:"Shawarma",ar:"شاورما"},d:[
 ["牛肉烤肉卷","Beef Shawarma Wrap","ساندويتش شاورما لحم",58,"wrap"],["鸡肉烤肉卷","Chicken Kebab Wrap","ساندويتش كباب دجاج",58],["沙威玛牛肉拼盘（配混合沙拉）","Beef Shawarma Plate with Mixed Salad","طبق شاورما لحم مع سلطة مشكّلة",62]]},
{n:{zh:"烧烤",en:"BBQ",ar:"مشاوي"},d:[
 ["炭火烤羊肉","Lamb Kebab","كباب لحم ضأن",75],["炭火烤鸡肉","Chicken Kebab","كباب دجاج",58],["土耳其羊排","Turkish Lamb Chops","ريش ضأن تركية",88],["土耳其烟火烤肉拼盘","Single Grill Platter","طبق مشاوي تركي",148]]},
{n:{zh:"热菜",en:"Main Courses",ar:"أطباق رئيسية"},d:[
 ["黄油鸡","Butter Chicken","دجاج بالزبدة",65],["羊肉科尔马咖喱","Mutton Korma","كورما لحم ضأن",72],["鸡肉库斯库斯","Chicken Couscous","كسكس بالدجاج",78],["北非蛋","Shakshuka","شكشوكة",56]]},
{n:{zh:"米饭",en:"Rice",ar:"أرز"},d:[
 ["羊肉曼迪米饭（全份）","Mutton Mandi Rice (Full)","مندي لحم ضأن (كامل)",145,"mandi1"],["鸡肉曼迪米饭（半份）","Chicken Mandi Rice (Half)","مندي دجاج (نصف)",65],["卡布萨半鸡配米饭","Kabsa Chicken (Half) with Rice","كبسة نصف دجاجة مع الأرز",68],["白米饭","White Rice","أرز أبيض",15]]},
{n:{zh:"披萨",en:"Pizza & Pide",ar:"بيتزا وبيدا"},d:[
 ["土耳其特色羊肉披萨","Turkish Lamb Pizza (Pide)","بيدا تركية باللحم",38,"pide"],["奶酪披萨","Cheese Pizza","بيتزا بالجبن",58],["玛格丽披萨","Margherita Pizza","بيتزا مارغريتا",42]]},
{n:{zh:"甜品",en:"Desserts",ar:"حلويات"},d:[
 ["土耳其千层酥","Baklava","بقلاوة",25],["库纳法","Kunafa","كنافة",42],["冰淇淋米饭布丁","Rice Pudding with Ice Cream","أرز بالحليب مع الآيس كريم",38,"pudding"],["水果冰淇淋船","Ice Cream Boat","قارب الآيس كريم بالفواكه",38,"icecream"]]},
{n:{zh:"饮品",en:"Drinks",ar:"مشروبات"},d:[
 ["土耳其传统咖啡","Turkish Traditional Coffee","قهوة تركية تقليدية",22],["土耳其茶（一壶）","Turkish Tea (One Pot)","شاي تركي (إبريق)",22],["鲜榨石榴汁","Fresh Pomegranate Juice","عصير رمان طازج",35],["玛萨拉茶","Masala Tea","شاي مسالا",15]]}
];
