// window.addEventListener("load", function(){
//     console.log("My first function!")
// })

function loadEvent() {
    console.log("My second function!");
    let rootElement = document.getElementById("root")


    let card2 = function(title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
                `;
        }

    let renderAllCardElements = function(incomingMoviesArray){
        let renderedCardList = " ";
        // for ciklus ami végigmegy a cardsArray-en
        // minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet a megfelelő div cardban
        // return az elkészült elemekkelk feltöltött card listet (stringekkel)
        for (const incomingMovie of incomingMoviesArray) {
            renderedCardList += `
            <div class="card">
                <h2>${incomingMovie.title}</h2>
                <div class="time">${incomingMovie.year}</div>
                <div class="rate">${incomingMovie.rate}</div>
            </div>
                `
        }
        console.log(renderedCardList)
        return renderedCardList
    }

    // movies.sort(function(a, b){return a.year - b.year});

    let newGoodMovies = [];

    for (const movieSend of movies) {
        // let newerThan2000 = false;
        // let floorRate = Math.floor(movieSend.rate);


        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
            // rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, floorRate));
        }
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year})

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));
    // beküld a renderAllCardElementhez 
}

window.addEventListener("load", loadEvent);