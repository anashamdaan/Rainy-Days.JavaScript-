const productsContainer = document.getElementById('products');
const basketContainer = document.getElementById('basketItems');



const products = [
    {
      id: 1,
      name: "Rainy Days Akra Jacket",
      description: "The Women's Rainy Days Akra jacket is bound to be your new go-to water-repellent rain jacket.",
      gender: "Female",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      baseColor: "Red",
      price: 129.99,
      discountedPrice: 119.99,
      onSale: true,
      image: "https://static.cloud.noroff.dev/api/rainy-days/0-akra-jacket.jpg",
      tags: ["jacket", "womens"],
      favorite: true
    },
    {
      id: 2,
      name: "Rainy Days M83 Jacket",
      description: "The Women's Rainy Days M83 jacket delivers waterproof, breathable protection from head to waist. Perfect for the adventure seekers.",
      gender: "Female",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      baseColor: "Black",
      price: 109.99,
      discountedPrice: 99.99,
      onSale: true,
      image: "https://static.cloud.noroff.dev/api/rainy-days/1-m83-jacket.jpg",
      tags: ["jacket", "womens"],
      favorite: true
    },
    {
      id: 3,
      name: "Rainy Days Boulder Jacket",
      description: "This lightweight jacket keeps you dry on rainy days, while maintaining breathability.",
      gender: "Male",
      sizes: ["M", "L", "XL", "XXL"],
      baseColor: "Green",
      price: 149.99,
      discountedPrice: 139.99,
      onSale: false,
      image: "https://static.cloud.noroff.dev/api/rainy-days/2-boulder-jacket.jpg",
      tags: ["jacket", "mens"],
      favorite: false
    },
    {
      id: 4,
      name: "Rainy Days Kids Jacket",
      description: "Keep your kids dry and happy with this fun and functional rain jacket.",
      gender: "Unisex",
      sizes: ["S", "M", "L"],
      baseColor: "Yellow",
      price: 69.99,
      discountedPrice: 59.99,
      onSale: true,
      image: "https://static.cloud.noroff.dev/api/rainy-days/0-akra-jacket.jpg",
      tags: ["jacket", "kids"],
      favorite: false
    }
    
  ];
  

  const basket = [];

function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-basket-button" onclick="addToBasket(${product.id})">Add to Basket</button>
            </div>
        `;

        const productImage = productCard.querySelector('.product-image');
        productImage.addEventListener('click', function () {
            window.location.href = `detaill-product.html?id=${product.id}`;
        });

        productsContainer.appendChild(productCard);
    });
}

function addToBasket(productId) {
    const product = products.find(p => p.id === productId);
    basket.push(product);
    displayBasket();
}

function displayBasket() {
    basketContainer.innerHTML = '';
    basket.forEach(item => {
        const basketItem = document.createElement('div');
        basketItem.className = 'basket-item';
        basketItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromBasket(${item.id})">Remove</button>
        `;
        basketContainer.appendChild(basketItem);
    });
}

function removeFromBasket(productId) {
    const index = basket.findIndex(item => item.id === productId);
    if (index !== -1) {
        basket.splice(index, 1);
        displayBasket();
    }
}

function proceedToCheckout() {
    window.location.href = 'checkout.html';
}

displayProducts();
