const tasksInput = document.querySelector('.tasks__input');
const tasksRemove = document.querySelectorAll('.task__remove');
const tasksList = document.querySelector('.tasks__list');
let removeElement;
const btn = document.querySelector('.tasks__add');
const form = document.forms[0];

btn.addEventListener('click', function(event) {
    event.preventDefault();
    if (tasksInput.value.trim()) {
        tasksList.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title">' + tasksInput.value + '</div><a href="#" class="task__remove">&times;</a></div>');
        tasksInput.value = '';
    }
})
tasksList.addEventListener('click', function(event) {
    event.preventDefault();
    if(event.target.classList.contains('task__remove')){
        removeElement = event.target.closest('.task');
        removeElement.remove();
    }
})