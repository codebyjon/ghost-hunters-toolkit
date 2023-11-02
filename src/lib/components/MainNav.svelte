<script>
  import "$lib/styles/animations.css";

  import Container from "./Container.svelte";
</script>

<div class="app-bar">
  <Container>
    <nav>
      <img
        src="/img/cute-ghost-flat.webp"
        alt="cute ghost"
        class="brand floating"
      />
      <span class="link-area">
        <div
          style="background: #333; border-radius: 100%; width: 32px; height: 32px;"
        />
        <div
          style="background: #333; border-radius: 100%; width: 32px; height: 32px;"
        />
      </span>
    </nav>
  </Container>
</div>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .brand {
    width: 2rem;
    height: 2rem;
  }

  .app-bar {
    background-color: hsl(var(--navbar-background-hsl));
    box-shadow: 2px 0 10px hsla(0, 0%, 0%, 20%);
  }

  .link-area {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
  }
</style>
