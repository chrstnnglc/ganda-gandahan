<script>
	import './layout.css';
	import { goto } from '$app/navigation';
	import ProductTable from '$lib/components/ProductTable/ProductTable.svelte';
	import Button from '../lib/components/Button/Button.svelte';

	let { data } = $props();
</script>

<div class="mt-7 mb-36">
	<div class="heading mb-10 flex items-center justify-center">
		<Button
			label="Add"
			variant="primary"
			onclick={() => {
				goto('/products/add');
			}}
		></Button>
	</div>

	<ProductTable products={data.products} />
</div>
