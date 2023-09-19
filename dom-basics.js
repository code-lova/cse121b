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

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection)