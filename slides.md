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

<style>
* {
  scrollbar-width: none;
}

.two-cols-header {
  /* override weird two-cols-header style */
  grid-template-rows: auto 1fr !important;
}
</style>

# The Ultimate Guide to Building Web Components with Svelte

Theo Steiner

<!--
Hey everyone, welcome to "The Ultimate Guide to Building Web Components with Svelte".
If you've ever been nervous about speaking in front of people, try putting 'ultimate guide' in name of your talk.
Really ups the game a bit.
But before you watch me crash and burn trying to live up to that title,
Let's get a bit meta for a second and talk about why you would even want to build web components in the first place.
-->

---

```yaml
layout: two-cols
```

<div style="background-image: url(/harris_richard.png);" class="relative h-full bg-contain bg-no-repeat">
  <div 
    style="background-image: url(/harris_lizard.png);"
    class="absolute inset-0 bg-contain bg-no-repeat opacity-0 transition-opacity" 
    :class="{
      'opacity-50': $clicks === 2,
      'opacity-100': $clicks >= 3
    }"
  />
  <div 
    v-click="4"
    style="background-image: url(/harris_lizard_conspiracy.png);"
    class="absolute inset-0  bg-contain bg-no-repeat" 
  />
</div>

::right::

<div class="relative h-full w-full">
<div v-click="1" style="background-image: url(/rich_harris_why_i_dont_use_webcomponents.png);" class="bg-contain bg-no-repeat bg-center absolute inset-0"/>
<div class="absolute inset-0 transform rotate-6 scale-75">
  <Tweet v-click="2" id="1839484645194277111"/>
</div>
<div class="absolute inset-0 transform -rotate-6">
  <Tweet v-click="3" id="1844134732306792631"/>
</div>
</div>

<!--
Since most of you folks are probably devote disciples of his,
I thought we could maybe get Svelte Jesus, ugh I mean, Rich Harris to tell you why you should use web components.
But, since I'm terrified of unscripted live interaction, instead of asking the real Rich in the audience, I did what any sane person would do and went on twitter to find his endorsements.

Let's see, what do we have here..?
[click] "WHY I DON'T USE WEB COMPONENTS"... that's probably just a clickbait title, right? Surely rich loves web components.
[click] "If I could bill someone for the time I've spent working __around__ web components in svelte, I'd be a rich man"
... uhm okay, maybe rich wasn't as pro-platform as I thought..
[click] "the right answer is 'don't use web components and you'll never have to think about this madness'"
Damn... that's some disgusting anti-web-components propaganda right here.
[click] But, of course Rich would frame it like that.
I mean look at his lizardy face!
He __is__ one of them. Big JavaScript. THEY want you to send bloated bundles to your users so they can feed off your bandwidth!
According to twitter evangelists Web Components are the future, I mean, "USE THE PLATFORM!", am I right?!
So let's maybe consult somebody more trustworthy to get our facts right..
You know, somebody who has no reason to hide the truth from you in order to farm orange github stars.
Like, let's say, someone who gives a talk on web components.
Like, you know, me!
-->

---

```yaml
layout: two-cols
```

<div style="background-image: url(/theo_angel.png);" class="relative h-full bg-contain bg-no-repeat">
  <div 
    style="background-image: url(/theo_steiner.png);"
    class="absolute inset-0 bg-contain bg-no-repeat opacity-0 transition-opacity" 
    :class="{
      'opacity-100': $clicks > 1,
    }"
  />
  <div 
    v-click="5"
    style="background-image: url(/theo_lizard.png);"
    class="absolute inset-0  bg-contain bg-no-repeat" 
  />
</div>

::right::

<div class="relative h-full w-full">

<v-clicks>

- Theo Steiner (テオ)
  - <ri-bluesky-fill/> @theosteiner.de
- Software Engineer at LY Corporation in Tokyo
  - <ri-line-fill/> working on `LINE Messenger`
- Certified Svelte Stan
  - <ri-svelte-fill/> Svelte Ambassador & Member of Svelte Japan
- Working with Web Components
  - <ion-logo-web-component/> Using Svelte-built WCs in Production
- Not a reptiloid
  - <ion-logo-python/> use the platform!

</v-clicks>

<div class="absolute inset-0 transform -rotate-6">
  <Tweet v-click="6" id="1833417673251946987"/>
</div>
<div v-click="7" style="background-image: url(/theo_whats_in_the_box.png);" class="bg-contain bg-no-repeat bg-center absolute inset-0"/>
<div v-click="8" style="background-image: url(/theo_components_at_home.png);" class="bg-contain bg-no-repeat bg-center absolute inset-0 transform rotate-6"/>
</div>

