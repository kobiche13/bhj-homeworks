const editor = document.getElementById('editor');
const btn = document.getElementById('btn');
editor.value = localStorage.getItem('textAreaValue');

editor.addEventListener('input', function(event){      
    if(editor.value.trim()){        
        localStorage.setItem('textAreaValue', editor.value);    
    } else if(editor.value === ''){
        localStorage.removeItem('textAreaValue');
    }
})

btn.addEventListener('click',function(event){
    if(event.target.classList.contains('card__btn')){
        editor.value = '';
        localStorage.removeItem('textAreaValue');
    } 
})

