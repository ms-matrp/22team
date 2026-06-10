"use strict";

const ASSETS = "assets/";
const DESCRIPTION = 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> Материал - хлопок 59% / эластан 41% <br> Оверсайз покрой <br> (Принт нанесен методом DTF печати) <br> Стирать при температуре 30 градусов, на изнанку / <br> гладить на изнанку !';



const PRODUCTS = [
  {
    name: 'Кофта "КУЛЬТУРА МОЛОДЁЖИ"',
    price: 3650,
    description: DESCRIPTION,
    sizes: ["S", "M", "L", "XL"],
    gallery: ["sihgray1.jpeg", "sihgray2.jpeg", "sihgray3.jpeg"],
    colors: [
    { name: "Gray",  border: "gray",    images: ["sihgray1.jpeg", "sihgray2.jpeg", "sihgray3.jpeg"] },
      { name: "Brown",  border: "#65452E",    images: ["bk1.jpeg", "bk2.jpeg", "bk3.jpeg"] },
    ],
  },
  {
    name: 'Кофта "КУЛЬТУРА МОЛОДЁЖИ 2" ',
    price: 3650,
    description: DESCRIPTION,
    sizes: ["S", "M", "L", "XL"],
    gallery: ["hoodi_22culture.jpeg", "hoodi_22culture2.jpeg", "hoodi_22culture3.jpeg"],
    colors: [
      { name: "White", border: "white",   images: ["SIH1.jpeg", "SIH2.jpeg", "SIH3.jpeg"] },
      { name: "Black", border: "black",   images: ["hoodi_22culture.jpeg", "hoodi_22culture2.jpeg", "hoodi_22culture3.jpeg"] },
      { name: "Pink",  border: "#D69E9D", images: ["sihpink1.jpeg", "sihpink2.jpeg", "sihpink3.jpeg"] },
      { name: "Green", border: "#084E44", images: ["sihgreen1.jpeg", "sihgreen2.jpeg", "sihgreen3.jpeg"] },
      { name: "White2",  border: "white",    images: ["221.jpeg", "222.jpeg", "223.png"] },
],
},
  {
    name: 'Кофта "КУЛЬТУРА МОЛОДЁЖИ 3" ',
    price: 4000,
    description: DESCRIPTION,
    sizes: ["S", "M", "L", "XL"],
    gallery: ["ser1.jpeg", "ser2.jpeg", "ser3.jpeg"],
    colors: [
      { name: "Gray", border: "gray",   images: ["ser1.jpeg", "ser2.jpeg", "ser3.jpeg"] },
      { name: "White", border: "white",   images: ["wh1.jpeg", "wh2.jpeg", "wh3.jpeg"] },
      { name: "White2",  border: "white", images: ["bez1.jpeg", "bez2.jpeg", "bez3.jpeg"] },
      { name: "Pink", border: "#D69E9D", images: ["pp1.jpeg", "pp2.jpeg", "pp3.jpeg"] },
],
},
  {
    name: 'Кофта "КУЛЬТУРА МОЛОДЁЖИ 4"',
    price: 3650,
    description: DESCRIPTION,
    sizes: ["S", "M", "L", "XL"],
    gallery: ["p1.jpeg", "p2.jpeg", "p3.png"],
    colors: [
      { name: "Pink",  border: "#D69E9D", images: ["p1.jpeg", "p2.jpeg", "p3.png"] },
      { name: "Brown", border: "#76533B", images: ["b1.jpeg", "b2.jpeg", "b3.png"] },
      { name: "Black", border: "black", images: ["bb.png"] },
    ],
  },
  {
    name: 'Кофта "УЛИЦЫ В СЕРДЦАХ"',
    price: 3650,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> Материал - хлопок 59% / эластан 41% <br> Плотность - 300 гр/м (без начеса) / оверсайз покрой <br> (Принт нанесен методом DTF печати) <br> Стирать при температуре 30 градусов, на изнанку / гладить на изнанку !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["streetsinheart1.jpeg", "streetsinheart2.jpeg", "streetsinheart3.jpeg"],
    colors: [
      { name: "Brown", border: "#76533B", images: ["brown1.jpeg", "brown2.jpeg", "brown3.jpeg"] },
      { name: "Brown2", border: "#76533B", images: ["bf1.jpeg", "bf2.jpeg", "bf3.png"] },
      { name: "Black", border: "black",   images: ["streetsinheart1.jpeg", "streetsinheart2.jpeg", "streetsinheart3.jpeg"] },
      { name: "Black2", border: "black",   images: ["u1.jpeg", "u2.jpeg", "u3.png"] },
      { name: "Pink",  border: "#D69E9D", images: ["streets1pink.jpeg", "streetspink2.jpeg", "streetspink3.jpeg"] },
      { name: "Gold",  border: "gold", images: ["sgold1.jpeg", "sgold2.jpeg", "sgold3.png"] },
    ],
  },
  {
    name: 'Футболка "КУЛЬТУРА МОЛОДЁЖИ"',
    price: 2000,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> 1) цвет изделия - зависит от которого выбрали <br> 2) Состав изделия - оверсайз покрой (хлопок 100% / 250 гр/м) <br> Принт нанесен методом DTF печати <br> Стирать/гладить на изнанку ! <br> Стирать при 30 градусах',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["tish1.jpeg", "tish2.jpeg", "tish3.png"],
    colors: [
      { name: "Blue",   border: "#1B3A94", images: ["tish1.jpeg", "tish2.jpeg", "tish3.png"] },
      { name: "Black",  border: "#020202", images: ["black1.jpeg", "black2.jpeg", "black3.png"] },
      { name: "White",  border: "white",   images: ["white1.jpeg", "white2.jpeg", "white3.png"] },
      { name: "Violet", border: "#8C1AA2", images: ["violet1.jpeg", "violet2.jpeg", "violet3.png"] },
      { name: "White2", border: "white", images: ["y1.png", "y2.png"] },
    ],
  },
  {
    name: 'Свитшот "КУЛЬТУРА МОЛОДЁЖИ"',
    price: 3200,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> Материал - хлопок 59% / эластан 41% <br> Плотность - 300 гр/м (без начеса) / оверсайз покрой <br> (Принт нанесен методом DTF печати) <br> Стирать при температуре 30 градусов, на изнанку / гладить на изнанку !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["sweetred1.jpeg", "sweetred2.jpeg", "sweetred3.png"],
    colors: [
      { name: "Red",  border: "#BE3041", images: ["sweetred1.jpeg", "sweetred2.jpeg", "sweetred3.png"] },
      { name: "Blue", border: "#B7D3F0", images: ["sweetblue1.jpeg", "sweetblue2.jpeg", "sweetblue3.png"] },
    ],
  },
  {
    name: 'Футболка "МОЛОДОЙ СТАНТЕР"',
    price: 2000,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> 1) цвет изделия - зависит от которого выбрали <br> 2) Состав изделия - оверсайз покрой (хлопок 100% / 250 гр/м) <br> Принт нанесен способом DTF печати <br> Стирать без сушки. 30 град (Выворачиваем и стираем) ! И также гладим с наизнанки !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["youngwhite1.jpeg", "youngwhite2.jpeg", "youngwhite3.jpeg"],
    colors: [
      { name: "White", border: "white", images: ["youngwhite1.jpeg", "youngwhite2.jpeg", "youngwhite3.jpeg"] },
      { name: "Black", border: "black", images: ["youngblack1.jpeg", "youngblack2.jpeg", "youngblack3.jpeg"] },
    ],
  },
  {
    name: 'Футболка "УЛИЧНАЯ МОЛОДЁЖЬ"',
    price: 2000,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> 1) цвет изделия - зависит от которого выбрали <br> 2) Состав изделия - оверсайз покрой (хлопок 100% / 250 гр/м) <br> Принт нанесен способом DTF печати <br> Стирать без сушки. 30 град (Выворачиваем и стираем) ! И также гладим с наизнанки !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["mlwhite1.jpeg", "mlwhite2.jpeg", "mlwhite3.png"],
    colors: [
      { name: "Black",  border: "black",  images: ["mlwhite1.jpeg", "mlwhite2.jpeg", "mlwhite3.png"] },
      { name: "Violet", border: "violet", images: ["mlviolet1.jpeg", "mlviolet2.jpeg", "mlviolet3.png"] },
      { name: "Pink",   border: "pink",   images: ["mlpink1.jpeg", "mlpink2.jpeg", "mlpink3.png"] },
      { name: "Pink2",  border: "pink",   images: ["ml1.jpeg", "ml2.jpeg", "ml3.png"] },
      { name: "Gold",   border: "gold",   images: ["mlgold1.jpeg", "mlgold2.jpeg", "mlgold3.png"] },
      { name: "White",  border: "white",  images: ["m1.jpeg", "m2.jpeg", "m3.png"] },
    ],
  },
{
    name: 'Футболка "УЛИЧНАЯ МОЛОДЁЖЬ 2"',
    price: 2000,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> 1) цвет изделия - зависит от которого выбрали <br> 2) Состав изделия - оверсайз покрой (хлопок 100% / 250 гр/м) <br> Принт нанесен способом DTF печати <br> Стирать без сушки. 30 град (Выворачиваем и стираем) ! И также гладим с наизнанки !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["pr.png"],
    colors: [
      { name: "Black",  border: "black",  images: ["pr.png"] },
    ],
  },
  {
    name: 'Футболка "22TEAM"',
    price: 2000,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> 1) цвет изделия - зависит от которого выбрали <br> 2) Состав изделия - оверсайз покрой (хлопок 100% / 250 гр/м) <br> Принт нанесен способом DTF печати <br> Стирать без сушки. 30 град (Выворачиваем и стираем) ! И также гладим с наизнанки !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["22blue.png"],
    colors: [
      { name: "Blue",   border: "blue",   images: ["22blue.png"] },
      { name: "Violet", border: "violet", images: ["22violet.png"] },
      { name: "Pink",   border: "pink",   images: ["22pink.png"] },
    ],
  },
{
    name: 'Футболка "22TEAM"  Белая',
    price: 2000,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> 1) цвет изделия - зависит от которого выбрали <br> 2) Состав изделия - оверсайз покрой (хлопок 100% / 250 гр/м) <br> Принт нанесен способом DTF печати <br> Стирать без сушки. 30 град (Выворачиваем и стираем) ! И также гладим с наизнанки !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["22b.png"],
    colors: [
      { name: "Blue",   border: "blue",   images: ["22b.png"] },
      { name: "Violet", border: "violet", images: ["22v.png"] },
      { name: "Pink",   border: "pink",   images: ["22p.png"] },
    ],
  },
{
    name: 'Футболка "22TEAM" 2',
    price: 2000,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> 1) цвет изделия - зависит от которого выбрали <br> 2) Состав изделия - оверсайз покрой (хлопок 100% / 250 гр/м) <br> Принт нанесен способом DTF печати <br> Стирать без сушки. 30 град (Выворачиваем и стираем) ! И также гладим с наизнанки !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["22w1.png", "22w2.png"],
    colors: [
      { name: "White",   border: "white",   images: ["22w1.png", "22w2.png"] },
      { name: "Black",   border: "black",   images: ["22b1.png", "22b2.png"] },
    ],
  },

