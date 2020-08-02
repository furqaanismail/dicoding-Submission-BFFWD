class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector("#searchInput").value;
    }

    render(){
        this.innerHTML = `
        <div class="search mx-auto" id="search">
                <input type="search" placeholder="Cari Film ...." id="searchInput">
                <button id="btn-search" type="submit">Search</button>
          </div>
        `;
        this.querySelector("#btn-search").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", SearchBar);