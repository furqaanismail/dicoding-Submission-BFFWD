class ItemFilm extends HTMLElement{
    set film(film){
        this._film = film;
        this.render();
    }

    render(){
        const limg  = 'https://image.tmdb.org/t/p/w500/';
        this.innerHTML = `
        <div class="col-lg-4 col-md-6">
                        <div class="film_item">
                            <div class="thumb">
                                <img src="${limg + this._film.poster_path}" alt="">
                                <a href="" class="rating">${this._film.vote_average}</a>
                            </div>
                            <div class="content">
                                <a href="">
                                    <h3>${this._film.title}</h3>
                                </a>
                                <p>
                                    ${this._film.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
}

customElements.define("film-item", ItemFilm);