{
    name: 'Футболка "База"',
    price: 1400,
    description: 'ДЕЛАЕМ ИСКЛЮЧИТЕЛЬНО ПО ПРЕДЗАКАЗУ! <br> Материал - Кулирная гладь качество компакт пенье ! "оверсайз покрой" <br> (Принт нанесен методом DTF печати) <br> Стирать при температуре 30 градусов,на изнанку/гладить на изнанку !',
    sizes: ["S", "M", "L", "XL"],
    gallery: ["baza.png"],
    colors: [
      { name: "White", border: "white", images: ["baza.png"] },
    ],
  },
{
    name: 'Стикер Пак "22TEAM"',
    price: 650,
    description: 'Наклейки выполнены из качественного материала! <br> В наборе 12 штук !<br> Размеры универсальные ! <br> Выбранный размер и цвет не влияет на кол-во и качество наклеек! <br> Всё как на фото.',
    sizes: ["12", "12", "12", "12"],
    gallery: ["stickerpack.png"],
    colors: [
      { name: "White", border: "white", images: ["stickerpack.png"] },
    ],
  },
];

const selections = PRODUCTS.map((p) => ({
  size: "",
  color: "",
  image: p.gallery[0],
}));

const STORAGE_VERSION = "2";
if (localStorage.getItem("storageVersion") !== STORAGE_VERSION) {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("favoriteItems");
  localStorage.setItem("storageVersion", STORAGE_VERSION);
}

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
let currentProduct = 0;

