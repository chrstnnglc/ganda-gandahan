<script>
	import Page from '../stories/Page.svelte';

	let { data } = $props();

	const title = 'All Products';
</script>

<Page {title} products={data.products}></Page>
