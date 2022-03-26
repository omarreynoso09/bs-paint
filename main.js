const gridWidth = 80;

const canvas = document.querySelector(".canvas");

let count = 0;
while (count < gridWidth * gridWidth) {
  const div = document.createElement("div");
  div.className = "square color-5";
  canvas.appendChild(div);
  count++;
}

const app = document.querySelector(".app");
const colorSelector = document.querySelector(".palette");
const colorSelector2 = document.querySelector(".palette2");
const currentBrush = document.querySelector(".current-brush");
const currentBrush2 = document.querySelector(".current-brush");
const body = document.querySelector("body");
const darkModeButton = document.querySelector(".dark-mode-button");
const headings = document.querySelector(".headings");
const icon = document.querySelector(".icon");
const brushIcon = document.querySelector(".brush-icon");
const fillIcon = document.querySelector(".fill-icon");
const currentFill = document.querySelector(".current-fill");
const currentFill2 = document.querySelector(".current-fill");
const square = document.querySelectorAll(".canvas .square");

darkModeButton.style.cursor = "crosshair";
colorSelector.style.cursor = "pointer";
colorSelector2.style.cursor = "pointer";
brushIcon.style.cursor = "crosshair";
fillIcon.style.cursor = "crosshair";
canvas.style.cursor = "crosshair";

//! Set clicked to false for drag paint
let clicked = false;

//! When a color from palette is clicked it changes the brush class to that class
//! which sets the background color to the selected palette-color background-color
const newBrush = colorSelector.addEventListener("click", function (event) {
  const currentColor = currentBrush.classList[1];

  if (event.target.localName === "div") {
    currentBrush.classList.replace(currentColor, event.target.classList[1]);
    currentFill.classList.replace(
      currentFill.classList[1],
      event.target.classList[1]
    );
  }

  //! if the palette-color is black invert the brush and fill icons else inverts them back to normal
  if (currentBrush.classList[1] === "color-11") {
    brushIcon.style.filter = "invert(1)";
    fillIcon.style.filter = "invert(1)";
  } else {
    brushIcon.style.filter = "invert(0)";
    fillIcon.style.filter = "invert(0)";
  }
});

//! When the canvas is clicked on it changes the square's in the canvas class to that of the brush
const paint = canvas.addEventListener("click", function (event) {
  const currentColor = currentBrush.classList[1];
  const square = event.target.classList[1];

  if (event.target.localName === "div") {
    event.target.classList.replace(square, currentColor);
  }
});

//! When the fill icon is clicked on it changes the all the squares in the canvas to the fill's class
const fill = currentFill.addEventListener("click", function () {
  const currentColor = currentFill.classList[1];

  for (let i = 0; i < gridWidth * gridWidth; i++) {
    square[i].classList.replace(square[i].classList[1], currentColor);
  }
});

//! When mouseDown turns click true
const mouseDown = document.addEventListener("mousedown", function () {
  clicked = true;
});

//! When mouseUp turns click false
const mouseUp = document.addEventListener("mouseup", function () {
  clicked = false;
});

//! paintDrag continues if click is true;
const paintDrag = canvas.addEventListener("mousemove", function (event) {
  const currentColor = currentBrush.classList[1];
  const square = event.target.classList[1];

  if (clicked === true) {
    if (event.target.localName === "div") {
      event.target.classList.replace(square, currentColor);
    }
  }
});

//! When the dark mode button is clicked it inverts everything in the body
const changeTheme = darkModeButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});

const paletteIcon = document.querySelector(".palette2 .palette-icon");
const palette2Colors = document.querySelectorAll(".palette2 .palette-color");

//! When a color from palette2 is clicked it changes the brush class to that class
//! which sets the background color to the selected palette-color background-color
const newBrush2 = colorSelector2.addEventListener("click", function (event) {
  const currentBrushColor = currentBrush.style.backgroundColor;
  const currentColor = currentBrush.classList[1];

  if (event.target.classList[0] === "palette-color") {
    currentBrush.classList.replace(currentColor, event.target.classList[1]);
    currentFill.classList.replace(
      currentFill.classList[1],
      event.target.classList[1]
    );
  }

  if (currentBrush.classList[1] === "color-11") {
    brushIcon.style.filter = "invert(1)";
    fillIcon.style.filter = "invert(1)";
  } else {
    brushIcon.style.filter = "invert(0)";
    fillIcon.style.filter = "invert(0)";
  }
});
const slider = document.getElementById("myRange");
const output = document.querySelectorAll(".slidevalue");
output.forEach((x) => (x.innerText = slider.value));

slider.oninput = function () {
  output.forEach((x) => (x.innerText = slider.value));
  gridWidth(slider.value);
};
