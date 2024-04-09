const keyElems = document.querySelectorAll(".button");
const display = document.querySelector(".results");

for (let i = 0; i < keyElems.length; i++) {
    const curElem = keyElems[i];

    curElem.addEventListener('click', function() {
        const valore = curElem.textContent;

        
        if (!isNaN(valore) || valore === "0") {
            if (display.textContent === "0") {
                display.textContent = valore;
            } else {
                display.textContent += valore;
            }
        }
    });
}