const builderData = {
  base: [
    { name: "Basmati Rice", price: 0, img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=500&q=80" },
    { name: "Wild Arugula", price: 0, img: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=500&q=80" },
    { name: "Pearl Couscous", price: 8, img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80" }
  ],
  protein: [
    { name: "Miso Salmon", price: 22, img: BOWL_IMAGES.salmon },
    { name: "Crispy Falafel", price: 16, img: BOWL_IMAGES.hummus },
    { name: "Grilled Steak", price: 25, img: BOWL_IMAGES.steak }
  ],
  veggies: [
    { name: "Pickled Onions", price: 3, img: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=500&q=80" },
    { name: "Roasted Peppers", price: 4, img: BOWL_IMAGES.pasta },
    { name: "Cucumber Ribbons", price: 3, img: BOWL_IMAGES.harvest }
  ],
  toppings: [
    { name: "Feta", price: 6, img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=80" },
    { name: "Pomegranate", price: 7, img: BOWL_IMAGES.berries },
    { name: "Toasted Seeds", price: 5, img: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80" }
  ],
  dressing: [
    { name: "Lemon Tahini", price: 0, img: BOWL_IMAGES.hummus },
    { name: "Herb Pesto", price: 4, img: BOWL_IMAGES.pasta },
    { name: "Chili Yogurt", price: 4, img: BOWL_IMAGES.salmon }
  ]
};
const stepLabels = { base: "1. Base", protein: "2. Proteína", veggies: "3. Vegetales", toppings: "4. Toppings", dressing: "5. Aderezo" };
let currentStep = "base";
const selections = { base: builderData.base[0], protein: builderData.protein[0], veggies: builderData.veggies[0], toppings: builderData.toppings[0], dressing: builderData.dressing[0] };

function renderSteps() {
  document.querySelector("[data-steps]").innerHTML = Object.entries(stepLabels).map(([key, label]) => `<button class="pill ${key === currentStep ? "active" : ""}" data-step="${key}">${label}</button>`).join("");
}

function renderIngredients() {
  document.querySelector("[data-ingredients]").innerHTML = builderData[currentStep].map(item => `
    <button class="card ingredient-card ${selections[currentStep].name === item.name ? "selected" : ""}" data-ingredient="${item.name}">
      <img class="food-img" src="${item.img}" alt="${item.name}">
      <strong class="text-xl">${item.name}</strong>
      <span class="block mt-2 opacity-70">${item.price ? "+ " + formatMoney(item.price) : "Incluido"}</span>
    </button>
  `).join("");
}

function renderSummary() {
  const rows = Object.entries(selections).map(([key, item]) => `<div class="summary-row"><span><strong>${stepLabels[key].replace(/^\d\. /, "")}</strong><br>${item.name}</span><strong>${formatMoney(item.price)}</strong></div>`);
  const total = Object.values(selections).reduce((sum, item) => sum + item.price, 35);
  document.querySelector("[data-summary]").innerHTML = `${rows.join("")}<div class="summary-row total"><span>Total</span><strong>${formatMoney(total)}</strong></div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderSteps(); renderIngredients(); renderSummary();
  document.addEventListener("click", event => {
    const step = event.target.closest("[data-step]");
    const ingredient = event.target.closest("[data-ingredient]");
    if (step) { currentStep = step.dataset.step; renderSteps(); renderIngredients(); }
    if (ingredient) {
      selections[currentStep] = builderData[currentStep].find(item => item.name === ingredient.dataset.ingredient);
      renderIngredients(); renderSummary();
    }
    if (event.target.closest("[data-add-custom]")) {
      const names = Object.values(selections).map(item => item.name);
      const total = Object.values(selections).reduce((sum, item) => sum + item.price, 35);
      addToCart({ id: `custom-${names.join("-").toLowerCase().replace(/\s+/g, "-")}`, name: "Bowlss Personalizado", detail: names.join(", "), price: total, img: selections.protein.img });
    }
  });
});
