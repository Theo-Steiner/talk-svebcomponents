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
    this.#button.innerText = `click to increment by ${this.increments}: ${
      this.#count
    }`;
  }

  attributeChangedCallback(_name, _oldValue, newValue) {
    const convertedValue = Number(newValue);
    this.increments = Number.isNaN(convertedValue) ? undefined : convertedValue;
    this.render();
  }

  disconnectedCallback() {
    this.#button.remove();
  }
}

if (!customElements.get("my-counter")) {
  customElements.define("my-counter", MyCounter);
}
