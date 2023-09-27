const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript";
document.body.appendChild(newParagraph)

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "Image description");
document.body.appendChild(newImg);

const listElement = document.createElement("div");
listElement.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(listElement);

// const newSection = document.createElement("section");
// newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
// document.body.appendChild(newSection)

//or we use this method

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);

document.body.appendChild(newSection)