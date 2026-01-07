<script lang="ts">
	import type { Cosmetic } from '../db/cosmetic';
  import './card.css';

  interface Props {
    cosmetic: Cosmetic;
  }

  const { cosmetic, ...props }: Props = $props();
  
  // let mode = $derived(primary ? 'storybook-button--primary' : 'storybook-button--secondary');
  // let style = $derived(backgroundColor ? `background-color: ${backgroundColor}` : '');
</script>

<div
  {...props}
  class="storybook-card"
>
  <h2>{cosmetic.name} {cosmetic.shade}</h2>
  <h4>{cosmetic.brand}</h4>
  <h4>{cosmetic.category}</h4>
</div>