<!--
So, who am I, you ask?
[click] My name is Theo Steiner and I'm a software engineer at LY Corporation in Tokyo.
[click] For my dayjob, I get to work on LINE, which is the most popular messenger app in Japan with over 150 million monthly active users.
[click] I'm also a "svelte ambassador", which basically means I'm a certified svelte stan, and have been for years.
Svelte was actually my introduction to frontend development and I owe a lot to the framework and the awesome people behind it.
To give back to the community, I help organize meetups in Japan, so if you're ever in the area, feel free to reach out.
[click] And of course, I work with web components on a daily basis, hence this talk.
[click] Also, and I can't believe I have to say this, but I'm totally not JavaScript loving reptile in disguise, I promise!

So now that you know that my opinion on web components can be trusted, let's look through some of my tweets to try undo the damage Rich's statements have done to web components.

[click] "pretending web components have solved frontend is just so disingenuous. 🌶️"
Wait... what? That one must have snuck in there by accident, I thought we wanted to be positive here.
[click] "building accessible web components is the kind of task that makes maintaining cobol mainframes look like a dream job"
this is getting worse by the minute.
[click] ...Okay, I give up, Big JavaScript won. I have to admit, web components are not the silver bullet some folks hope them to be.
It's true, in most cases you probably shouldn't even use them & stick to a modern frontend framework... like svelte!
But while they might not be the future of all of Web Development, they do have some cool properties that make them an invaluable resource for certain, specific use cases.
So please don't leave the room just yet!
-->

---

```yaml
layout: two-cols-header
class: grid-rows-2
```

# What are web components?

::left::

<v-clicks depth="2" class="min-h-full">

- A set of Plattform Standards for building UI Components
  - Custom Elements
  - The `<template>` & `<slot>` elements
  - Shadow Dom
- Encapsulation
  - Framework-agnostic reusable pieces of UI

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

::bottom::

<!--
An ultimate guide to building web components would not be complete, without giving a primer about what `web components` even are.
[click] The name "Web components" actually is an umbrella term for a collection of APIs, that allow us to build Components, that is, reusable pieces of UI,
using native browser features.
[click] While we are normally confined to using only html elements provided by the browser, the custom element spec allows us to extend the html with elements we can implement ourselves.
These custom elements are implemented as classes that extend a base `HTMLElement` class.
Once mounted to the DOM, they are notified about state changes via lifecycle methods.
[click] In order to compose with with other html elements, they can define "holes" in their markup using the `<slot>` element.
If you have used svelte before version 5, you might be familiar with slots as a way to nest content within a component.
[click] The last API that is part of the web components standard is this thing called the "shadow dom" - a technology for attaching isolated DOM trees to our document.
Simply put, it allows us to encapsulate our component's markup and styles, so that they are not affected by the outside world and vice versa.
[click] This encapsulation is precisely what makes web components worth using.
While they might not be the best choice to base your stack on in a vacuum, in practice, things are messy & we don't always get to work with nice unified tech stacks.
We might have varying tech stacks across products, or even ship our code to third parties where we don't know what technology they are using.
In my opinion, this is the use case where web components shine the most.
[click] Not like the name suggests, as "components" that help you organize individual units of code,
but rather as an encapsulation tool that lets you distribute individual pieces of UI without having to worry about compatibility.
For example at LINE, we use custom elements to share reusable UI components between different products.
That way, even if the frameworks or framework versions differ across products, we can still share an implementation.
Another use case that comes to mind is distributing small self-contained units of code.
Like, for example, a checkout widget that you can just drop onto your website to handle payments.
-->

---

```yaml
layout: two-cols-header
class: max-h-full overflow-auto
```

# Vanilla Web Components

::left::

<div class="relative h-full max-w-full mx-1.5rem overflow-hidden">
<div v-click.hide="1" class="absolute inset-0 flex flex-col gap-2">

<<< @/components/WcCounter.vue vue

<WcCounter/>

</div>

<div v-click="1" style="background-image: url(/web_component_lifecycle_0.png);" class="relative h-full bg-contain bg-no-repeat">
  <div 
    v-click="3"
    style="background-image: url(/web_component_lifecycle_1.png);"
    class="absolute inset-0 bg-contain bg-no-repeat" 
  />
  <div 
    v-click="4"
    style="background-image: url(/web_component_lifecycle_2.png);"
    class="absolute inset-0  bg-contain bg-no-repeat" 
  />
  <div 
    v-click="5"
    style="background-image: url(/web_component_lifecycle_3.png);"
    class="absolute inset-0  bg-contain bg-no-repeat" 
  />
  <div 
    v-click="6"
    style="background-image: url(/web_component_lifecycle_4.png);"
    class="absolute inset-0  bg-contain bg-no-repeat" 
  />
