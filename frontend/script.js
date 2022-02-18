function loadEvent(){

    let rootElement = document.getElementById("root")

    let card2 = function(title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <h4>${year}</h4>
            <h5>${rate}</h5>
        </div>
        `;
    } 

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate))
    }
}
window.addEventListener("load", loadEvent);