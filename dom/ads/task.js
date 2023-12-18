const rotator = Array.from(document.querySelectorAll('.rotator__case'));
i = 0;
   
setInterval(() =>{  //не знаю как учесть что их несколько на странице    
    if (i !== rotator.length-1){
        rotator[i+1].classList.add('rotator__case_active');
        rotator[i].classList.remove('rotator__case_active');
        i = (i+1) % rotator.length; 
        
    } else {
        rotator[i].classList.remove('rotator__case_active');
        i = (i+1) % rotator.length; 
        rotator[i].classList.add('rotator__case_active');
    } 
}, 1000)

   