</div>
</div>

::right::

<div class="max-h-full overflow-auto" style="scrollbar-width: none;">
<<< @/snippets/my-counter.js {all|1|42-44|2-14|15-31|32-36|37-39}{maxHeight: '100%'}

</div>

<!--
Now let's quickly go over how custom elements are built using vanilla javascript.
While the example looks a bit verbose, it is actually just a very simple counter component, where the value the counter is incremented by can be set via an attribute.
[click] In this example, we subclass `HTMLElement` to create our own `MyCounter` custom element class.
[click] To register the custom element we call customElements.define() passing in a tag name and the class we defined above.
Once registered, we can use our custom element in the DOM like any other html element.
This means, we can instantiate the 'my-counter' element using the `document.createElement()` API.
[click] Upon creation, the element's constructor is called and properties are initialized.
To render our element, we need to attach it to the DOM, for example by appending it to the document body.
[click] This is where the `connectedCallback` lifecycle method is called, telling us that our element is now part of the DOM.
In the example, we create a button element and append it to the shadow root of our custom element.
We also setup an event listener for the button's click event.
You can sort of think of the `connectedCallback` as the equivalent of a svelte component's `onMount` lifecycle hook.
Except that since web component's don't conveniently render for us, we have to manually insert and update our content in the DOM by calling the `render()` method we define below.
[click] While our component is connected to the DOM, we are notified about changes to the attributes of our element via the `attributeChangedCallback`.
Please note, that since html attributes are always strings, we need to convert the attribute value to a number before storing it in our component's increments property.
After updating it, since we don't have reactivity in vanilla JavaScript we need to manually re-call `render()` to reflect the changed state in the UI.
[click] Finally, we have the `disconnectedCallback` lifecycle method, which is called when our element is removed from the DOM.
This is where we can clean up side effects we caused during our component's lifetime, such as removing event listeners or cleaning up to the dom.
-->

---

```yaml
layout: two-cols-header
```

# Building Web Components with Svelte

::left::

<div class="mx-1.5rem flex flex-col gap-2">

<<< @/snippets/MyCounter.svelte svelte

<v-clicks at="1">

<<< @/svelte.config.js js

</v-clicks>

<v-clicks at="2">

<<< @/snippets/my-svelte-counter.js js

</v-clicks>

</div>

::right::

<v-clicks>

- Custom Element via Compiler Setting
  - `customElement: true`
- `Component.element` property contains constructor
  - can be used to register custom element
- <SvelteWcCounter/>
- But it does not yet work quite like expected...

</v-clicks>

<!--
As you just saw, building web components using vanilla JavaScript turns your code into imperative spaghetti rather quickly.
I don't have to tell you that svelte allows us to write the same functionality in way less, declarative code.
Where we needed 40 lines earlier, we can get that same behavior with svelte in less than 10 lines of code.
But how do we turn this svelte component into a custom element?
[click] Literally all we have to do for this to work is adding `customElement: true` to the compiler settings in our svelte config.
If we build our project now, an `element` property is newly added to the default export of our compiled svelte component.
[click] This property contains the constructor for a custom element version of our component.
We can now pass this constructor alongside a tag name to `customElements.define()` to register the component with the window's custom element registry.
Once we've registered it, all that's left to do is using our tag name to reference the element within our html
[click] & voila, our svelte built web component is ready to be used within any context,
be it vanilla JS or another framework like react or vue.
In fact, the slides you are looking at right now are built using vue, and we are seemlessly using a svelte component within them.
[click] However, there is one issue with the code we just wrote... let's try actually incrementing...
Ooops, I'm not entirely sure, but I don't think this is how a counter is supposed to work...
-->

---

```yaml
layout: two-cols-header
```

# Building Web Components with Svelte

::left::

<div class="mx-1.5rem">

<!-- prettier-ignore-start -->

````md magic-move
<<< @/snippets/MyCounter.svelte svelte

<<< @/snippets/MyCounterFixed.svelte svelte

<<< @/snippets/Props.svelte svelte

<<< @/snippets/Options.svelte svelte

<<< @/snippets/Host.svelte svelte
````

<!-- prettier-ignore-end -->

</div>

::right::

<v-clicks at="1" depth="2">

- custom element `<svelte:options>`
  - `props`
    - `type` (convert from string)
    - `attribute` (kebabize prop names)
    - `reflect` (reflect prop values back)
  - other settings
    - `shadow` (disable shadow DOM)
    - `tag` (automatic `customElements.define`)
    - `extends` (modify base class)
