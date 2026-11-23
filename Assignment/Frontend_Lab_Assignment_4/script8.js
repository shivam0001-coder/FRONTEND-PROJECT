const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        description: "Comfortable headphones with clear sound.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        category: "Electronics",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        description: "A stylish watch for daily use.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        category: "Accessories",
        rating: 4.2,
        inStock: true
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 1799,
        originalPrice: 2499,
        discount: 28,
        description: "Comfortable shoes for running.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        category: "Footwear",
        rating: 4.4,
        inStock: true
    },
    {
        id: 4,
        name: "Travel Backpack",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        description: "A spacious bag for travel and college.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        category: "Bags",
        rating: 4.3,
        inStock: true
    },
    {
        id: 5,
        name: "Digital Camera",
        price: 15999,
        originalPrice: 18999,
        discount: 16,
        description: "A camera to capture your memories.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        category: "Electronics",
        rating: 4.6,
        inStock: true
    },
    {
        id: 6,
        name: "Sunglasses",
        price: 899,
        originalPrice: 1499,
        discount: 40,
        description: "Stylish sunglasses for everyday use.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        category: "Fashion",
        rating: 4.1,
        inStock: true
    },
    {
        id: 7,
        name: "Coffee Maker",
        price: 3499,
        originalPrice: 4499,
        discount: 22,
        description: "Make fresh coffee at home.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
        category: "Home Appliances",
        rating: 4.4,
        inStock: false
    }
];

let cart = [];

function displayProducts() {
    let html = "";

    products.forEach(function(product) {
        html += `
            <div class="card">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>₹${product.price}</p>
                <p><del>₹${product.originalPrice}</del></p>
                <p>${product.discount}% Off</p>
                <p>Rating: ${product.rating}</p>
                <button onclick="addToCart(${product.id})"
                ${product.inStock ? "" : "disabled"}>
                ${product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
            </div>
        `;
    });

    document.getElementById("products").innerHTML = html;
}

function addToCart(id) {
    let product = products.find(function(p) {
        return p.id === id;
    });

    let item = cart.find(function(p) {
        return p.id === id;
    });

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    displayCart();
}

function displayCart() {
    let html = "";
    let total = 0;

    cart.forEach(function(item) {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        html += `
            <div class="cartItem">
                <h4>${item.name}</h4>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: ₹${subtotal}</p>
            </div>
        `;
    });

    document.getElementById("cartItems").innerHTML = html;
    document.getElementById("total").innerHTML = "Total: ₹" + total;
}

displayProducts();