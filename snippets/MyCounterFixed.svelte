<svelte:options customElement={{
  props: {
    increments: { type: "Number" }
  }
}} />
<script>
  let { increments = 1 } = $props()
  let count = $state(0)
</script>

<button onclick={() => count += increments}>
  add {increments} to {count}
</button>
