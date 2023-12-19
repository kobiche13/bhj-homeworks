
const rotator = Array.from(document.querySelectorAll('.rotator'));

for (let  j = 0; j < rotator.length; j++){
    let i = 0;
    setInterval(() =>{          
        if (i !== rotator[j].children.length - 1){
            rotator[j].children[i].classList.remove('rotator__case_active');
            rotator[j].children[i+1].classList.add('rotator__case_active');            
            i = (i+1) % rotator[j].children.length;           
        } else {
            rotator[j].children[i].classList.remove('rotator__case_active');
            i = (i+1) % rotator[j].children.length; 
            rotator[j].children[i].classList.add('rotator__case_active');
        } 
    }, 1000)

}

   
