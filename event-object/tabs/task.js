let parentElement = document.querySelector('body');
let navigationMenu = Array.from(document.getElementsByClassName('tab'));
let navigationMenuContent = Array.from(document.getElementsByClassName('tab__content'));
let indexTab;

parentElement.addEventListener('click', function(event){    
    navigationMenu.forEach(item =>{
        item.classList.remove('tab_active');
    })
    if(event.target.classList.contains('tab')){
        
        event.target.classList.add('tab_active');
        indexTab = navigationMenu.indexOf(event.target);
        navigationMenuContent.forEach(item =>{
            item.classList.remove('tab__content_active');
        })
        navigationMenuContent[indexTab].classList.add('tab__content_active');
    }
})
