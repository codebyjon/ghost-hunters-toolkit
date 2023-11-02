<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { Evidence } from "$lib/types/evidence";

  import evidenceStore from "$lib/stores/evidenceStore";
  import Container from "$lib/components/Container.svelte";
  import EvidenceButton from "./EvidenceButton.svelte";

  let evidenceList: Writable<Evidence[]> = evidenceStore.store;
</script>

<div class="evidence-bar">
  <Container>
    <div class="evidence-buttons">
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

  .evidence-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    justify-content: center;
    gap: 0.5rem;
    flex: 1;
  }
</style>
