let color = "black";
let drawMode = false;
let eraseMode = false;

createCanvas();
writeSlider()

// Event listeners

document.querySelector("#selectColor").addEventListener("click", selectColorFunction)
document.querySelector("#eraser").addEventListener("click", eraserFunction);
document.querySelector("#clear").addEventListener("click", clearCanvas);
document.querySelector("input[type='range']").addEventListener("change", writeSlider)

window.addEventListener("keydown", (event) => {
    if (event.key === "d") {
        const targetNode = document.querySelector("#drawMode");
        if (!drawMode) {
            targetNode.textContent = "Draw Mode: On";
        } else {
            targetNode.textContent = "Draw Mode: Off";
        }
        drawMode = !drawMode;
    }
})

// Functions

function onHover() {
    if (!drawMode && !eraseMode) {
        return;
    } else {
        this.style.backgroundColor = color;
    }
}

function createCanvas(sliderValue) {
    const parentNode = document.querySelector("#canvas");
    const divWidth = parentNode.getBoundingClientRect().width / sliderValue + "px";
    parentNode.innerHTML = "";
    let i = 0;
    while (i < sliderValue ** 2) {
        let div = document.createElement("div");
        div.addEventListener("pointermove", onHover);
        div.style.width = divWidth;
        div.style.height = divWidth;
        div.classList.add("box");
        parentNode.appendChild(div);
        i++;
    }
}

function selectColorFunction() {
    eraseMode = false;
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
    eraseMode = true;
    color = "white";
}

function clearCanvas() {
    document.querySelectorAll(".box").forEach(x => x.style.backgroundColor = "white");
}

function writeSlider() {
    const slider = document.querySelector("#slider");
    let sliderValue = slider.children[0].value;
    const parentNodeWidth = document.querySelector("#canvas").getBoundingClientRect().width;
    while (parentNodeWidth % sliderValue !== 0) { // eliminate float numbers
        sliderValue--;
    }
    slider.children[1].textContent = sliderValue;
    createCanvas(sliderValue);
}