function toNumber(value) {
  if (typeof value === "number") return value;
  const digits = String(value).replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

function formatPrice(value) {
  return toNumber(value).toLocaleString("ru-RU") + " ₽";
}

function asset(file) {
  if (!file) return "";
  return file.indexOf("assets/") === 0 ? file : ASSETS + file;
}

function cardPosition(index) {
  return {
    left: 5 + (index % 2) * 195,
    top: 380 + Math.floor(index / 2) * 290,
  };
}

function sizeButtonPosition(index) {
  return { left: 27 + index * 68, top: 270 };
}

function colorButtonPosition(index) {
  if (index < 4) return { left: 27 + index * 78, top: 330 };
  return { left: 303 - (index - 4) * 78, top: 270 };
}

function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function saveFavorites() {
  localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
}

function renderCatalog() {
  const home = document.getElementById("home-page");

  const rows = Math.ceil(PRODUCTS.length / 2);
  home.style.minHeight = 380 + rows * 290 + 160 + "px";

  PRODUCTS.forEach((product, index) => {
    const pos = cardPosition(index);

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.left = pos.left + "px";
    card.style.top = pos.top + "px";

    const img = document.createElement("img");
    img.className = "card-img";
    img.src = asset(product.gallery[0]);
    img.addEventListener("click", () => openProduct(index));

    const price = document.createElement("h2");
    price.className = "card-price";
    price.textContent = formatPrice(product.price);

    const name = document.createElement("h2");
    name.className = "card-name";
    name.textContent = product.name;

    card.append(img, price, name);
    home.appendChild(card);
  });
}

function renderSizeButtons(index) {
  const product = PRODUCTS[index];
  const wrap = document.getElementById("sizeButtons");
  wrap.innerHTML = "";

  (product.sizes || []).forEach((size, i) => {
    const pos = sizeButtonPosition(i);
    const btn = document.createElement("button");
    btn.className = "size-btn";
    btn.textContent = size;
    btn.style.left = pos.left + "px";
    btn.style.top = pos.top + "px";
    if (selections[index].size === size) {
      btn.style.border = "2px solid #3E88F7";
    }
    btn.addEventListener("click", () => selectSize(index, size));
    wrap.appendChild(btn);
  });
}

function renderColorButtons(index) {
  const product = PRODUCTS[index];
  const wrap = document.getElementById("colorButtons");
  wrap.innerHTML = "";

  (product.colors || []).forEach((color, i) => {
    const pos = colorButtonPosition(i);
    const btn = document.createElement("button");
    btn.className = "color-btn";
    btn.textContent = color.name;
    btn.style.left = pos.left + "px";
    btn.style.top = pos.top + "px";
    btn.style.border = "1px solid " + color.border;
    btn.addEventListener("click", () => selectColor(index, color));
    wrap.appendChild(btn);
  });
}

function renderSlider(index) {
  const product = PRODUCTS[index];
  const slider = document.getElementById("productSlider");
  slider.innerHTML = "";

  product.gallery.forEach((file) => {
    const img = document.createElement("img");
    img.className = "slide";
    img.src = asset(file);
    slider.appendChild(img);
  });
}

function openProduct(index) {
  currentProduct = index;
  const product = PRODUCTS[index];

  renderSlider(index);
  renderSizeButtons(index);
  renderColorButtons(index);

  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = formatPrice(product.price);
  document.getElementById("productDesc").innerHTML = product.description;

  const sizeText = document.querySelector(".size-text");
  const sizeWrap = document.getElementById("sizeButtons");
  if (sizeText) sizeText.style.display = product.noSize ? "none" : "";
  if (sizeWrap) sizeWrap.style.display = product.noSize ? "none" : "";

  const colorWrap = document.getElementById("colorButtons");
  if (colorWrap) colorWrap.style.display = product.noColor ? "none" : "";

  document.getElementById("home-page").style.display = "none";
  document.getElementById("product-page").style.display = "block";
  document.body.style.backgroundColor = "#1C1C1D";
}

function closeProduct() {
  document.getElementById("product-page").style.display = "none";
  document.getElementById("home-page").style.display = "block";
  document.body.style.backgroundColor = "#2C2C2E";
}

function selectSize(index, size) {
  selections[index].size = size;
  renderSizeButtons(index);
}

function selectColor(index, color) {
  selections[index].color = color.name;
  selections[index].image = color.images[0];

  const imgs = document.querySelectorAll("#productSlider img");
  imgs.forEach((img, i) => {
    if (color.images[i]) img.src = asset(color.images[i]);
  });
}

function validateSelection(choice, product) {
  if (!product.noSize && choice.size === "") {
    alert("Выберите размер");
    return false;
  }
  if (!product.noColor && choice.color === "") {
    alert("Выберите цвет");
    return false;
  }
  return true;
}

function addToCart() {
  const index = currentProduct;
  const product = PRODUCTS[index];
  const choice = selections[index];

  if (!validateSelection(choice, product)) return;

  const existing = cartItems.find(
    (item) =>
      item.name === product.name &&
      item.size === choice.size &&
      item.color === choice.color
  );

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cartItems.push({
      name: product.name,
      price: product.price,
      size: choice.size,
      color: choice.color,
      quantity: 1,
      image: choice.image,
    });
  }

  saveCart();
  updateCart();
}

