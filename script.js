// script.js

// Fonction Menu Hamburger
function toggleMenu() {
    const overlay = document.getElementById('menu-overlay');
    overlay.classList.toggle('active');
}

// Fonction Ajouter au panier
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Feedback visuel pour mobile
    const btn = event.currentTarget;
    btn.style.opacity = '0.5';
    setTimeout(() => btn.style.opacity = '1', 300);
    
    updateBadge();
    updateCartCount();
}

// Mise à jour du badge sur le bouton flottant
function updateBadge() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const badge = document.getElementById('cart-badge');
    if(badge) {
        badge.innerText = cart.length;
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

// Mise à jour du compteur dans le menu mobile
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElem = document.getElementById('mobile-cart-count');
    if(countElem) countElem.innerText = cart.length;
}
