let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send();
xhr.responseType = "arraybuffer"
const items = document.getElementById('items')
xhr.onreadystatechange = function () {
    
        
    
        /*items.insertAdjacentHTML('beforeend','<div class="item__code">' + xhr.responseText.CharCode*/
    

}