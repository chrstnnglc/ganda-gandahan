<script lang="ts">
  import './page.css';
  import Header from './Header.svelte';
	import type { Products } from '../routes/+page.server';

  let user = $state<{ name: string }>();

  interface Props {
    title: string;
    products: Products[];
  }

  const { title, products }: Props = $props();
</script>

<article>
  <Header
    {user}
    onLogin={() => (user = { name: 'Jane Doe' })}
    onLogout={() => (user = undefined)}
    onCreateAccount={() => (user = { name: 'Jane Doe' })}
  />

  <section class="storybook-page">
    <h2>{title}</h2>
    <table>
      <tbody>
        {#each products as product}
          <tr>
            <td> {product.brand.name} {product.name}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
</article>
