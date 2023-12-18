const book = document.querySelector('.book__control_font-size');
const bookList = document.getElementById('book');

book.addEventListener('click', function(event){
    if(event.target.classList.contains('font-size')){
        for(let i = 0; i < book.children.length; i++){
            book.children[i].classList.remove('font-size_active');
        }
        event.target.classList.add('font-size_active');
        if(event.target.classList.contains('font-size_small')){
            bookList.classList.remove('font-size_big');
            bookList.classList.add('font-size_small');
        } else if(event.target.classList.contains('font-size_big')){
            bookList.classList.remove('font-size_small');
            bookList.classList.add('font-size_big');
        } else {
            bookList.classList.remove('font-size_small');
            bookList.classList.remove('font-size_big');
        }
    }
    event.preventDefault();
})