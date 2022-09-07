var elSitForm = document.querySelector(".site-form");
var elFormInput = document.querySelector(".form-input");
var elSiteKorzinka = document.querySelector(".ol-wrapper");


var praducts = [];

elSitForm.addEventListener("submit", e => {
    event.preventDefault()

    var inputValue = elFormInput.value;

    praducts.push(inputValue);

    elSiteKorzinka.textContent = ""

    for(var praduct of praducts) {
        var liElement = document.createElement("li")
        liElement.textContent = praduct ;

        elSiteKorzinka.appendChild(liElement);

        liElement.style.borderBottom = "2px solid black"
        liElement.style.marginBottom = "10px"

        elFormInput.value = ""
    }
})