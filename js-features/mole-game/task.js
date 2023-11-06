const getHole = (index) => document.getElementById(`hole${index}`);
let checkWin = document.getElementById("dead");
let checkLoss = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    let valueHole = getHole(i);
    valueHole.addEventListener("click", function eventHandling() {
        if (valueHole.className === "hole hole_has-mole") {
            checkWin.textContent++;
        } else {
            checkLoss.textContent++;
        }

        if (checkWin.textContent === "10") {
            alert("Ура, ты победил!");
            checkWin.textContent = 0;
            checkLoss.textContent = 0;
        } else if (checkLoss.textContent === "5") {
            alert("Ты проиграл!Попробуй ещё раз");
            checkWin.textContent = 0;
            checkLoss.textContent = 0;
        }
    });
}
