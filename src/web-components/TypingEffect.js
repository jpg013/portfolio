// Define the new element
window.customElements.define('typing-effect', class TypingEffect extends HTMLElement {
  constructor() {
    super()

    this._timings = []
  }

  set timings(value) {
    this._timings = value
    this.scheduleTimings()
  }

  get timings() {
    return this._timings
  }

  getMarkup() {
    return '<slot></slot>'
  }

  connectedCallback() {
    // init the component
    const template = document.createElement('template')

    template.innerHTML = this.getMarkup()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  appendHTML(val) {
    this.shadowRoot.firstChild.innerHTML = `${this.shadowRoot.firstChild.innerHTML}${val}`
  }

  // Little helper function to sanitize html entities in strings
  htmlSanitizeChar(ch) {
    // convert spaces to &nbsp; entity
    if (ch === ' ') {
      return '&nbsp;'
    }

    return ch
  }

  addTypingEffect(text, throttleInMs) {
    let idx = 0

    while (idx < text.length) {
      // Calc the interval
      const interval = idx * throttleInMs
      // Get next character in the text
      const char = this.htmlSanitizeChar(text[idx])

      // Schedule append char
      setTimeout(() => this.appendHTML(char), interval)

      // I generally don't like infinite loops :)
      idx++
    }
  }

  scheduleTimings() {
    this._timings.forEach(t => {
      const { text, throttleInMs, delayInMs } = t

      // Apply timeout for initial delay :)
      setTimeout(() => {
        this.addTypingEffect(text, throttleInMs)
      }, delayInMs)
    })
  }
})
