<script lang="ts">
  let count: number = 0;
  const handleClick = (): void => {
    count += 1;
  };
</script>

<button on:click={handleClick}>{count}</button>
