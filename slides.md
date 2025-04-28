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

# What are web components?

- Plattform Standard for building UI Components
- Basically let's you declare a new html element & use it in your dom however you like
- Built in encapsulation

```js
// Code for declaring my-element
```

```html
<html>
  <div>hello world</div>
  <my-element></my-element>
</html>
```

<!--
An ultimate guide to building web components would not be complete, without giving a primer about what a `web component` even is.
The official term for the platform standard that we commonly call `web components` is `custom elements`.
It's an umbrella term for a collection of APIs that let us do what the name suggests: defining custom html elements that can be used as native html elements would be used.
Since web components are a standard implemented by browsers, they work out of the box in every environment.
While svelte, vue or react components can only be used in the context of their respective frameworks, web components "just work".
Custom elements also come with very strong encapsulation.
They have their own private dom (shadow dom), that prevents global styles or nosy scripts from reaching into them.
-->

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
