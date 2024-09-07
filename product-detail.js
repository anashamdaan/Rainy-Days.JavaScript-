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
    }
    
];


function loadProduct() {
    const productContainer = document.getElementById('productContainer'); 
    const product = products[0];
    const productHtml = `
        <img src="${product.image}" alt="${product.name}">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <p class="price">$${product.onSale ? product.discountedPrice : product.price}</p>
        <div class="sizes">
            <label for="sizes">Available Sizes:</label>
            <select id="sizes">
                ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
            </select>
        </div>
        <button onclick="addToBasket(${product.id})">Add to Basket</button>
    `;

    productContainer.innerHTML = productHtml;
}

function addToBasket(productId) {
    alert(`Product ${productId} added to the basket!`);
}

window.onload = loadProduct;
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('b8b528fc-6c60-41f6-a5a9-9a8b27a9482a');

const product = products.find(p => p.id == productId);

if (product) {
    document.getElementById('productContainer').innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <p class="price">$${product.onSale ? product.discountedPrice : product.price}</p>
    `;
}
