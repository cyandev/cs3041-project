parts = []
//start on landing page
switchPage("landing")

//landing page
document.querySelector("#addPart").addEventListener("click", () => {
    setAddPart({"name":"","quantity":"","location":"","description":""});
    switchPage("add");
})

//add page
document.querySelector("#submit").addEventListener("click", () => {
    part = {
        "name": document.querySelector("#name").value,
        "quantity": document.querySelector("#qty").value,
        "location": document.querySelector("#location").value,
        "description": document.querySelector("#description").value
    }
    parts.push(part);
    switchPage("landing");
})


function setAddPart(part) {
    document.querySelector("#name").value = part.name;   
    document.querySelector("#qty").value = part.quantity;
    document.querySelector("#location").value = part.location;
    document.querySelector("#description").value = part.description;
}

function switchPage(id) {
    for (page of document.querySelectorAll(".page")) {
        page.style.display = "none";
    }
    document.getElementById(id).style.display = "flex";
}