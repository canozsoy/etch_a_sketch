let color = "black"

createCanvas();
writeSlider()

// Event listeners

document.querySelector("#selectColor").addEventListener("click", selectColorFunction)
document.querySelector("#eraser").addEventListener("click", eraserFunction);
document.querySelector("#clear").addEventListener("click", clearCanvas);
document.querySelector("input[type='range']").addEventListener("change", writeSlider)


function onHover() {
    this.style.backgroundColor = color;
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

function writeSlider() {
    const slider = document.querySelector("#slider");
    const sliderValue = slider.children[0].value;
    slider.children[1].textContent = sliderValue;
    console.log(sliderValue)
    createCanvas(sliderValue);
}