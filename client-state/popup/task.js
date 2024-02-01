const popup = document.getElementById('subscribe-modal');
   
if(document.cookie.indexOf('firstVisite=false') == -1){
    popup.classList.add('modal_active')
} 

popup.addEventListener('click', function(event){
    if(event.target.classList.contains('modal__close')){
        popup.classList.remove('modal_active');
        document.cookie = 'firstVisite=false;expires=Fri, 19 Jan 2030 23:59:59 GMT';
    }
})
