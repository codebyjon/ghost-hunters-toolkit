<script lang="ts">
  import "$lib/styles/global.css";
  import MainNav from "$lib/components/MainNav.svelte";

  import evidenceStore, { stepStatus } from "$lib/stores/evidenceStore";
</script>

<svelte:head>
  <title>Ghost Hunters' Toolkit</title>
</svelte:head>

<MainNav />
<main>
  <div class="evidence-bar">
    {#each $evidenceStore as e, i}
      <button on:click={() => stepStatus(i)} class="evidence-button">
        <img src={e.imagePath} alt={e.name} />
        <span>{e.name}</span>
      </button>
    {/each}
  </div>
</main>

<style>
  .evidence-bar {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 0.25rem;
    margin-top: 0.25rem;
  }
  .evidence-button {
    border: 0;
    display: grid;
    grid-auto-flow: column;
    gap: 0.25rem;
    align-items: center;
    padding: 0.25rem 0.5rem;
    background-color: hsla(0, 0%, 20%, 50%);
    color: hsl(var(--body-foreground-hsl));

    &.found {
      color: green;
    }

    &.excluded {
      text-decoration: line-through;
    }
  }
</style>
