export class BaseButton extends HTMLButtonElement {
  constructor() {
    super();
    // const shadow = this.attachShadow({mode: 'open'});
    this.textContent = "hello";

  }
}

customElements.define('ds-basebutton', BaseButton,{extends: "button"});