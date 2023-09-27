//updating the background color 
//Using the Ternary operator
const theme = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";


function update(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

theme.addEventListener("change", () => {
    theme.value === "black" ? update("black", "white") : update("white", "black");
});

//we can also use swutch case to add multiple choices too .