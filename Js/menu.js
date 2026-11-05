// Menu data. Each dish: [Chinese, English, price in CNY, optional photo file]
// To add a dish: copy one line and edit it. Prices come from the restaurant's menu PDF.
const MENU = [
{n:{zh:"沙拉",en:"Salads",tr:"Salatalar"},d:[
 ["塔博勒沙拉","Tabbouleh",32],["金枪鱼沙拉","Tuna Salad",35],["奥斯曼沙拉","Ottoman Salad",32]]},
{n:{zh:"汤品",en:"Soups",tr:"Çorbalar"},d:[
 ["蘑菇汤","Mushroom Soup",26,"mushroom"],["小扁豆汤","Lentil Soup",24],["南瓜汤","Pumpkin Soup",28]]},
{n:{zh:"面包",en:"Breads",tr:"Ekmekler"},d:[
 ["芝士烤饼","Cheese Naan",25],["蒜香烤饼","Garlic Naan",18],["土耳其皮塔面包","Turkish Pita Bread",16]]},
{n:{zh:"鹰嘴豆泥与酸奶",en:"Hummus & Yogurt",tr:"Humus ve Yoğurt"},d:[
 ["鹰嘴豆泥","Hummus",32],["土耳其沙拉拼盘","Karisik Meze",65,"meze"],["阿拉伯酸奶","Labne",25,"labne"]]},
{n:{zh:"前菜",en:"Appetizers",tr:"Mezeler"},d:[
 ["炸鹰嘴豆球","Falafel",36],["酥脆虾球","Crispy Shrimp Balls",39,"shrimp"],["新鲜薯条","Fresh Fries",25]]},
{n:{zh:"沙威玛",en:"Shawarma",tr:"Şavurma"},d:[
 ["牛肉烤肉卷","Beef Shawarma Wrap",58,"wrap"],["鸡肉烤肉卷","Chicken Kebab Wrap",58],["沙威玛牛肉拼盘（配混合沙拉）","Beef Shawarma Plate with Mixed Salad",62]]},
{n:{zh:"烧烤",en:"BBQ",tr:"Izgara"},d:[
 ["炭火烤羊肉","Lamb Kebab",75],["炭火烤鸡肉","Chicken Kebab",58],["土耳其羊排","Turkish Lamb Chops",88],["土耳其烟火烤肉拼盘","Single Grill Platter",148]]},
{n:{zh:"热菜",en:"Main Courses",tr:"Ana Yemekler"},d:[
 ["黄油鸡","Butter Chicken",65],["羊肉科尔马咖喱","Mutton Korma",72],["鸡肉库斯库斯","Chicken Couscous",78],["北非蛋","Shakshuka",56]]},
{n:{zh:"米饭",en:"Rice",tr:"Pilavlar"},d:[
 ["羊肉曼迪米饭（全份）","Mutton Mandi Rice (Full)",145,"mandi1"],["鸡肉曼迪米饭（半份）","Chicken Mandi Rice (Half)",65],["卡布萨半鸡配米饭","Kabsa Chicken (Half) with Rice",68],["白米饭","White Rice",15]]},
{n:{zh:"披萨",en:"Pizza & Pide",tr:"Pizza ve Pide"},d:[
 ["土耳其特色羊肉披萨","Turkish Lamb Bread (Lahmacun)",38,"pide"],["奶酪披萨","Cheese Pizza",58],["玛格丽披萨","Margherita Pizza",42]]},
{n:{zh:"甜品",en:"Desserts",tr:"Tatlılar"},d:[
 ["土耳其千层酥","Baklava",25],["库纳法","Kunafa",42],["冰淇淋米饭布丁","Rice Pudding with Ice Cream",38,"pudding"],["水果冰淇淋船","Ice Cream Boat",38,"icecream"]]},
{n:{zh:"饮品",en:"Drinks",tr:"İçecekler"},d:[
 ["土耳其传统咖啡","Turkish Traditional Coffee",22],["土耳其茶（一壶）","Turkish Tea (One Pot)",22],["鲜榨石榴汁","Fresh Pomegranate Juice",35],["玛萨拉茶","Masala Tea",15]]}
];
