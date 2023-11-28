let dropDown = Array.from(document.getElementsByClassName('dropdown__value'));//должно меняться
let dropDownList = Array.from(document.getElementsByClassName('dropdown__list'));
let dropDownListItem = Array.from(document.getElementsByClassName('dropdown__item'));
let dropDownLink = Array.from(document.getElementsByClassName('dropdown__link'));
let checkDropDown = false;

for (let i = 0; i < dropDown.length ; i++){
    dropDown[i].addEventListener('click', function(event){
        
        if (checkDropDown){
            dropDownList[i].classList.remove('dropdown__list_active');
            checkDropDown = false;
        } else{
            dropDownList[i].classList.add('dropdown__list_active');
            checkDropDown = true;
        }  
    })

    dropDownList[i].addEventListener('click', function(event){
        if (event.target.className === 'dropdown__link'){
            dropDown[i].textContent = event.target.textContent ;
        }
        dropDownList[i].classList.remove('dropdown__list_active');
        event.preventDefault(); 
    })  
} 




