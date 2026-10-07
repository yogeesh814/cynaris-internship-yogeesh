/**
 * JavaScript ES6+ Basics — Deliverable (Week 1 / Day 3)
 */

const calculateTotal = (price, tax = 0.05) => {
  const total = price + price * tax;
  return `The total price is: $${total.toFixed(2)}`;
};


const user = { name: "Alice", age: 25, role: "Developer" };
const { name, age } = user;


const dataset = [
  { id: 1, title: "Wireless Mouse", category: "Electronics", price: 29.99, rating: 4.5 },
  { id: 2, title: "Mechanical Keyboard", category: "Electronics", price: 89.99, rating: 4.8 },
  { id: 3, title: "Coffee Mug", category: "Home", price: 12.50, rating: 4.2 },
  { id: 4, title: "Noise-Canceling Headphones", category: "Electronics", price: 199.99, rating: 4.9 },
  { id: 5, title: "Desk Lamp", category: "Home", price: 35.00, rating: 4.0 },
];

// Array Destructuring with Rest Operator
const [firstItem, secondItem, ...remainingItems] = dataset;

// filter(): Filter high-rated Electronics (rating >= 4.5) using destructuring
const topElectronics = dataset.filter(
  ({ category, rating }) => category === "Electronics" && rating >= 4.5
);

// map(): Transform dataset into formatted display strings
const itemSummaries = dataset.map(
  ({ title, price, category }) => `${title} (${category}): $${price.toFixed(2)}`
);

// reduce(): Calculate total price of all items
const totalPrice = dataset.reduce((acc, { price }) => acc + price, 0);

// reduce(): Group items by category
const groupedByCategory = dataset.reduce((acc, item) => {
  const { category } = item;
  acc[category] = acc[category] || [];
  acc[category].push(item);
  return acc;
}, {});

console.log("Filtered Electronics:", topElectronics);
console.log("Summaries:", itemSummaries);
console.log("Total Price:", `$${totalPrice.toFixed(2)}`);


const renderProducts = (items) => {
  const container = document.getElementById("product-container");
  if (!container) return;

  container.innerHTML = items
    .map(
      ({ title, category, price, rating }) => `
      <div class="product-card">
        <h3>${title}</h3>
        <p>Category: ${category} | Price: $${price.toFixed(2)} | Rating: ⭐ ${rating}</p>
      </div>
    `
    )
    .join("");
};

const setupInteractiveComponent = () => {
  const filterBtn = document.getElementById("filter-btn");
  const categorySelect = document.getElementById("category-select");

  if (!filterBtn || !categorySelect) return;

  renderProducts(dataset);

  filterBtn.addEventListener("click", () => {
    const selectedCategory = categorySelect.value;
    const filtered =
      selectedCategory === "All"
        ? dataset
        : dataset.filter(({ category }) => category === selectedCategory);

    renderProducts(filtered);
  });
};

document.addEventListener("DOMContentLoaded", setupInteractiveComponent);