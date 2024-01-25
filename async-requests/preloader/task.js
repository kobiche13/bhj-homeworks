let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send();
xhr.responseType = "json";
const items = document.getElementById('items');
const loader = document.getElementById('loader');

xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
                let arrayCurrency = Object.entries(xhr.response.response.Valute);
                arrayCurrency.forEach(element => {
                        loader.classList.remove('loader_active');
                        items.insertAdjacentHTML('beforeend', '<div class="item"><div class="item__code">' + element[1].CharCode + '</div> <div class="item__value">' + element[1].Value + '</div><div class="item__currency"> руб. </div></div>')
                });                           
        }
}