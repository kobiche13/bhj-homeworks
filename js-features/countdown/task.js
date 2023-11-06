let timerValue = document.getElementById("timer");
let timerId = null;
countDown();
function countDown() {
    timerValue.textContent--;
    if (timerValue.textContent >= 0) {
        timerId = setTimeout(countDown, 1000);
    } else {
        alert("Вы победили в конкурсе!");
        clearTimeout(timerId);
    }
}
