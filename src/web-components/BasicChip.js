// Define the new element
window.customElements.define('basic-chip', class BasicChip extends HTMLElement {
  markup = `
    <style>
    .chip {
      display: inline-block;
      height: 32px;
      font-size: 13px;
      font-weight: 500;
      color: #ffffff;
      line-height: 32px;
      padding: 0 12px;
      border-radius: 16px;
      background-color: #ad1457;
      margin-bottom: 5px;
      margin-right: 7px;
    }
    </style>
    
    <div class="chip">
      <slot></slot>  
    </div>
  `


  connectedCallback() {
    // init the component
    const template = document.createElement('template')

    template.innerHTML = this.markup

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
})