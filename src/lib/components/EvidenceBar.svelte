<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { Evidence } from "$lib/types/evidence";

  import evidenceStore from "$lib/stores/evidenceStore";
  import Container from "./Container.svelte";
  import EvidenceButton from "./EvidenceButton.svelte";

  let evidenceList: Writable<Evidence[]> = evidenceStore.store;
</script>

<div class="evidence-bar">
  <Container>
    <div class="evidence-content">
      {#each $evidenceList as evidence, index}
        <EvidenceButton
          {index}
          name={evidence.name}
          imagePath={evidence.imagePath}
          status={evidence.status}
          handleClick={evidenceStore.stepEvidenceStatus}
        />
      {/each}
    </div>
  </Container>
</div>

<style>
  .evidence-bar {
    padding: 1rem 0;
    background-color: hsl(0, 0%, 20%);
  }

  .evidence-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
</style>
