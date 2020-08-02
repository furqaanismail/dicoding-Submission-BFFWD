class NavBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="">Movie Catalogue</a>
            </div>
        </nav>
        `;
    }
}

customElements.define("nav-bar", NavBar);