/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav_toggle')
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart')
const cartShop = document.getElementById('cart-shop');
const cartClose = document.getElementById('cart_close');


/*===== CART SHOW =====*/
/* Validate if constant exists */


cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart')
})

/*===== CART HIDDEN =====*/
/* Validate if constant exists */

cartClose.addEventListener('click', () => {
    cart.classList.remove('show-cart')
})
/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login')
const loginButton = document.getElementById('login-button')
const loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */

loginButton.addEventListener('click', () => {
    login.classList.add('show-login');
})

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login');
    })
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        cl: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)
/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/

// Sitebar Cart

let cart_amount_number = document.querySelector('#cart_amount_number');
let cart_item_1 = document.querySelector('#cart_item_1');
let cart_item_3 = document.querySelector('#cart_item_3');
let cart_item_2 = document.querySelector('#cart_item_2');
let siteBar_plus = document.querySelector('#siteBar_plus');
let siteBar_minus = document.querySelector('#siteBar_minus');

let total_amount = parseInt(cart_item_1.innerText) + parseInt(cart_item_2.innerText) + parseInt(cart_item_3.innerText) + parseInt(document.getElementById('cart_total_price').innerText)
console.log(`Default total amount${total_amount}`)

document.getElementById('cart_total_price').innerText = total_amount
let counter = 1;
siteBar_plus.addEventListener('click', () => {
    counter++;
    cart_amount_number.innerHTML = counter;
    cart_item_1.innerHTML = 12 * counter;
    total_amount = total_amount + 12
    console.log(total_amount)

    document.getElementById('cart_total_price').innerText = total_amount
});

siteBar_minus.addEventListener('click', () => {
    counter--;
    if (counter == 0) {
        counter = 1;
        cart_amount_number.innerHTML = counter;
        cart_item_1.innerHTML = 12 * counter;
    } else {
        cart_amount_number.innerHTML = counter;
        cart_item_1.innerHTML = 12 * counter;

        total_amount = total_amount - 12

        document.getElementById('cart_total_price').innerText = total_amount
    }
});



let cart_amount_number_2 = document.querySelector('#cart_amount-number_2');
let siteBar_plus_2 = document.querySelector('#siteBar_plus_2');
let siteBar_minus_2 = document.querySelector('#siteBar_minus_2');

let counter_2 = 1;

siteBar_plus_2.addEventListener('click', () => {
    counter_2++;
    cart_amount_number_2.innerHTML = counter_2;
    cart_item_2.innerHTML = 16 * counter_2

    total_amount = total_amount + 16

    console.log(total_amount)

    document.getElementById('cart_total_price').innerText = total_amount
});

siteBar_minus_2.addEventListener('click', () => {
    counter_2--;

    if (counter_2 == 0) {
        counter_2 = 1;
        cart_item_2.innerHTML = '$' + 16 * counter_2;
        cart_amount_number_2.innerHTML = counter_2;
    } else {
        cart_amount_number_2.innerHTML = counter_2;
        cart_item_2.innerHTML = '$' + 16 * counter_2

        total_amount = total_amount - 16

        document.getElementById('cart_total_price').innerText = total_amount
    }
})




let cart_amount_number_3 = document.querySelector('#cart_amount_number_3');
let siteBar_plus_3 = document.querySelector('#siteBar_plus_3');
let siteBar_minus_3 = document.querySelector('#siteBar_minus_3');


let counter_3 = 1;

siteBar_plus_3.addEventListener('click', () => {
    counter_3++;
    cart_amount_number_3.innerHTML = counter_3
    cart_item_3.innerHTML = 20 * counter_3

    total_amount = total_amount + 20

    document.getElementById('cart_total_price').innerText = total_amount
    console.log(total_amount)
});

siteBar_minus_3.addEventListener('click', () => {
    counter_3--;
    if (counter_3 == 0) {
        counter_3 = 1;
        cart_amount_number_3.innerHTML = counter_3
        let item3Price = cart_item_3.innerHTML = '$' + 20 * counter_3;
        console.log(item3Price);
    } else {
        cart_amount_number_3.innerHTML = counter_3
        cart_item_3.innerHTML = 20 * counter_3

        total_amount = total_amount - 20

        document.getElementById('cart_total_price').innerText = total_amount
    }

})
console.log(`Final total amount ${total_amount}`)










let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let product_counter = document.querySelector('#product_counter');
let product_price = document.querySelector('#product_price')

let details_counter = 1;
plus.addEventListener('click', () => {
    details_counter++;
    console.log(details_counter)
    product_counter.innerHTML = details_counter;
    product_price.innerHTML = '$' + 29 * details_counter;
});

let counterMinus_details = 1;
minus.addEventListener('click', () => {
    details_counter--;

    if (details_counter == 0) {
        details_counter = 1;
        product_counter.innerHTML = details_counter;
        product_price.innerHTML = '$' + 29 * details_counter;
    } else {
        console.log(details_counter);
        product_counter.innerHTML = details_counter;
        product_price.innerHTML = '$' + 29 * details_counter;
    }
})