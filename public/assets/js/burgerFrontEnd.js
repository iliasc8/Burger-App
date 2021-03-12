
document.querySelector(".create-form").addEventListener("submit", function(event){
    event.preventDefault();

    let newBurger = {
        burger_name: document.querySelector("#newBurger").value
    }

    fetch("/api/new", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newBurger)
    }).then(data => {
        console.log(data)
        location.reload()
    })
})

var allBtn = document.querySelectorAll(".change-eaten")

allBtn.forEach(element => {
    element.addEventListener("click", updateDevoured)
})

function updateDevoured(event) {
    console.log(event.target.dataset.id)

    let updatedBurger = {
        id: event.target.dataset.id
    }

    fetch("/api/update", {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(updatedBurger)
    }).then(data => {
        location.reload()
    })
}