<svelte:options customElement={{
  tag: "svelte-counter",
  shadow: "none",
  extend: (ctor) => {
    return class extends ctor {
      constructor() {
        super();
        console.log("used as the base class");
      }
    }
  }
}} />
<script>
  let { 
    increments = 1,
  } = $props()
  let count = $state(0)
</script>

<button onclick={() => count += increments}>
  add {increments} to {count}
</button>
