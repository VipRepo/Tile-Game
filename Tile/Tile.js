const currentDocument = document.currentScript.ownerDocument;
class Tile extends HTMLElement {
    constructor() {
        super();

        this.init();
    }

    init() {
        this.addEventListener('blinkOn', this.blinkOn);
        this.addEventListener('blinkOff', this.blinkOff);
        this.addEventListener('click', this.clickEvent);
    }

    blinkOn() {

       let elem = this.shadowRoot.querySelector('#box-template');
       
        let classNames = elem.className.substr(0, elem.className.indexOf('dark-blue')-1) +' light-blue';
        elem.setAttribute('class', classNames);
    }

    blinkOff() {
     
        let elem = this.shadowRoot.querySelector('#box-template');
        let classNames = elem.className.substr(0, elem.className.indexOf('light-blue')-1) +' dark-blue';
        elem.setAttribute('class', classNames);
        // this.setAttribute('class', 'dark-blue');
    }

    clickEvent() {
        let elem = this.shadowRoot.querySelector('#box-template');
        if(elem.className.indexOf('light-blue') != -1) {
            console.log("Raising score event");
            window.dispatchEvent(new Event('wow'));
        }
    }

    connectedCallback() {

    const shadowRoot = this.attachShadow({mode: 'open'});
    const template = currentDocument.querySelector('#tile-template');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    }
}

customElements.define('tile-box', Tile);