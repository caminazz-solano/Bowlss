const BOWL_IMAGES = {
  harvest: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
  salmon: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  hummus: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
  berries: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=80",
  steak: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80"
};

const starterCart = [
  { id: "sun-kissed", name: "Sun-Kissed Grains", detail: "Quinoa, garbanzos, feta, verdes", price: 58, qty: 1, img: BOWL_IMAGES.salmon },
  { id: "golden-pasta", name: "Golden Pasta Base", detail: "Rigatoni, pimientos, huevo, pesto", price: 74, qty: 1, img: BOWL_IMAGES.pasta }
];

function formatMoney(value) {
  return `Bs ${Number(value).toFixed(2)}`;
}

function getCart() {
  return JSON.parse(localStorage.getItem("bowlssCart") || JSON.stringify(starterCart));
}

function saveCart(cart) {
  localStorage.setItem("bowlssCart", JSON.stringify(cart));
  renderCart();
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(product => product.id === item.id);
  if (existing) existing.qty += 1;
  else cart.push({ ...item, qty: 1 });
  saveCart(cart);
  document.body.classList.add("cart-open");
}

function renderCart() {
  const items = document.querySelector("[data-cart-items]");
  const subtotalEl = document.querySelector("[data-cart-subtotal]");
  const totalEl = document.querySelector("[data-cart-total]");
  if (!items) return;
  const cart = getCart();
  items.innerHTML = cart.length ? cart.map(item => `
    <article class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div>
        <strong>${item.name}</strong>
        <p class="text-sm opacity-75">${item.detail}</p>
        <div class="qty" aria-label="Cantidad de ${item.name}">
          <button type="button" data-qty="${item.id}" data-change="-1" aria-label="Restar">-</button>
          <span>${item.qty}</span>
          <button type="button" data-qty="${item.id}" data-change="1" aria-label="Sumar">+</button>
        </div>
      </div>
      <div class="cart-item-side">
        <button type="button" data-remove="${item.id}" class="trash-btn" aria-label="Eliminar ${item.name}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <strong class="item-total">${formatMoney(item.price * item.qty)}</strong>
      </div>
    </article>
  `).join("") : `<p class="lead">Tu carrito está listo para recibir bowls dorados.</p>`;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  subtotalEl.textContent = formatMoney(subtotal);
  totalEl.textContent = formatMoney(subtotal);
}

function confirmCheckout(button) {
  const cart = getCart();
  if (!cart.length) return;

  const itemsEl = document.querySelector("[data-cart-items]");
  const subtotalEl = document.querySelector("[data-cart-subtotal]");
  const totalEl = document.querySelector("[data-cart-total]");
  const originalLabel = button.innerHTML;

  itemsEl.innerHTML = `
    <div class="text-center py-16">
      <i class="fa-solid fa-circle-check" style="font-size:4rem;color:#2f7d4f;"></i>
      <p class="display text-3xl mt-6">PEDIDO CONFIRMADO</p>
      <p class="lead mt-3">Gracias por tu compra. Tu Bowlss está en camino. ☀️</p>
    </div>
  `;
  subtotalEl.textContent = formatMoney(0);
  totalEl.textContent = formatMoney(0);
  button.innerHTML = `<i class="fa-solid fa-check"></i> Pedido Confirmado`;
  button.disabled = true;

  localStorage.setItem("bowlssCart", JSON.stringify([]));

  setTimeout(() => {
    document.body.classList.remove("cart-open");
    button.disabled = false;
    button.innerHTML = originalLabel;
    renderCart();
  }, 2600);
}

function initGlobalUI() {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("bowlssTheme");
  if (savedTheme === "dark") document.documentElement.classList.add("dark");

  document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("bowlssTheme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
  });

  document.querySelectorAll("[data-nav-toggle]").forEach(btn => {
    btn.addEventListener("click", () => document.body.classList.toggle("nav-open"));
  });

  document.querySelectorAll("[data-cart-open]").forEach(btn => {
    btn.addEventListener("click", () => document.body.classList.add("cart-open"));
  });
  document.querySelectorAll("[data-cart-close]").forEach(btn => {
    btn.addEventListener("click", () => document.body.classList.remove("cart-open"));
  });

  document.addEventListener("click", event => {
    const qtyBtn = event.target.closest("[data-qty]");
    const removeBtn = event.target.closest("[data-remove]");
    const checkoutBtn = event.target.closest("[data-checkout]");

    if (qtyBtn) {
      const cart = getCart().map(item => item.id === qtyBtn.dataset.qty ? { ...item, qty: Math.max(1, item.qty + Number(qtyBtn.dataset.change)) } : item);
      saveCart(cart);
    }
    if (removeBtn) saveCart(getCart().filter(item => item.id !== removeBtn.dataset.remove));
    if (checkoutBtn) confirmCheckout(checkoutBtn);
  });

  renderCart();
  if (window.AOS) AOS.init({ once: true, duration: 700, offset: 80 });
}

function initHeroSlider() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".slider-dot")];
  if (!slides.length) return;
  let index = 0;
  const show = next => {
    index = next;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  };
  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));
  setInterval(() => show((index + 1) % slides.length), 5200);
}

function initLocationsPage() {
  const frame = document.querySelector("[data-map-frame]");
  if (!frame) return;

  let zoom = 16;
  let query = "Av. Ballivián El Prado, Cochabamba, Bolivia";

  const updateMap = () => {
    frame.src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;
  };

  document.querySelectorAll("[data-zoom]").forEach(btn => {
    btn.addEventListener("click", () => {
      zoom = Math.min(20, Math.max(3, zoom + Number(btn.dataset.zoom)));
      updateMap();
    });
  });

  const searchInput = document.querySelector("[data-location-search]");
  if (searchInput) {
    searchInput.addEventListener("keydown", event => {
      if (event.key === "Enter" && searchInput.value.trim()) {
        event.preventDefault();
        query = searchInput.value.trim();
        updateMap();
      }
    });
  }

  const locateBtn = document.querySelector("[data-locate-me]");
  if (locateBtn) {
    locateBtn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        alert("Tu navegador no soporta geolocalización.");
        return;
      }
      const original = locateBtn.innerHTML;
      locateBtn.disabled = true;
      locateBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Buscando...`;
      navigator.geolocation.getCurrentPosition(
        position => {
          query = `${position.coords.latitude},${position.coords.longitude}`;
          zoom = 15;
          updateMap();
          locateBtn.disabled = false;
          locateBtn.innerHTML = original;
        },
        () => {
          alert("No pudimos obtener tu ubicación. Revisa los permisos del navegador.");
          locateBtn.disabled = false;
          locateBtn.innerHTML = original;
        }
      );
    });
  }

  document.querySelectorAll("[data-reserve]").forEach(btn => {
    btn.addEventListener("click", () => {
      const original = btn.innerHTML;
      btn.innerHTML = `<i class="fa-solid fa-check"></i> ¡Reserva Confirmada!`;
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
      }, 2600);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initGlobalUI();
  initHeroSlider();
  initLocationsPage();
});
