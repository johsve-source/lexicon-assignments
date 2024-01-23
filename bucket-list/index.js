const p = document.createElement("p");
p.innerText = "Test for Bucky's List";
const section = document.querySelector(".list");
// section.appendChild(p);
section.insertAdjacentElement("afterbegin", p);