class Introbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid align-items-center">
            <div class="container text-center">
              <h1 class="display-4">Movie Catalogue</h1>
              <p class="lead">Menampilkan Daftar Film yang ada </p>
            </div>
          </div>
        `;
    }
}
customElements.define("intro-bar", Introbar);