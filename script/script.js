let color = "black"

createCanvas();

// Event listeners

document.querySelector("#selectColor").addEventListener("click", selectColorFunction)
document.querySelector("#eraser").addEventListener("click", eraserFunction);
document.querySelector("#clear").addEventListener("click", clearCanvas);


function onHover() {
    this.style.backgroundColor = color;
}

function createCanvas() {
    const parentNode = document.querySelector("#canvas");
    let i = 0;
    while (i < 16 ** 2) {
        let div = document.createElement("div");
        div.addEventListener("pointermove", onHover);
        div.classList.add("box");
        parentNode.appendChild(div);
        i++;
    }
}

function selectColorFunction() {
    const colorInput = document.createElement("input");
    colorInput.setAttribute("type", "color");
    colorInput.value = color;
    colorInput.click();
    colorInput.addEventListener("input", setColor);
}

function setColor(event) {
    const newColor = event.target.value;
    document.querySelector(".fa.fa-pencil").style.color = newColor;
    color = newColor;
}

function eraserFunction() {
    color = "white";
}

function clearCanvas() {
    document.querySelectorAll(".box").forEach(x => x.style.backgroundColor = "white");
}

function selectColor() {

}