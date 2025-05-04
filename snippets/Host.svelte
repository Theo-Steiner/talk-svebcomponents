<script>
  let { 
    increments = 1,
  } = $props()
  let count = $state(0)
  $effect(() => {
    $host().dispatchEvent(
      new CustomEvent("count-changed", {
        detail: { count }
      })
    )
  })
</script>

<button onclick={() => count += increments}>
  add {increments} to {count}
</button>