- `$host()` rune

</v-clicks>

<!--
So, instead of adding the numbers, we seem to be concatenating them instead.
This is because we pass the `increments` prop via an attribute to our custom element & attributes are always strings.
Svelte has no way of knowing which types we want our props to be in,
so to convert it to the right type we have to give it a hint.
[click] We can do this by using the `customElement` attribute of the `svelte:options` element.
Here we can pass a configuration object, that has a 'props' property, that allows us to specify what type conversion we want to run for each prop.
Now values passed to our component via the increments attribute will be converted to numbers and everything should work as expected.
While we're at it, let's also add a `startingValue` to our counter.
[click] While props are camelCased in svelte, HTML attributes are case insensitive and therefore usually written in kebab-case.
The `props` setting allows us to accomodate for this via the `attribute` property.
We can also automatically reflect prop values back to the custom element's attributes in the dom. To enable this, we have to set `reflect` to true.
[click] There is a whole range of other settings we can pass here, but I don't find myself using them very often.
The `tag` property allows us to skip manually defining the custom element, with the compiler taking care of it for us.
However, since registering the same custom element multiple times will throw an error, I prefer doing this manually checking for existing registrations beforehand.
You can also use the `shadow` property to opt out of using the shadow dom.
Finally, if you really need fine grained control over the custom element, you can use the `extends` property to modify the base class of the custom element.
[click] Since event handling was overhauled in svelte 5, we no longer use svelte's `createEventDispatcher`, but rather pass event handlers as component props.
However, when dealing with custom elements, passing event handlers is not an option, since we can only pass strings as attributes.
What we do instead is, use JavaScript's native way of dispatching custom events.
For this, we first use the `$host()` rune to get a reference to the custom element's instance & then call the element's `dispatchEvent` method,
passing in the event we want to dispatch.
-->

---

```yaml
layout: two-cols-header
class: max-h-full overflow-auto
```

# Anatomy of a Svelte-built Web Component

::left::

<div v-click="1" style="background-image: url(/svelte_web_component_lifecycle_0.png);" class="relative h-full bg-contain bg-no-repeat dark:invert">
  <div 
    v-click="2"
    style="background-image: url(/svelte_web_component_lifecycle_1.png);"
    class="absolute inset-0 bg-contain bg-no-repeat dark:invert" 
  />
  <div 
    v-click="3"
    style="background-image: url(/svelte_web_component_lifecycle_2.png);"
    class="absolute inset-0 bg-contain bg-no-repeat dark:invert" 
  />
  <div 
    v-click="4"
    style="background-image: url(/svelte_web_component_lifecycle_3.png);"
    class="absolute inset-0 bg-contain bg-no-repeat dark:invert" 
  />
  <div 
    v-click="5"
    style="background-image: url(/svelte_web_component_lifecycle_4.png);"
    class="absolute inset-0 bg-contain bg-no-repeat dark:invert" 
  />
</div>

::right::

<v-clicks>

- Matryoshka approach
  - Outside: empty `shell` web component
  - Inside: svelte component
- `constructor`
  - register observed attributes
- `connectedCallback` → async
  - mount nested svelte component to shadow root
- `attributeChangedCallback`
  - convert attribute to correct type
  - pass props to nested svelte component
- `disconnectedCallback` → async
  - unmount nested svelte component

</v-clicks>

<!--
But how exactly is our svelte component turned into a web component?
You might think that svelte as a compiler could generate code along the lines of the vanilla web component we wrote earlier.
And in fact, up until Svelte 4 it actually used to do something just like that.
But that approach came with quite a few issues and gnarly edge cases.
[click] So nowadays, svelte employs more of an matryoshka approach to generating web components.
On the outside, we have a pretty barebones custom element.
This custom element is basically just an empty shell, that wires up the custom element's lifecycle with the lifecycle of our svelte component on the inside.
Let's take a look at the different stages in the lifecycle of a svelte-built web component to see how things come together:
[click] On creation, the outside wrapper creates the shadow dom and registers all our props as attributes to be observed.
[click] When the element connects to the DOM, our wrapper component waits for a microtask to ensure all children are mounted [WHY?].
Then it simply mounts our component as a regular svelte component to its own shadow root.
[click] Whenever an observed attribute changes, the wrapper will use the converter specified in the svelte options to convert the new value to the correct type,
before then passing it on to our svelte component.
[click] Finally, when the wrapper is disconnected from the DOM, it will once again wait for a microtask, this time to ensure that we're not just moving places in the DOM.
And, if the web component is not reconnected for a microtask, it will unmount the nested svelte component and cleanup effects.
-->

