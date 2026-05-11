<script lang="ts">
	import ProductForm from '$lib/components/ProductForm/ProductForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mt-7 mb-36">
	<div class="flex flex-col items-center justify-center">
		<h1 class="mx-0 my-2 text-2xl font-semibold">Add a product</h1>

		<div class="w-1/2">
			<ProductForm brands={data.brands} productTypes={data.productTypes} />
		</div>
	</div>
</div>
