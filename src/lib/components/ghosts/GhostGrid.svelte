<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { Ghost } from "$lib/types/ghost";

  import ghostStore from "$lib/stores/ghostStore";
  import GhostCard from "./GhostCard.svelte";
  import MasonryGrid from "../MasonryGrid.svelte";

  let ghostList: Writable<Ghost[]> = ghostStore.store;
</script>

<div>
  {#each $ghostList as ghost (ghost.name)}
    <GhostCard
      name={ghost.name}
      huntSanity={ghost.huntSanity}
      evidence={ghost.evidence}
      tips={ghost.tips}
    />
  {/each}
</div>
