// Add food items to shopping cart

function addToCart(name, price) {

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart successfully!");
}
// RESERVATION FORM

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value;
        const date = document.getElementById("bookingDate").value;

        document.getElementById("bookingMessage").textContent =
            "Thank you " + name +
            "! Your reservation request for " + date +
            " has been received.";

        reservationForm.reset();
    });
}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("contactStatus").textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();
    });
}
// DISPLAY CART ITEMS

function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItems = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");

    if (!cartItems || !totalAmount) return;

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h3>Your cart is empty!</h3>";
        totalAmount.textContent = "0";
        return;
    }

    cart.forEach((item, index) => {

        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;

        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price} each</p>
                </div>

                <div class="quantity-controls">

                    <button onclick="changeQuantity(${index}, -1)">−</button>

                    <span>${quantity}</span>

                    <button onclick="changeQuantity(${index}, 1)">+</button>

                    <button class="remove-btn"
                        onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

                <h3>₹${itemTotal}</h3>

            </div>
        `;
    });

    totalAmount.textContent = total;
}


// CHANGE QUANTITY

function changeQuantity(index, change) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity = (cart[index].quantity || 1) + change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// REMOVE ITEM

function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// CLEAR CART

function clearCart() {

    localStorage.removeItem("cart");

    displayCart();
}


// CHECKOUT

function checkout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for choosing Spice & Spoon! Your demo order has been placed.");

    localStorage.removeItem("cart");

    displayCart();
}


// LOAD CART WHEN PAGE OPENS

displayCart();
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart successfully!");
}