let checkDropDown = false;
let card = document.querySelector('.card');

card.addEventListener('click', function(event){   
    if (event.target.classList.contains('dropdown__value')){    
        if(checkDropDown){
            event.target.nextElementSibling.classList.remove('dropdown__list_active');
            checkDropDown = false;
        } else {
            event.target.nextElementSibling.classList.add('dropdown__list_active');
            checkDropDown = true;
        }   
    }
})

card.addEventListener('click', function(e){    
    if(e.target.classList.contains('dropdown__link')){
        e.preventDefault();
        e.target.parentElement.parentElement.previousElementSibling.textContent = e.target.textContent ;
        if(checkDropDown){
            e.target.parentElement.parentElement.classList.remove('dropdown__list_active');
            checkDropDown = false;
        } else {
            e.target.parentElement.parentElement.classList.add('dropdown__list_active');
            checkDropDown = true;
        } 
    }
     
})





