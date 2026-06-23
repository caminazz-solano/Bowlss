const products = [
  {
    id: "harvest",
    category: "Bowls de la Casa",
    name: "Harvest Bowl",
    desc: "Batata asada, kale, semillas de calabaza, quinoa y tahini.",
    price: 54,
    tags: ["Todos", "Vegano", "Sin Gluten"],
    img: BOWL_IMAGES.harvest
  },
  {
    id: "sun-salmon",
    category: "Bowls de la Casa",
    name: "Sun-Kissed Salmon",
    desc: "Salmon al limon, aguacate, farro y yogurt de hierbas.",
    price: 58,
    tags: ["Todos", "Dietético", "Alta Proteína"],
    img: BOWL_IMAGES.salmon
  },
  {
    id: "golden-hummus",
    category: "Verdes y Veganos",
    name: "Golden Hummus",
    desc: "Hummus de curcuma, falafel crujiente, tomates cherry y pepino.",
    price: 52,
    tags: ["Todos", "Vegano", "Sin Gluten"],
    img: BOWL_IMAGES.hummus
  },
  {
    id: "garden-falafel",
    category: "Verdes y Veganos",
    name: "Garden Falafel",
    desc: "Falafel, arroz integral, verdes, cebolla encurtida y tahini.",
    price: 49,
    tags: ["Todos", "Vegano"],
    img: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "athena-pasta",
    category: "Pastas Mediterráneas",
    name: "Athena Pasta",
    desc: "Penne integral, tomates secos, queso feta, espinacas y pinones.",
    price: 55,
    tags: ["Todos", "Dietético"],
    img: BOWL_IMAGES.pasta
  },
  {
    id: "sunset-rigatoni",
    category: "Pastas Mediterráneas",
    name: "Sunset Rigatoni",
    desc: "Rigatoni, pimientos asados, pesto, parmesano y aceite de oliva.",
    price: 57,
    tags: ["Todos", "Alta Proteína"],
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "summer-glow",
    category: "Bowls de Desayuno",
    name: "Summer Glow",
    desc: "Frutos del bosque, yogurt griego, miel organica y granola.",
    price: 45,
    tags: ["Todos", "Dietético"],
    img: BOWL_IMAGES.berries
  },
  {
    id: "rustic-steak",
    category: "Alta Proteína",
    name: "Rustic Steak",
    desc: "Filete a la parrilla, arroz integral, maiz asado y frijoles.",
    price: 62,
    tags: ["Todos", "Alta Proteína"],
    img: BOWL_IMAGES.steak
  },
  {
    id: "post-gym",
    category: "Alta Proteína",
    name: "Post-Gym Bowl",
    desc: "Pollo grillado, quinoa, garbanzos, pepino y salsa de limon.",
    price: 66,
    tags: ["Todos", "Alta Proteína", "Sin Gluten"],
    img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80"
  }
];

