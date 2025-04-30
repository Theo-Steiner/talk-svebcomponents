---
theme: seriph
title: The Ultimate Guide to Building Web Components with Svelte
info: |
  Slides for the talk "The Ultimate Guide to Building Web Components with Svelte" held at Svelte Summit 2025 in Barcelona by Theo Steiner.
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# The Ultimate Guide to Building Web Components with Svelte

Theo Steiner

<!--
- introduction
- maybe joke about having bitten of more than I can chew with that title
-->

---

# Self Introduction

- Theo Steiner (テオ)
- Born & Raised in Germany
- Living in Tokyo (Come visit!)
- Software Engineer at LY Corporation (I work on `LINE Messenger`)
- Svelte Ambassador & Core Member of Svelte Japan

<!--
- self introduction
-->

---

## layout: two-cols-header

# What are web components?

::left::

<v-clicks class="min-h-full">

- A set of Plattform Standards for building UI Components
  - Custom Elements
  - The `<template>` & `<slot>` elements
  - Shadow Dom
- Basically let's you declare a new html element & compose it in your dom however you like

</v-clicks>

::right::

<div v-click="2" class="px-4">
```html {3-5}
<html>
  <h1>hello world</h1>
  <my-element>
    <p>nested content</p>
  </my-element>
</html>
```
</div>

<!--
An ultimate guide to building web components would not be complete, without giving a primer about what `web components` even are.
The name "Web components" actually is an umbrella term for a collection of APIs, that allow us to build Components, that is,  a reusable piece of UI,
using native browser features.
While we are normally confined to using only html elements browsers provide, custom elements allow us to extend the html with elements we can implement ourselves.
These custom elements are implemented as classes that extend a base `HTMLElement` class and are notified about their state in the DOM via lifecycle methods.
In order to compose with native html elements, they can define "holes" in their markup by using the `<slot>` element.
If you have used svelte before version 5, you might be familiar with slots as a way to nest content within a component.
The last API that is part of the web components standard is this thing called the "shadow dom" - a technology for attaching isolated DOM trees to our document.
Simply put, it allows us to encapsulate our component's markup and styles, so that they are not affected by the outside world and vice versa.
-->

---

layout: image-left
image: assets/WebComponentLifecycle.png
backgroundSize: 75%
class: w-min

---

```js {all|0-14|15-29|31-37|38-41}{maxHeight: '100%'}
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
    this.#button.addEventListener("click", () =>
      this.#count += this.increments;
      this.render();
    );
    this.render();
  }

  render() {
    this.#button.innerText = `click to increment by ${
      this.increments
    }: ${this.#count}`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const convertedValue = Number(newValue);
    this.increments = Number.isNaN(convertedValue)
      ? undefined
      : convertedValue;
    this.render();
  }

  disconnectedCallback() {
    this.#button.remove();
  }
}

customElements.define("my-counter", MyCounter);
```

<!--
Now let's quickly go over how custom elements are built using javascript.
While the example looks a bit verbose, it is actually just a very simple counter component, where the value the increment counter is incremented by can be set via an attribute.
In this example, we subclass `HTMLElement` to create our own `MyCounter` custom element class.
To register the custom element we call customElements.define() passing in a tag name and the class we defined above.
Once registered, we can use our custom element in the DOM like any other html element.
This means, we can instantiate the 'my-counter' element using the `document.createElement()` API.
[click] Upon creation, the element's constructor is called and properties are initialized.
To render our element, we need to attach it to the DOM, for example by appending it to the document body.
[click] This is where the `connectedCallback` lifecycle method is called, telling us that our element is now part of the DOM.
In the example, we create a button element and append it to the shadow root of our custom element.
We also setup an event listener for the button's click event.
You can sort of think of the `connectedCallback` as the equivalent of a svelte component's `onMount` lifecycle method.
Except that since svelte doesn't render for us, we have to manually insert and update our content in the DOM by calling the `render()` method.
[click] While our component is connected to the DOM, we are also notified about changes to the attributes of our element via the `attributeChangedCallback`.
Please note, that since html attributes are always strings, we need to convert the attribute value to a number before storing it in our component's increments property.
Since we don't have reactivity in vanilla JavaScript we need to manually call `render()` to reflect the changed state in the UI.
[click] Finally, we have the `disconnectedCallback` lifecycle method, which is called when our element is removed from the DOM.
This is where we can clean up side effects we caused during our component's lifetime, such as adding event listeners or rendering to the dom.


TODO: Quite a bit of code, now let's see how we can build the same component using svelte.
-->

---

# Building Web Components with Svelte

- TODO: build component using svelte,
- set `customElements: true` in svelte.config.JavaScript
- register custom element using `customElements.define()`

```html

