import {BaseButton} from './base-button.js';

class TestExtendsButton extends BaseButton {
  constructor() {
    super();
  }
}

customElements.define('ds-test', TestExtendsButton, {extends: "button"});
