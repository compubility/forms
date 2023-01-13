/**
 * @license
 * Copyright 2019 Compubility LLC
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('compubility-button')
export class CompubilityButton extends LitElement {
  @property({type: Boolean})
  disabled = false;

  @property({ type: Function })
  onClick = () => {};

  @property({ type: String })
  class = '';

  @property({ type: String })
  tooltip = '';
  
  override render() {
    return html`
        <button @click=${this.onClick} ?disabled=${this.disabled}>
            <slot></slot>
        </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "compubility-button": CompubilityButton;
  }
}