function addToFavorites() {
  const index = currentProduct;
  const product = PRODUCTS[index];
  const choice = selections[index];

  if (!validateSelection(choice, product)) return;

  const exists = favoriteItems.some(
    (item) =>
      item.name === product.name &&
      item.size === choice.size &&
      item.color === choice.color
  );

  if (!exists) {
    favoriteItems.push({
      name: product.name,
      size: choice.size,
      color: choice.color,
      image: choice.image,
    });
  }

  saveFavorites();
  updateFavorites();
}

function removeCartItem(index) {
  cartItems.splice(index, 1);
  saveCart();
  updateCart();
}

function removeFavoriteItem(index) {
  favoriteItems.splice(index, 1);
  saveFavorites();
  updateFavorites();
}

function cartItemCard(item, index) {
  return `
    <div style="background:#111111; color:white; box-sizing:border-box; width:90%; margin:0 auto 15px; border-radius:10px; padding:15px; display:flex; gap:16px; text-align:left; animation:fadeInUp 0.3s ease both;">
      <img src="${asset(item.image)}" style="width:140px; height:150px; border-radius:10px; object-fit:cover; flex-shrink:0;">
      <div style="flex:1; min-width:0; display:flex; flex-direction:column; gap:7px;">
        <div style="font-size:16px; font-weight:600;">${item.name}</div>
        <div style="font-size:15px;">${formatPrice(item.price)}</div>
        <div style="font-size:15px;">Размер: ${item.size}</div>
        <div style="font-size:15px;">Цвет: ${item.color}</div>
        <div style="font-size:15px;">Количество: ${item.quantity || 1}</div>
        <button onclick="removeCartItem(${index})" style="align-self:flex-end; margin-top:6px; background:transparent; color:#3E88F7; border:none; font-size:16px; cursor:pointer; padding:0;">Очистить</button>
      </div>
    </div>
  `;
}

