<script lang="ts">
  import NotFound from "$lib/assets/not-found.svg";
  import Found from "$lib/assets/found.svg";
  import Excluded from "$lib/assets/excluded.svg";

  export let index: number;
  export let name: string;
  export let imagePath: string;
  export let handleClick: (index: number) => void;
  export let status: number;
</script>

<button class="evidence-button" on:click={() => handleClick(index)}>
  <img src={imagePath} alt={name} />
  {name}
  {#if status === 0}
    <img src={NotFound} alt="Not Found" />
  {:else if status === 1}
    <img src={Found} alt="Found" />
  {:else}
    <img src={Excluded} alt="Excluded" />
  {/if}
</button>

<style>
  .evidence-button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 0;
    color: hsl(var(--body-foreground-hsl));
    background-color: hsl(0, 0%, 23%);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0.25rem;

    &:hover {
      background-color: hsl(0, 0%, 25%);
    }
  }
</style>
