const element = Array.from(document.querySelectorAll('.reveal'));
let value = undefined;

window.addEventListener('scroll', () => {
    for (let i = 0; i < element.length; i++){
        value =  element[i].getBoundingClientRect();
        if (value.bottom < 0){
            element[i].classList.remove('reveal_active');
            
        } else if (value.top > window.innerHeight){
            element[i].classList.remove('reveal_active');
            
        } else {
            element[i].classList.add('reveal_active');
            
        }
    }
})
