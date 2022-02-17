// window.addEventListener("load", function(){
//     console.log("My first function!")
// })

function loadEvent() {
    console.log("My second function!");
    let rootElement = document.getElementById("root")

    // let card = function(movieReceived){
    //     return `
    //     <div class="card">
    //         <h2>${movieReceived.title}</h2>
    //         <div class="time">${movieReceived.year}</div>
    //         <div class="rate">${movieReceived.rate}</div>
    //     </div>
    // `}

    let card2 = function(title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
    `}

    // for (const movieSend of movies) {
    // rootElement.insertAdjacentHTML("beforeend", card2(movieSend));
    // }

    let anotherFavouriteMovie = {
        "title": "The Last Scout Boy",
        "year": 1991,
        "rate": 7.0,
    }
rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate));

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate));
    }
    console.log(movies)
}

window.addEventListener("load", loadEvent);