---

# Issues When Building Web Components with Svelte

<v-clicks>

- Getting Started
  - `svelte package` can't be used
  - requires custom build setup
- Boilerplate
  - manual setting of attribute name & type required
  - `<svelte:options/>` needs to be statically analyzable
    - no importing / dynamic generation
- currently no way to SSR web components in Svelte-land

</v-clicks>

<!--
Sadly, building web components with svelte is not all sunshine and rainbows though.
[click] While svelte kit comes with a package mode that allows you to easily build svelte component libraries,
the mode does not allow you to actually compile your components before bundling.
So if you want to ship web components, you'll have to setup your project from scratch.
While this is not a blocker per se, it does mean you have to do a bit more work to get started.
[click] Another issue is with configuring your attributes through the `<svelte:options>` element.
You have to manually add kebab-case attributes and types for all your props, which can be quite a lot of boilerplate if you have a lot of them.
Especially if you use TypeScript it would be neat if the compiler could just automatically set the right converters & kebabize your attributes for you.
Credit where credit is due, vue.js handles this beautifully where the information provided to `defineProps` is leveraged to automate this step entirely.
[click] Finally, this is more of a web component issue rather than a svelte related one,
but there is currently no way to render your svelte-built web components on the server.
As you can imagine, this is the biggest blocker for using web components in production, since your html is now missing vital information before your client side code kicks in,
and you have to deal with layout shifts on hydration.
Google's `lit` library provides an experimental way of rendering lit-built web components on the server,
but since web components are a browser standard there is no universal way of doing SSR for them on the server.
-->

---

```yaml
layout: end
```

<v-clicks>

# Introducing `svebcomponents` alpha!

</v-clicks>

<!--
I'd hate to end this talk on a negative note though,
so I'm happy to share that I was busy working on some user-land tooling.
[click] While it's still far from production ready, today I would like to announce the alpha release of a new library called `svebcomponents`!

It's a collection of utilities that aim to improve the DX and widen the possibilities of building web components with svelte.
-->

---

```yaml
layout: two-cols-header
```

# Using `svebcomponents` alpha

::left::

<div style="background-image: url(/svorry_svott.png);" class="relative h-full bg-contain bg-no-repeat mx-1.5rem my-4rem"/>

::right::

<v-clicks>

- easy to get started with
  - ```bash
    pnpx degit @svebcomponents/template my-wc-project
    ```
- No more boilerplate
  - `@svebcomponents/auto-options`
    - infers types & kebabizes attributes for you
- SSR support (highly experimental, here be dragons!)
  - lit-proposed `ElementRendererRegistry` API
  - provide `ElementRenderer` for svelte-built WCs
  - server side utils & vite plugin to SSR
- (Don't use it in production just yet, please..?!)

</v-clicks>

<!--
So I set out to tackle all three issues I just talked about.
[click] First of all, I wanted to make it as easy to get started with building web components with svelte as starting a new sveltekit project.
To solve this, I created a template project that you can just `degit` & you should be good to go!
[click] The second issue I wanted to tackle was all the boilerplate you need to write to turn your props into attributes.
Vue does this so beautifully by leveraging type information, so I wrote a rollup plugin that does just that.
If you use TypeScript, it should just automatically infer all the correct settings for you.
[click] Finally, I wanted to add support for server side rendering.
While this still is very much experimental, I took a shot at implementing the `ElementRendererRegistry` API that was proposed by the lit team.
This comes with many, many moving parts and is a bit of a rabbit hole, so I won't go into too much detail here.
Basically, it allows authors of web components, to provide an `ElementRenderer` that can be used in serverside JavaScript environments to render web components.
I then created a way for us to provide a `ElementRenderer` for our svelte-built web components,
and combined with a vite plugin that let's us manipulate custom elements inside our svelte templates and some server-side runtime JavaScript,
we can in fact render web components to a declarative shadow dom representation.
[click] If you're interested in this, please play around with the template and let me know what you think.
But please, don't use it in production just yet, I haven't even had the time to write tests for it and also haven't thought about security implications, so there might be some vulnerabilities in there.
-->

---

```yaml
layout: end
```

# Thank you for listening, fellow lizards!

This talk was brought to you by Big JavaScript

<img class="absolute right-2 -bottom-12 h-md" src="/theo_lizard_full.png" />

<!--
That's all I wanted to share with you today, thank you very much for listening & I am excited to hear your feedback on `svebcomponents`!
Bye bye fellow lizards!
-->
