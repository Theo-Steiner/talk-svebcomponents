<svelte:options customElement={{
  props: {
    increments: { 
      type: "Number",
      reflect: true,
    },
    startingValue: {
      attribute: "starting-value",
      type: "Number"
    }
  },
}} />
<script>
  let { 
    increments = 1,
    startingValue = 0
  } = $props()
  let count = $state(startingValue)
</script>

<button onclick={() => count += increments}>
  add {increments} to {count}
</button>
