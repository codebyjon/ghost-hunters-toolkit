<script lang="ts">
  import evidenceStore from "$lib/stores/evidenceStore";

  export let name: string;
  export let huntSanity: number;
  export let evidence: string[];
  export let tips: string[];

  let showTips = false;

  const toggleTips = () => {
    showTips = !showTips;
  };
</script>

<div class="ghost-card">
  <p class="ghost-name">{name}</p>
  <p>Hunt Sanity: <strong>{huntSanity}%</strong></p>
  <div class="evidence-row">
    {#each evidence as evidence}
      <div class="evidence-cell">
        <img src={evidenceStore.getEvidenceImage(evidence)} alt={evidence} />
        <p class="evidence-label">{evidence}</p>
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
    gap: 0.5rem;
    padding: 1rem;
    background-color: hsl(0, 0%, 20%);
    border-radius: 0.25rem;
    align-content: flex-start;
    align-self: flex-start;
    min-height: 100%;
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
    font-size: 2rem;
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
    font-weight: 300;
  }

  .toggle-tips-button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 0;
    color: hsl(var(--body-foreground-hsl));
    background-color: hsl(0, 0%, 23%);
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0.25rem;
    justify-self: center;

    &:hover {
      background-color: hsl(0, 0%, 25%);
    }
  }
</style>
