let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send();
xhr.responseType = "json";
const title = document.getElementById('poll__title');
const poll = document.getElementById('poll__answers');

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        title.textContent = xhr.response.data.title;
        xhr.response.data.answers.forEach(element => {
            poll.insertAdjacentHTML('beforeend', '<button class="poll__answer">' + element + '</button>');
        });
    }
}

poll.addEventListener('click', function (event) {
    if (event.target.classList.contains('poll__answer')) {
        alert('Спасибо, ваш голос засчитан!');
    }
})