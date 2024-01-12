const productCounter = document.querySelector('.products');
let basketFind;
let checkElementInBasket;
let coordinatesClone;
let cloneElement;
const btn = document.getElementById('clear__basket');
const cart = document.querySelector('.cart');
productCounter.addEventListener('click', function(event) {
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
        if (basketCheck.length > 0) { //если корзина не пуста                                                
            basketFind = basketCheck.find((element) => {
                    if (element.getAttribute('data-id') === atr) {
                        return element; //возвращаем элемент с данным атрибутом
                    }
                })
                //нужно найти этот элемент
            checkElementInBasket = basketCheck.indexOf(basketFind);
            if (checkElementInBasket !== -1) {
                basketCheck[checkElementInBasket].lastChild.textContent = (+basketCheck[checkElementInBasket].lastChild.textContent + counter);
                 
            } else {
                basket.insertAdjacentHTML('beforeend', '<div class="cart__product" data-id=' + atr + '><img class="cart__product-image" src=' + srcImageValue + '><div class="cart__product-count">' + counter + '</div></div>');
                setInterval(( ) =>{
                    let cloneImage = event.target.closest('.product__controls').previousElementSibling.cloneNode(false);
                    event.target.closest('.product__controls').previousElementSibling.insertAdjacentElement('afterend',cloneImage);/*x.cloneNode(false) / x.insertAdjacentElement('afterend',y) - добавление копии элемента*/ 
                    cloneElement = event.target.closest('.product__controls').previousElementSibling;
                    event.target.closest('.product__controls').previousElementSibling.style.position = 'absolute';
                    coordinatesClone = event.target.closest('.product__controls').previousElementSibling.getBoundingClientRect();
                    const end = 210;
                    const start = coordinatesClone.top;
                    const duration = 2000;
                    const speed = 60/1000;                
                    const stepsCount = duration * speed;
                    const stepSize = (end - start) / stepsCount;
                    if (coordinatesClone.top > end){
                        cloneElement.style.top = coordinatesClone.top + stepSize + 'px';
                    }
                }, 60/1000)      
            }
        } else {
            basket.insertAdjacentHTML('beforeend', '<div class="cart__product" data-id=' + atr + '><img class="cart__product-image" src=' + srcImageValue + '><div class="cart__product-count">' + counter + '</div></div>');
            cart.style.display = 'block';
            
            setInterval(( ) =>{
                coordinatesClone = event.target.closest('.product__controls').previousElementSibling.getBoundingClientRect();
                const end = 10;
                const start = 240;
                const duration = 2000;
                const speed = 60/1000;                
                const stepsCount = duration * speed;
                const stepSize = (end - start) / stepsCount;
                
                cloneElement.style.top = coordinatesClone.top + stepSize;
            }, 1000)    
        }
    }
})
btn.addEventListener('click', function(event) {
    let basket = document.querySelector('.cart__products');
    while (basket.firstChild) {
        basket.removeChild(basket.firstChild);
    }
    cart.style.display = '';
})
