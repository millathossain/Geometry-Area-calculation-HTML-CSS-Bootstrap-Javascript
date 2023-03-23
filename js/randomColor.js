// Random color generation
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    return color;
}

// 
let cards = document.getElementsByClassName("card");
// mouseover function
for (const card of cards) {

    card.addEventListener("mouseover", function() {
        card.style.backgroundColor = randomColor();
    })  
}
// mouse out
for (const card of cards) {

    card.addEventListener("mouseout", function() {
        card.style.backgroundColor = "white";
    })   
}
