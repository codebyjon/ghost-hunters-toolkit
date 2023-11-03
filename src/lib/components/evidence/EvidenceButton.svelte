<script lang="ts">
  import NotFoundIcon from "$lib/components/icons/NotFoundIcon.svelte";
  import FoundIcon from "$lib/components/icons/FoundIcon.svelte";
  import ExcludedIcon from "$lib/components/icons/ExcludedIcon.svelte";

  export let index: number;
  export let name: string;
  export let imagePath: string;
  export let handleClick: (index: number) => void;
  export let status: number;
</script>

<button class="evidence-button" on:click={() => handleClick(index)}>
  {#if status === 0}
    <NotFoundIcon />
  {:else if status === 1}
    <FoundIcon />
  {:else}
    <ExcludedIcon />
  {/if}
  {name}
  <img src={imagePath} alt={name} />
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
    justify-content: space-between;
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0.25rem;
    min-width: max-content;

    &:hover {
      background-color: hsl(0, 0%, 25%);
    }
  }
</style>
