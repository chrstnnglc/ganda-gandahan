<script lang="ts">
  import './page.css';
  import Header from './Header.svelte';

  let user = $state<{ name: string }>();
</script>

<article>
  <Header
    {user}
    onLogin={() => (user = { name: 'Jane Doe' })}
    onLogout={() => (user = undefined)}
    onCreateAccount={() => (user = { name: 'Jane Doe' })}
  />

  <section class="storybook-page">
  </section>
</article>
