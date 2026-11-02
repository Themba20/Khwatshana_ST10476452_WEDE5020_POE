// Mswenko Home & Lifestyle: interactive features and form validation.
const products = [
  {id:1,name:"Sculptural Ceramic Vase",category:"Decor",description:"A decorative accent for shelves, consoles and side tables.",symbol:"V",tone:"sage"},
  {id:2,name:"Everyday Serving Bowl",category:"Kitchen",description:"A versatile serving piece for relaxed everyday meals.",symbol:"B",tone:"sand"},
  {id:3,name:"Soft-Weave Cushion",category:"Living",description:"A simple finishing touch for a sofa or favourite chair.",symbol:"C",tone:"leaf"},
  {id:4,name:"Minimal Table Tray",category:"Decor",description:"Keep small essentials together with a clean, useful tray.",symbol:"T",tone:"sage"},
  {id:5,name:"Kitchen Storage Jar",category:"Kitchen",description:"A practical storage idea for a tidy kitchen counter.",symbol:"J",tone:"sand"},
  {id:6,name:"Textured Throw",category:"Living",description:"An easy layer for a reading nook or living room.",symbol:"W",tone:"leaf"}
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (menuButton && nav) menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  setupProducts();
  setupEnquiryForm();
  setupContactForm();
  document.querySelectorAll("main > section").forEach((section, index) => {
    section.classList.add("fade-in");
    section.style.animationDelay = `${Math.min(index * 70, 280)}ms`;
  });
});

function setupProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const search = document.getElementById("product-search");
  const category = document.getElementById("category-filter");
  const sort = document.getElementById("sort-products");
  const count = document.getElementById("result-count");
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");
  const close = document.querySelector(".lightbox-close");
  function render() {
    const term = search.value.trim().toLowerCase();
    let list = products.filter(p => (category.value === "all" || p.category === category.value) &&
      (p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)));
    if (sort.value === "name") list.sort((a,b) => a.name.localeCompare(b.name));
    count.textContent = `${list.length} product${list.length === 1 ? "" : "s"} shown`;
    grid.innerHTML = list.length ? list.map(p => `
      <article class="product-card">
        <button class="product-visual" type="button" data-preview="${p.id}" aria-label="Preview ${p.name}"><span>${p.symbol}</span></button>
        <div class="product-info"><div class="product-meta"><span>${p.category}</span><span>Ask for price</span></div>
          <h3>${p.name}</h3><p>${p.description}</p><a href="enquiry.html">Enquire about this item →</a></div>
      </article>`).join("") : `<p class="no-results">No products match your search. Try another word or category.</p>`;
    grid.querySelectorAll("[data-preview]").forEach(button => button.addEventListener("click", () => {
      const p = products.find(item => item.id === Number(button.dataset.preview));
      lightboxContent.innerHTML = `<div class="product-visual"><span>${p.symbol}</span></div><p>${p.name}</p>`;
      lightbox.hidden = false; close.focus();
    }));
  }
  [search, category, sort].forEach(el => el.addEventListener("input", render));
  close.addEventListener("click", () => { lightbox.hidden = true; });
  lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.hidden = true; });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !lightbox.hidden) lightbox.hidden = true; });
  render();
}

function showFeedback(element, message, type) {
  element.textContent = message;
  element.className = `form-feedback ${type}`;
}
function validForm(form, feedback) {
  if (!form.checkValidity()) {
    form.reportValidity();
    showFeedback(feedback, "Please check the highlighted fields and try again.", "error");
    return false;
  }
  return true;
}
function setupEnquiryForm() {
  const form = document.getElementById("enquiry-form");
  if (!form) return;
  const feedback = document.getElementById("enquiry-feedback");
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!validForm(form, feedback)) return;
    const data = new FormData(form);
    const name = data.get("name").trim();
    const product = data.get("product");
    const quantity = Number(data.get("quantity"));
    showFeedback(feedback, `Thank you, ${name}. Your enquiry for ${quantity} ${quantity === 1 ? "item" : "items"} in "${product}" has been checked. Please contact the store to confirm current pricing and availability. This demonstration does not send or store your details.`, "success");
    form.reset();
  });
}
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const feedback = document.getElementById("contact-feedback");
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!validForm(form, feedback)) return;
    const data = new FormData(form);
    // Replace this placeholder with the organisation's real monitored email address before publishing.
    const recipient = "REPLACE-WITH-STORE-EMAIL";
    const subject = encodeURIComponent(`Website message: ${data.get("type")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage type: ${data.get("type")}\n\nMessage:\n${data.get("message")}`
    );
    if (recipient === "REPLACE-WITH-STORE-EMAIL") {
      showFeedback(feedback, "Your message passed validation. Before publishing, add the store's real email address in js/script.js (contact form recipient).", "success");
      return;
    }
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    showFeedback(feedback, "Your email application should open with your message ready to review and send.", "success");
  });
}