products.push(
  { id: "citrus-chicken", category: "Bowls de la Casa", name: "Citrus Chicken", desc: "Pollo al limon, arroz basmati, pepino, tomate y salsa cremosa.", price: 56, tags: ["Todos", "Alta Proteína"], img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80" },
  { id: "mediterraneo", category: "Bowls de la Casa", name: "Mediterraneo Bowl", desc: "Quinoa, garbanzos crocantes, aceitunas, feta y vegetales asados.", price: 53, tags: ["Todos", "Dietético"], img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80" },
  { id: "verde-prado", category: "Verdes y Veganos", name: "Verde Prado", desc: "Rucula, palta, couscous, pepino y aderezo de limon.", price: 48, tags: ["Todos", "Vegano"], img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
  { id: "vegan-crunch", category: "Verdes y Veganos", name: "Vegan Crunch", desc: "Kale, garbanzos, semillas tostadas, hummus y cebolla encurtida.", price: 50, tags: ["Todos", "Vegano", "Sin Gluten"], img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80" },
  { id: "pesto-bowl", category: "Pastas Mediterráneas", name: "Pesto Bowl", desc: "Pasta corta, pesto de albahaca, tomates cherry y queso fresco.", price: 52, tags: ["Todos", "Dietético"], img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80" },
  { id: "pomodoro-sun", category: "Pastas Mediterráneas", name: "Pomodoro Sun", desc: "Pasta integral, salsa pomodoro, espinaca y aceite de oliva.", price: 51, tags: ["Todos", "Dietético"], img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=80" },
  { id: "granola-sol", category: "Bowls de Desayuno", name: "Granola Sol", desc: "Yogurt, granola, banana, frutos rojos y miel.", price: 38, tags: ["Todos", "Dietético"], img: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=900&q=80" },
  { id: "tropical-morning", category: "Bowls de Desayuno", name: "Tropical Morning", desc: "Mango, yogurt griego, avena, coco y semillas.", price: 40, tags: ["Todos", "Dietético", "Sin Gluten"], img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80" },
  { id: "power-steak", category: "Alta Proteína", name: "Power Steak", desc: "Carne grillada, arroz integral, huevo, palta y salsa picante.", price: 68, tags: ["Todos", "Alta Proteína"], img: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=900&q=80" },
  { id: "salmon-fit", category: "Alta Proteína", name: "Salmon Fit", desc: "Salmon, quinoa, vegetales verdes y aderezo tahini.", price: 69, tags: ["Todos", "Alta Proteína", "Sin Gluten"], img: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=900&q=80" }
);

const filters = ["Todos", "Dietético", "Vegano", "Sin Gluten", "Alta Proteína"];
let activeFilter = "Todos";

function renderFilters() {
  document.querySelector("[data-filter-bar]").innerHTML = filters
    .map(filter => `<button class="pill ${filter === activeFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>`)
    .join("");
}

function productCard(product, index) {
  return `
    <article class="card product-card pattern" data-aos="fade-up" data-aos-delay="${Math.min(index * 70, 210)}">
      <img class="food-img" src="${product.img}" alt="${product.name}">
      <h3 class="display">${product.name}</h3>
      <div class="product-tags">${product.tags.filter(tag => tag !== "Todos").map(tag => `<span>${tag}</span>`).join("")}</div>
      <p class="lead text-base">${product.desc}</p>
      <p class="price">${formatMoney(product.price)}</p>
      <button class="btn btn-primary w-full mt-4" data-add-product="${product.id}">
        <i class="fa-solid fa-plus"></i> Add to Order
      </button>
    </article>
  `;
}

function renderProducts() {
  const visible = products.filter(product => activeFilter === "Todos" || product.tags.includes(activeFilter));
  const categories = [...new Set(visible.map(product => product.category))];
  const target = document.querySelector("[data-category-sections]");

  target.innerHTML = categories.map((category, categoryIndex) => {
    const categoryProducts = visible.filter(product => product.category === category);
    const carouselId = `carousel-${categoryIndex}`;
    return `
      <section class="menu-category" data-aos="fade-up">
        <div class="category-head">
          <div>
            <p class="font-black uppercase tracking-[.18em] text-[#efbd42]">Categoria</p>
            <h2 class="display">${category}</h2>
          </div>
        </div>
        <div class="carousel-shell">
          <button class="icon-btn carousel-side prev" data-carousel="${carouselId}" data-direction="-1" aria-label="Ver anteriores de ${category}"><i class="fa-solid fa-arrow-left"></i></button>
          <div class="product-carousel" id="${carouselId}">
            ${categoryProducts.map(productCard).join("")}
          </div>
          <button class="icon-btn carousel-side next" data-carousel="${carouselId}" data-direction="1" aria-label="Ver siguientes de ${category}"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </section>
    `;
  }).join("") || `<p class="lead text-center mt-12">No hay bowls en esta categoria por ahora.</p>`;

  if (window.AOS) AOS.refreshHard();
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProducts();

  document.addEventListener("click", event => {
    const filter = event.target.closest("[data-filter]");
    const add = event.target.closest("[data-add-product]");
    const carouselButton = event.target.closest("[data-carousel]");

    if (filter) {
      activeFilter = filter.dataset.filter;
      renderFilters();
      renderProducts();
    }

    if (add) {
      const product = products.find(item => item.id === add.dataset.addProduct);
      addToCart({ id: product.id, name: product.name, detail: product.desc, price: product.price, img: product.img });
    }

    if (carouselButton) {
      const carousel = document.getElementById(carouselButton.dataset.carousel);
      carousel.scrollBy({ left: Number(carouselButton.dataset.direction) * Math.max(300, carousel.clientWidth * 0.8), behavior: "smooth" });
    }
  });
});

