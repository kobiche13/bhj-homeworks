const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (event) {
        progress.value = (event.loaded / event.total).toFixed(2);

    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(event.currentTarget);
    console.log(formData)
    xhr.send(formData);
})