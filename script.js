// script.js

// Fonction Menu Hamburger
function toggleMenu() {
    const overlay = document.getElementById('menu-overlay');
    overlay.classList.toggle('active');
}

// Fonction Ajouter au panier
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Feedback visuel (vibration de l'écran ou popup)
    updateBadge();
    updateCartCount();
    updateMiniTotal();
    // Petit effet de confirmation sur mobile
    window.navigator.vibrate ? window.navigator.vibrate(10) : null;
}

// Mise à jour du badge sur le bouton flottant
function updateBadge() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const badge = document.getElementById('cart-badge');
    if(badge) {
        badge.innerText = cart.length;
        // On cache la barre si le panier est vide
        const bar = document.getElementById('floating-cart');
        if(bar) bar.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

// Mise à jour du compteur dans le menu mobile
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElem = document.getElementById('mobile-cart-count');
    if(countElem) countElem.innerText = cart.length;
}

// Mise à jour du prix total dans la barre
function updateMiniTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach(item => total += item.price);
    const totalElem = document.getElementById('cart-total-mini');
    if(totalElem) totalElem.innerText = total + " F";
}
