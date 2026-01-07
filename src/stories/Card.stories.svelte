<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from './Card.svelte';

  const { Story } = defineMeta({
    title: 'Example/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {},
  });
</script>

<Story name="Primary" args={{ cosmetic: {
  id: 0,
	brand: "Brand",
	name: "Name",
	category: "Lip tint",
	price: 100,
	tone: "Warm",
	shade: "00 Warm Shade",
	notes: "Daily use",
} }} />