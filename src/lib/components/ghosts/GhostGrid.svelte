<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { Ghost } from "$lib/types/ghost";

  import ghostStore from "$lib/stores/ghostStore";
  import GhostCard from "./GhostCard.svelte";

  let ghostList: Writable<Ghost[]> = ghostStore.store;
</script>

<div class="ghost-grid">
  {#each $ghostList as ghost, index}
    <GhostCard
      name={ghost.name}
      huntSanity={ghost.huntSanity}
      evidence={ghost.evidence}
      tips={ghost.tips}
    />
  {/each}
</div>

<style>
  .ghost-grid {
    padding-top: 1rem;
    display: grid;
    gap: 1rem;
    justify-content: center;
    padding: 1rem 0;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