function updateCart() {
  const cartPage = document.getElementById("cart-page");

  if (cartItems.length === 0) {
    cartPage.innerHTML = `
      <h2 class="cart-text">В корзине пусто...</h2>
      <h4 class="cartsub-text">Посмотрите каталог и добавьте товары в корзину</h4>
      <button class="gotopurchases-cart" onclick="goToCatalog()">Вернуться к покупкам</button>
    `;
    updateCounters();
    return;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + toNumber(item.price) * (item.quantity || 1),
    0
  );

  let html =
    '<h2 class="cart-text" style="text-align: left; margin-left: 15px; margin-top:20px;">Корзина</h2>';

  cartItems.forEach((item, index) => {
    html += cartItemCard(item, index);
  });

  html += `
    <div style="width:90%; margin:20px auto 0; box-sizing:border-box; padding:0 15px; display:flex; justify-content:space-between; align-items:center;">
      <h2 style="color:white; margin:0;">Итого</h2>
      <h2 style="color:white; margin:0;">${formatPrice(total)}</h2>
    </div>
    <button onclick="oformit()"  style="position:fixed; left:10px; right:10px; bottom:85px; height:50px; background:#3E88F7; color:white; border:none; border-radius:10px; font-size:16px; font-weight:700; z-index:999999;">
      Перейти к оформлению • ${formatPrice(total)}
    </button>
    <div style="height:160px;"></div>
  `;

  cartPage.innerHTML = html;
  updateCounters();
}

