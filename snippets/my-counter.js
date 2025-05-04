class MyCounter extends HTMLElement {
  increments = 1;
  #count = 0;
  #button = null;

  static get observedAttributes() {
    return ["increments"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#button = document.createElement("button");
    this.shadowRoot.append(this.#button);
    this.#button.addEventListener("click", () => {
      this.#count += this.increments;
      this.render();
    });
    this.render();
  }

  render() {
    if (!this.#button) return;
    this.#button.innerText = `add ${this.increments} to ${
      this.#count
    }`;
  }

  attributeChangedCallback(_name, _oldValue, newValue) {
    this.increments = Number.parseInt(newValue);
    this.render();
  }

  disconnectedCallback() {
    this.#button.remove();
  }
}

if (!customElements.get("my-counter")) {
  customElements.define("my-counter", MyCounter);
}
