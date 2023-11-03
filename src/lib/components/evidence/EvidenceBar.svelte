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
    flex: 1;
    display: grid;
    gap: 0.5rem;

    @media (min-width: 470px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 848px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1248px) {
      @media (min-width: 470px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
</style>
