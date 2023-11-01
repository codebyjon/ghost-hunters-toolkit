<script lang="ts">
  import "$lib/styles/global.css";
  import MainNav from "$lib/components/MainNav.svelte";
  import EvidenceBar from "$lib/components/EvidenceBar.svelte";
</script>

<svelte:head>
  <title>Ghost Hunters' Toolkit</title>
</svelte:head>

<MainNav />
<main>
  <EvidenceBar />
</main>
