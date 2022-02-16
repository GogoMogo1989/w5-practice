// window.addEventListener("load", function(){
//     console.log("My first function!")
// })

function loadEvent() {
    console.log("My second function!");
    let rootElement = document.getElementById("root")

    let card = function(movieReceived){
        return `
        <div class="card">
            <h2>${movieReceived.title}</h2>
            <div class="time">${movieReceived.year}</div>
            <div class="rate">${movieReceived.rate}</div>
        </div>
    `}

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card(movieSend));
    }
}

window.addEventListener("load", loadEvent);