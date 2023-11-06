const cookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");
cookie.onclick = function () {
    clickCounter.textContent++;
    if (clickCounter.textContent % 2 !== 0) {
        this.width = this.width * 1.2;
        this.height = this.height * 1.2;
    } else {
        this.width = 200;
        this.height = 128;
    }
};
