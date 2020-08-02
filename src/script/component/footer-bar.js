class Footer extends HTMLElement{
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            :host{
                display: inline;
                width : 100%;
                color : blue;
                text-align : center;
            }
        </style>
        <footer class="footer">
            <div class="container">
                <div class="text-center">
                    <p>Copyright &copy; 2020 Furqaan Ismail</p>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define("footer-bar",Footer);