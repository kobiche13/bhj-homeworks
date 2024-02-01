const xhr = new XMLHttpRequest();
const form = document.getElementById('signin__form');  
const userId = document.getElementById('user_id');
const authWindow = document.getElementById('signin');
const welcomeText = document.getElementById('welcome');
const checkLocalStorage = localStorage.getItem('id')
const closeAuth = document.getElementById('closeAuth');
if(checkLocalStorage !== null){
    check();
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = "json";
    const formData = new FormData(event.currentTarget);
    xhr.send(formData);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE  && xhr.response.success === true) {                
            localStorage.setItem('id', xhr.response.user_id);
            check();
        } else if (xhr.response.success === false){
            alert('Неверный логин/пароль');
            form.reset();
        }
    }   
})

closeAuth.addEventListener('click', function(event){
    localStorage.removeItem('id');
    authWindow.classList.add('signin_active');
    welcomeText.classList.remove('welcome_active');
})

function check(){
    authWindow.classList.remove('signin_active');
    welcomeText.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('id');
}



