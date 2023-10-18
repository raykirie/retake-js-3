
const sliderContainer = document.getElementById("slider-container");
const sliderBar = document.getElementById("slider-bar");
const sliderHandle = document.getElementById("slider-handle");


let isDragging = false;


const minValue = 0;
const maxValue = sliderContainer.clientWidth - sliderHandle.clientWidth;


sliderHandle.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDragging);


function startDragging(e) {
    isDragging = true;
    sliderHandle.classList.add("active");
}


function drag(e) {
    if (!isDragging) return;

   
    let newPosition = e.clientX - sliderContainer.getBoundingClientRect().left - sliderHandle.clientWidth / 2;
    
    
    if (newPosition < minValue) {
        newPosition = minValue;
    } else if (newPosition > maxValue) {
        newPosition = maxValue;
    }

    
    sliderHandle.style.left = newPosition + "px";
    sliderBar.style.width = newPosition + sliderHandle.clientWidth / 2 + "px";
}


function stopDragging() {
    isDragging = false;
    sliderHandle.classList.remove("active");
}


window.addEventListener("resize", () => {
    maxValue = sliderContainer.clientWidth - sliderHandle.clientWidth;
    if (parseInt(sliderHandle.style.left) > maxValue) {
        sliderHandle.style.left = maxValue + "px";
        sliderBar.style.width = maxValue + "px";
    }
});
