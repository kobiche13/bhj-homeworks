let parentElement = document.querySelector('.tabs');
let navigationMenu = Array.from(document.getElementsByClassName('tab'));
let navigationMenuContent = Array.from(document.getElementsByClassName('tab__content'));
let checkMenuContent;
parentElement.addEventListener('click', function(event){
    navigationMenu.forEach(item =>{
        item.classList.remove('tab_active');
    })
    event.target.classList.add('tab_active');
    navigationMenu.forEach((item, index) =>{
        if(item.classList.contains('tab_active')){
            checkMenuContent = index;
        };
    })
    navigationMenuContent.forEach(item =>{
        item.classList.remove('tab__content_active');
    })
    navigationMenuContent[checkMenuContent].classList.add('tab__content_active')
})
