const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#FF8C33", "#33FFDD", "#FF3333", "#33FF88", "#FF3380",
    "#FF5733", "#5733FF", "#33FFB5", "#FF9633", "#8C33FF",
    "#33B8FF", "#FF3357", "#88FF33", "#D633FF", "#FF33D6",
    "#33A1FF", "#FF8033", "#5733A1", "#33FF4C", "#FF3380",
    "#B533FF", "#FF33B5", "#3357A1", "#FF33DD", "#5733D6",
    "#33FF99", "#A1FF33", "#33FFD6", "#FF5733", "#33FF80",
    "#FF3380", "#33A1B5", "#D6FF33", "#FF33A1", "#33FF4C",
    "#FF3357", "#33FF99", "#33A1FF", "#B533FF", "#FF33DD",
    "#5733A1", "#33FFD6", "#FF9633", "#D633FF", "#33FF80"
];

let currentColorIndex = 0;

function changeColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Change color on spacebar press
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        changeColor();
    }
});

// Change color on touch
document.addEventListener("touchstart", changeColor);