function favoriteItemCard(item, index) {
  return `
    <div style="background:#111111; border:1px solid #414143; color:white; box-sizing:border-box; width:90%; margin:0 auto 15px; border-radius:10px; padding:15px; display:flex; gap:16px; text-align:left; animation:fadeInUp 0.3s ease both;">
      <img src="${asset(item.image)}" style="width:140px; height:150px; border-radius:10px; object-fit:cover; flex-shrink:0;">
      <div style="flex:1; min-width:0; display:flex; flex-direction:column; gap:8px;">
        <div style="font-size:16px; font-weight:600;">${item.name}</div>
        <div style="font-size:15px;">Размер: ${item.size}</div>
        <div style="font-size:15px;">Цвет: ${item.color}</div>
        <button onclick="removeFavoriteItem(${index})" style="align-self:flex-end; margin-top:6px; background:transparent; color:#3E88F7; border:none; font-size:16px; cursor:pointer; padding:0;">Очистить</button>
      </div>
    </div>
  `;
}

function updateFavorites() {
  const favPage = document.getElementById("fav-page");

  if (favoriteItems.length === 0) {
    favPage.innerHTML = `
      <h2 class="fav-text">В избранном пусто</h2>
      <h4 class="favsub-text">Добавляйте понравившиеся товары в избранное, чтобы не потерять</h4>
      <button class="gotopurchases" onclick="goToCatalog()">Вернуться к покупкам</button>
    `;
    updateCounters();
    return;
  }

  let html =
    '<h2 class="fav-text" style="text-align: left; margin-left: 15px; margin-top:20px;">Избранное</h2>';

  favoriteItems.forEach((item, index) => {
    html += favoriteItemCard(item, index);
  });

  favPage.innerHTML = html;
  updateCounters();
}

function updateCounters() {
  const cartBadge = document.getElementById("cartBadge");
  const favBadge = document.getElementById("favBadge");

  if (cartBadge) {
    cartBadge.textContent = cartItems.length;
    cartBadge.style.display = cartItems.length ? "flex" : "none";
  }
  if (favBadge) {
    favBadge.textContent = favoriteItems.length;
    favBadge.style.display = favoriteItems.length ? "flex" : "none";
  }

  saveCart();
  saveFavorites();
}

const PAGE_IDS = [
  "home-page",
  "fav-page",
  "cart-page",
  "profile-page",
  "product-page",
];

function showPage(pageId) {
  PAGE_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
  const target = document.getElementById(pageId);
  if (target) target.style.display = "block";
  document.body.style.backgroundColor = "#2C2C2E";
}

function goToCatalog() {
  const homeTab = document.querySelector('.nav-item[data-page="home"]');
  if (homeTab) homeTab.click();
}

function initNavigation() {
  const tabs = document.querySelectorAll(".nav-item");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      showPage(tab.dataset.page + "-page");
    });
  });
}

function init() {
  renderCatalog();
  initNavigation();

  document.getElementById("addToCartBtn").addEventListener("click", addToCart);
  document.getElementById("productLike").addEventListener("click", addToFavorites);

  updateCart();
  updateFavorites();
  updateCounters();
}

function oformit() {

alert("Как правильно оформить заказ:\n1. Добавьте нужные товары в корзину.\n2. В разделе 'Профиль' нажмите на кнопку 'Оформление заказа'.\n3. Вас перенаправит на личные сообщения владельца, ему нужно отправить раннее сделанный скриншот для успешного оформления заказа.\nГотово!");

}

document.addEventListener("DOMContentLoaded", init);
