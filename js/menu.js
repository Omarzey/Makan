// Menu data. One object per dish: zh / en / ar / tr names, p = price in CNY, img = optional photo file name (without .webp, inside images/).
// To add a dish: copy one line and edit it. Prices come from the restaurant's menu PDF. Dishes without img show a logo placeholder.
// Optional per-dish fields (leave them out when not needed):
//   signature: true                              -> the dish also appears in the "Signature Dishes" tab (the tab is hidden while no dish has it)
//   desc: {zh:"", en:"", ar:"", tr:""}           -> short description shown on the card; empty or missing = nothing is shown
//   Example: {"zh":"...","en":"...","ar":"...","tr":"...","p":38,"img":"pide","signature":true,"desc":{"zh":"...","en":"...","ar":"...","tr":"..."}}
const MENU = [
{n:{"zh": "沙拉", "en": "Salads", "ar": "سلطات", "tr": "Salatalar"},d:[
 {"zh": "塔博勒沙拉", "en": "Tabbouleh", "ar": "تبولة", "tr": "Tabule", "p": 32, "img": "m-2-24"},
 {"zh": "金枪鱼沙拉", "en": "Tuna Salad", "ar": "سلطة التونة", "tr": "Ton Balıklı Salata", "p": 35, "img": "m-2-28"},
 {"zh": "奥斯曼沙拉", "en": "Ottoman Salad", "ar": "السلطة العثمانية", "tr": "Osmanlı Salatası", "p": 32, "img": "m-2-26"},
 {"zh": "水果蔬菜沙拉", "en": "Mixed Fruit and Vegetable Salad", "ar": "سلطة الفواكه والخضروات المشكّلة", "tr": "Karışık Meyve ve Sebze Salatası", "p": 34, "img": "m-2-30"},
 {"zh": "甜玉米沙拉", "en": "Corn Salad", "ar": "سلطة الذرة الحلوة", "tr": "Tatlı Mısır Salatası", "p": 28, "img": "m-2-29"},
 {"zh": "俄罗斯沙拉", "en": "Russian Salad", "ar": "السلطة الروسية", "tr": "Rus Salatası", "p": 34}]},
{n:{"zh": "汤品", "en": "Soups", "ar": "شوربات", "tr": "Çorbalar"},d:[
 {"zh": "蘑菇汤", "en": "Mushroom Soup", "ar": "شوربة الفطر", "tr": "Mantar Çorbası", "p": 26, "img": "mushroom"},
 {"zh": "酸辣汤", "en": "Hot and Sour Soup", "ar": "شوربة حارة وحامضة", "tr": "Ekşi Acı Çorba", "p": 28, "img": "m-3-43"},
 {"zh": "意大利虾仁蔬菜汤", "en": "Italian Shrimp and Vegetable Soup", "ar": "شوربة الجمبري والخضروات الإيطالية", "tr": "İtalyan Usulü Karidesli Sebze Çorbası", "p": 38, "img": "m-3-47"},
 {"zh": "小扁豆汤", "en": "Lentil Soup", "ar": "شوربة العدس", "tr": "Mercimek Çorbası", "p": 24, "img": "m-3-45"},
 {"zh": "南瓜汤", "en": "Pumpkin Soup", "ar": "شوربة القرع", "tr": "Balkabağı Çorbası", "p": 28, "img": "m-3-46"}]},
{n:{"zh": "面包", "en": "Breads", "ar": "خبز", "tr": "Ekmekler"},d:[
