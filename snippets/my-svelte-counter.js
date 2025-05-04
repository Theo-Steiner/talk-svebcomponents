import MyCounter from "./MyCounter.svelte";

if (!customElements.get("my-svelte-counter")) {
  customElements.define(
    "my-svelte-counter",
    MyCounter.element
  );
}