```

---

# Use the Platform

Rich hate tweets, one by one

<!--
Before we get into how we can build web components using Svelte, I'd like to take a small excursion into the meta discussion surrounding web components.
While some engineers spend their days writing tweets about how needlessly complex web development has gotten,
and how engineers turn to tools like svelte to overengineer buttons with wasteful amounts of custom javascript,
when they could just "use the platform" and build things using native features like web components instead,
others detest web components as a technology built perpendicular to real developer needs with no real world use cases.
Before sitting through a thirty minute talk on Web Components, I figured it might be nice to know if you should even be working with that technology in the first place.
Since most of you folks are probably devote disciples of his,
I assume you value Svelte Jesus's, urgh, I mean Rich Harris's opinion on the matter.
But, since I'm terrified of unscripted live interaction, instead of asking the real Rich in the audience, let's scour the interwebs for his true feelings about custom elements instead.

** Rich Hate Tweets **

Damn... that was devastating, but before you leave the room just now, let me tell you that of course Rich would say something like that.
After all, he is one of them. Big JavaScript. THEY want you to send bloated bundles to your users so they can feed on your bandwidth!
Let's maybe look at somebody more trustworthy.. You know, somebody who has no reason to hide the truth from you to farm orange github stars.
Like, let's say, someone who gives a talk on web components. Like, you know, me!
-->

---

# Use the Platform

Theo hate tweets, one by one

<!--

** Theo Hate Tweets **

Okay... that wasn't exactly a glowing review either..
So what am I doing here, why would we even want to build web components with svelte when they come with so many issues?
-->

---

# Why Use Web Components?

Web Components are by no means a perfect technology & if you don't have a problem web components solve, you probably shouldn't use them.

- Technology Agnostic
  - they work everywhere
  - allows you to distribute web components without having to care about what tech stacks your users fancy

<!--
In theory, you'd probably always want to stick to a modern framework like svelte to build all of your apps and components in the idiomatic syntax of the framework.
That way, you get better performance, a better developer experience and none of the headaches that come with web components.
But in practice, things are messy & we don't always get to work with nice unified tech stacks.
We might have multiple tech stacks across products, or even ship to third parties where we don't know what technology they are using.
In my opinion, this is the use case where web components most shine. Not like the name suggests, as "components" that help you organize individual pieces of codes,
but rather as encapsulation tools that let you distribute your code without having to worry about compatibility.
For example at the company I work at, we use custom elements to share reusable components between different products.
That way, even if the frameworks or framework version differ across products, we still can share an implementation.
Another use case that comes to mind is distributing small self-contained units of code.
Like, for example, a checkout widget that you can just drop onto your website to handle payments.
-->

---

# Building Web Components with Svelte

- Custom Element via Compiler Setting: `customElements: true`
- `Component.element` property contains constructor for our custom element
- Constructor can be used to register custom element

```javascript
// svelte.config.js
export default {
  compilerOptions: {
    customElements: true,
  },
};
```

<!--
As you just saw, building web components using vanilla JavaScript quickly turns your code into imperative spaghetti rather quickly.
Since svelte allows us to build components with an elegant declarative syntax, we'd much rather use svelte to build custom elements instead.
Literally all we have to do for this to work is adding `customElement: true` to the compiler settings in our svelte config.
If we build our project now, an `element` property is newly added to the default export of our compiled svelte component.
This property contains the constructor for a custom element version of our component.
We can now pass this constructor alongside a tag name to `customElements.define()` to register the component with the window's custom element registry.
Once we've registered it, all that's left to do is using our tag name to reference the element within our html & our svelte component magically renders within any context,
be it vanilla JS or another framework like react or vue.

(comment: I would personally recommend using a library dedicated to building custom elements, like `lit`,
for cases where you really need to get into the nitty gritty of web components)
-->

---
