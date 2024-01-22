const productCounter = document.querySelector('.products');
let basketFind;
let checkElementInBasket;
let coordinatesClone;
let cloneElement;
let imageStart;
let imageEnd;

const btn = document.getElementById('clear__basket');
const cart = document.querySelector('.cart');
productCounter.addEventListener('click', function (event) {
    if (event.target.classList.contains('product__quantity-control_dec') && +event.target.nextElementSibling.innerText > 1) {
        +event.target.nextElementSibling.innerText--;
    } else if (event.target.classList.contains('product__quantity-control_inc')) {
        +event.target.previousElementSibling.innerText++;
    } else if (event.target.classList.contains('product__add')) {
        let atr = event.target.closest('.product').getAttribute('data-id'); //при клике получаем номер атрибута
        let srcImageValue = event.target.closest('.product__controls').previousElementSibling.src; //получаем ссылку на изображение        
        let counter = +event.target.previousElementSibling.childNodes[3].textContent; // получаем кол-во
        let basket = document.querySelector('.cart__products'); //получаем корзину
        let basketCheck = Array.from(basket.children); //содержимое корзины             
        basketFind = basketCheck.find((element) => {
            if (element.getAttribute('data-id') === atr) {
                return element; //возвращаем элемент с данным атрибутом
            }
        })
        //нужно найти этот элемент
        checkElementInBasket = basketCheck.indexOf(basketFind);
        if (checkElementInBasket !== -1) {
            basketCheck[checkElementInBasket].lastChild.textContent = (+basketCheck[checkElementInBasket].lastChild.textContent + counter);
            imageEnd = basketCheck[checkElementInBasket].getBoundingClientRect();//конечные координаты            
            animation();
        } else {
            basket.insertAdjacentHTML('beforeend', '<div class="cart__product" data-id=' + atr + '><img class="cart__product-image" src=' + srcImageValue + '><div class="cart__product-count">' + counter + '</div></div>');
            cart.style.display = 'block';
        }
    }
})
btn.addEventListener('click', function (event) {
    let basket = document.querySelector('.cart__products');
    while (basket.firstChild) {
        basket.removeChild(basket.firstChild);
    }
    cart.style.display = '';
})

function animation() {
    let cloneImage = event.target.closest('.product__controls').previousElementSibling.cloneNode(false);
    event.target.closest('.product__controls').previousElementSibling.insertAdjacentElement('afterend', cloneImage);
    event.target.closest('.product__controls').previousElementSibling.style.position = 'absolute';
    cloneElement = event.target.closest('.product__controls').previousElementSibling;

    const intervalId = setInterval(() => {
        imageStart = cloneElement.getBoundingClientRect();//начальные координаты
        const endTop = imageEnd.top;
        const startTop = imageStart.top;
        const endLeft = imageEnd.left;
        const startLeft = imageStart.left;
        const duration = 300;
        const speed = 60 / 1000;
        const stepsCount = duration * speed;
        const stepSizeTop = (endTop - startTop) / stepsCount;
        const stepSizeLeft = (startLeft - endLeft) / stepsCount;
        if (imageStart.top > endTop && imageStart.left < endLeft) {
            cloneElement.style.top = imageStart.top + stepSizeTop + 'px';
            cloneElement.style.left = imageStart.left - stepSizeLeft + 'px';
        } else {
            clearInterval(intervalId);
            cloneElement.remove();
        }
    }, 60/1000)
}