<script lang="ts">
  import evidenceStore from "$lib/stores/evidenceStore";
  import HuntIcon from "$lib/components/icons/HuntIcon.svelte";

  export let name: string;
  export let huntSanity: number;
  export let evidence: string[];
  export let tips: string[];

  let showTips = false;

  const toggleTips = () => {
    showTips = !showTips;
  };
</script>

<div class="ghost-card masonry-item">
  <div class="name-sanity-row">
    <p class="ghost-name">{name}</p>
    <div class="hunt-sanity">
      <HuntIcon />
      <p><strong>{huntSanity}%</strong></p>
    </div>
  </div>
  <div class="evidence-row">
    {#each evidence as e}
      <div class="evidence-cell">
        <img src={evidenceStore.getEvidenceImage(e)} alt={e} />
        <p class={`evidence-label`}>
          {e}
        </p>
      </div>
    {/each}
  </div>
  <button class="toggle-tips-button" on:click={toggleTips}
    >{showTips ? "Hide" : "Show"} Tips</button
  >
  <ul class={`tip-list ${showTips ? "show-tips" : null}`}>
    {#each tips as tip}
      <li class="ghost-tip">{tip}</li>
    {/each}
  </ul>
</div>

<style>
  .ghost-card {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    background-color: hsl(0, 0%, 15%);
    border-radius: 0.25rem;
    min-height: 100%;
    break-inside: avoid-column;
  }

  .name-sanity-row {
    display: flex;
    gap: 1rem;
    & > .hunt-sanity {
      color: hsl(0, 35%, 50%);
    }
  }

  .hunt-sanity {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 0.25rem;
  }

  .evidence-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    padding: 0.5rem 0;
  }

  .evidence-cell {
    display: grid;
    gap: 0.5rem;
    justify-items: center;
  }

  .evidence-label {
    font-size: 0.75rem;
  }

  .ghost-name {
    font-size: 1.5rem;
  }

  .tip-list {
    display: grid;
    gap: 1rem;
    overflow-y: hidden;
    height: 0;
  }

  .tip-list.show-tips {
    height: auto;
  }

  .ghost-tip {
    font-size: 0.875rem;
  }

  .toggle-tips-button {
    justify-self: center;
  }

  .found-evidence {
    color: green;
  }
</style>
