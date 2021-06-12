// Your code goes here
document.addEventListener(
  "DOMContentLoaded",
  () => (document.querySelector("#text").textContent = "This is really cool!")
);

const firstDiv = document.createElement("div");
firstDiv.id = "container";

let h1 = document.createElement("h1");

firstDiv.appendChild(h1);

h1.textContent = "Pizza";

document.body.insertBefore(firstDiv, document.querySelector("p"));

let image = document.createElement("img");
image.src = "https://placekitten.com/400/900";

firstDiv.appendChild(image);
