// script.js

// Fonction Menu Hamburger
function toggleMenu() {
    const overlay = document.getElementById('menu-overlay');
    overlay.classList.toggle('active');
}

// Fonction Ajouter au panier
function addToCart(name, price, image, btnElement) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Feedback visuel pour mobile (on passe le bouton en paramètre pour éviter les bugs sur mobile)
    if(btnElement) {
        btnElement.style.opacity = '0.5';
        setTimeout(() => btnElement.style.opacity = '1', 300);
    }
    
    updateBadge();
    updateCartCount();
    updateMiniTotal(); // AJOUT IMPORTANT : Met à jour le prix dans la barre flottante
}

// Mise à jour du badge sur le bouton flottant
function updateBadge() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const badge = document.getElementById('cart-badge');
    const bar = document.getElementById('floating-cart');
    
    if(badge) {
        badge.innerText = cart.length;
        // Si le panier est vide, on cache le badge
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    }
    // AJOUT IMPORTANT : On cache la barre flottante si le panier est vide (sauf si on est sur la page panier)
    if(bar && !window.location.href.includes('cart.html')) {
        bar.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

// Mise à jour du compteur dans le menu mobile
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElem = document.getElementById('mobile-cart-count');
    if(countElem) countElem.innerText = cart.length;
}

// AJOUT IMPORTANT : Mise à jour du prix total dans la barre flottante
function updateMiniTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach(item => total += item.price);
    const totalElem = document.getElementById('cart-total-mini');
    if(totalElem) totalElem.innerText = total + " F";
}
