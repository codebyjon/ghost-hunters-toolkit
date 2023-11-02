<script lang="ts">
  import "$lib/styles/global.css";
  import MainNav from "$lib/components/MainNav.svelte";
  import EvidenceBar from "$lib/components/evidence/EvidenceBar.svelte";
  import GhostGrid from "$lib/components/ghosts/GhostGrid.svelte";
  import Container from "$lib/components/Container.svelte";
</script>

<svelte:head>
  <title>Ghost Hunters' Toolkit</title>
</svelte:head>

<MainNav />
<main>
  <EvidenceBar />
  <Container>
    <GhostGrid />
  </Container>
</main>
