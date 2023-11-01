<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { Evidence } from "$lib/types/evidence";

  import NotFound from "$lib/assets/not-found.svg";
  import Found from "$lib/assets/found.svg";
  import Excluded from "$lib/assets/excluded.svg";

  import evidenceStore from "$lib/stores/evidenceStore";
  // import EvidenceButton from "./EvidenceButton.svelte";

  let evidenceList: Writable<Evidence[]> = evidenceStore.store;
</script>

<div>
  {#each $evidenceList as evidence, index}
    <!-- <EvidenceButton
      {index}
      name={evidence.name}
      imagePath={evidence.imagePath}
      status={evidence.status}
      handleClick={evidenceStore.stepEvidenceStatus}
    /> -->

    <button
      class="evidence-button"
      on:click={() => evidenceStore.stepEvidenceStatus(index)}
    >
      <img src={evidence.imagePath} alt={evidence.name} />
      {evidence.name}
      {#if evidence.status === 0}
        <img src={NotFound} alt="Not Found" />
      {:else if evidence.status === 1}
        <img src={Found} alt="Found" />
      {:else}
        <img src={Excluded} alt="Excluded" />
      {/if}
    </button>
  {/each}
</div>

<style>
  div {
    padding: 1rem;
    background-color: hwb(0 20% 80%);

    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

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
