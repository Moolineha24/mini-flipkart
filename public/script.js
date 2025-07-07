// Fetch products and display them
fetch('/api/products')
  .then(res => res.json())
  .then(data => {
    displayProducts(data);

    // Search functionality
    document.getElementById('search').addEventListener('input', function () {
      const keyword = this.value.toLowerCase();
      const filtered = data.filter(product =>
        product.name.toLowerCase().includes(keyword)
      );
      displayProducts(filtered);
    });
  });

function displayProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = '';

  products.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹ ${product.price}</p>
        <button onclick="orderProduct('${product.name}', ${product.price})">Order Now</button>
      </div>
    `;
  });
}

// ✅ WhatsApp order function
function orderProduct(name, price) {
  const whatsappNumber = '91XXXXXXXXXX'; // 🔁 Replace with your phone number
  const message = `Hi! I want to order ${name} for ₹${price}`;
  const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(link, '_blank');
}
