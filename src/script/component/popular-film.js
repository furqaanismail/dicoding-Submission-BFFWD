class Popular extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
                <div id="popularFilm"></div>
        `;
    }
}
customElements.define('popular-film', Popular);