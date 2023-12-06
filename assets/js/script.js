'use strict';


// Find the elements by their respective IDs or classes
const cartButton = document.getElementById('cartButton');
const addToCartButtons = document.querySelectorAll('.addToCartBtn');
const cartLink = document.getElementById('cartLink'); // para sa link ng cart view


// Function to update cart count and show notification
function addToCart() {
  const cartCount = document.querySelector('.btn-badge');
  let currentCount = parseInt(cartCount.textContent);
  cartCount.textContent = currentCount + 1;

  // Display notification or alert to indicate the addition to the cart
  alert('Item added to cart!');
}

// para sa link ng cart view <
cartLink.addEventListener('click', function(event) {
  // This prevents the default behavior of the anchor tag (preventing navigation)
  event.preventDefault();

  // Replace "your_cart_page_url_here" with the URL of your cart page
  window.location.href = 'pig/inside cart view/responsive-shopping-cart/dist/index.html';
});// // para sa link ng cart view >



// Add event listeners to each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});












/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

