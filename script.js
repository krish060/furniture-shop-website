let closer = document.querySelector('#closer');
let navbar = document.querySelector('.navbar');
let cart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let banner = document.querySelector('.banner'); // Add this line to select the banner section

closer.onclick = () => {
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    banner.style.display = 'none'; // Add this line to hide the banner section
}

document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle('active');
}

document.getElementById('cart-btn').addEventListener('click', function() {
    const shoppingCart = document.getElementById('shoppingCart');
    shoppingCart.style.display = shoppingCart.style.display === 'none' ? 'block' : 'none';
    updateCartSummary();
});

function updateCartSummary() {
    const cartItems = document.querySelectorAll('.shopping-cart .box');
    let totalPrice = 0;
    let totalItems = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        totalPrice += price * quantity;
        totalItems += quantity;
    });

    document.getElementById('totalPrice').innerText = `$${totalPrice.toFixed(2)}`;
    document.getElementById('totalItems').innerText = totalItems;
}




document.querySelector('#login-btn').onclick = () => {
    closer.style.display = "block";
    loginForm.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    
    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Optional: Auto slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);
});


function handleResize() {
    if (window.innerWidth < 768) {
        // Example: Hide some elements or adjust layout for smaller screens
    } else {
        // Example: Show elements or adjust layout for larger screens
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Call once on load
