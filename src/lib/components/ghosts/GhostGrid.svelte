<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { Ghost } from "$lib/types/ghost";

  import ghostStore from "$lib/stores/ghostStore";
  import GhostCard from "./GhostCard.svelte";
  import { onMount } from "svelte";

  let ghostList: Writable<Ghost[]> = ghostStore.store;
  let sortedColumns: Ghost[][];
  let columns: number = 1;

  ghostList.subscribe((cgs) => {
    sortedColumns = distributeGhosts(cgs, columns);
  });

  function updateColumns() {
    const width = window.innerWidth;
    if (width < 640) {
      columns = 1;
    } else if (width < 1024) {
      columns = 2;
    } else {
      columns = 3;
    }
    sortedColumns = distributeGhosts($ghostList, columns);
  }

  function distributeGhosts<T>(items: T[], numColumns: number): T[][] {
    const columns: T[][] = Array.from({ length: numColumns }, () => []);

    items.forEach((item, index) => {
      const columnIndex = index % numColumns;
      columns[columnIndex].push(item);
    });

    return columns;
  }

  onMount(() => {
    window.addEventListener("resize", updateColumns);
    updateColumns();
    return () => window.removeEventListener("resize", updateColumns);
  });
</script>

<div class="grid">
  {#each sortedColumns as column}
    <div class="column">
      {#each column as ghost (ghost.name)}
        <GhostCard
          name={ghost.name}
          huntSanity={ghost.huntSanity}
          evidence={ghost.evidence}
          tips={ghost.tips}
        />
      {/each}
    </div>
  {/each}
</div>

<style>
  .grid {
    display: flex;
    gap: 2rem;
    padding: 2rem 0;
  }

  .column {
    flex: 1;
    display: grid;
    gap: 2rem;
    align-content: flex-start;
  }
</style>
