<script lang="ts">
	import ProductForm from '../../stories/ProductForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Add a product</h1>

<ProductForm brands={data.brands} productTypes={data.productTypes} />
