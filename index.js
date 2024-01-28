/**
 * `MessageBienvenue` est un élément HTML personnalisé qui affiche un message de bienvenue.
 */
class MessageBienvenue extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    /**
     * Appelé lorsque l'élément est connecté au DOM.
     * Il initialise les éléments d'entrée et de message et ajoute un écouteur d'événements à l'élément d'entrée.
     */
    connectedCallback() {
        this.render();
        this.inputElement = this.shadowRoot.querySelector('input');
        this.messageElement = this.shadowRoot.querySelector('span');
        this.inputElement.addEventListener('input', () => this.updateMessage());
    }

    /**
     * Met à jour le contenu textuel de l'élément de message avec la valeur de l'élément d'entrée.
     */
    updateMessage() {
        this.messageElement.textContent = `Bienvenue, ${this.inputElement.value}!`;
    }

    /**
     * Affiche les éléments d'entrée et de message à l'intérieur de la racine de l'ombre.
     */
    render() {
        this.shadowRoot.innerHTML = `
            <input type="text" placeholder="Entrez votre nom">
            <span></span>
        `;
    }
}

customElements.define('message-bienvenue', MessageBienvenue);