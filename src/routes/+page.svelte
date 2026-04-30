<script>
	import './layout.css';
	import { goto } from '$app/navigation';
	import ProductTable from '$lib/components/ProductTable/ProductTable.svelte';
	import Button from '../lib/components/Button/Button.svelte';

	let { data } = $props();

	const title = 'My Skincare';
</script>

<!-- TODO: Convert to a table -->
<div>
	<div class="heading mb-10 flex items-center justify-between">
		<h2>{title}</h2>
		<Button
			label="Add"
			primary={true}
			onclick={() => {
				goto('/products/add');
			}}
		></Button>
	</div>

	<ProductTable products={data.products} />
</div>
