import './item-film.js';
class ListFilm extends HTMLElement{
    set films(films){
        this._films = films;
        this.render();
    }

    connectedCallback(){
        this.show();
    }

    show(){
        this.innerHTML = `
        <div class="container">
            <div class="text-center mb-5 mt-4">
                <h1>Semua Film</h1>
            </div>
            <div id="film_row" class="row">
            </div>
        </div>
        `;
    }

    renderError(message){
        this.innerHTML = `
        <h2 class="text-center">film ${message}</h2>
        `;
    }

    render(){
        this.innerHTML = `
        <div class="container">
            <div class="text-center mb-5 mt-4">
                <h1>Semua Film</h1>
            </div>
            <div id="film_row" class="row">
            </div>
        </div>
        `;
        this._films.forEach(film => {
            const film_row = document.querySelector("#film_row");
            const filmItem = document.createElement("film-item");
            filmItem.film = film;
            film_row.appendChild(filmItem);
        });
    }
}
customElements.define("film-list", ListFilm);