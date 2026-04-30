<script lang="ts">
	import ProductForm from '$lib/components/ProductForm/ProductForm.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// svelte-ignore state_referenced_locally
	const { product, brands, productTypes } = data;

	const expiryDate = product.expiryDate
		? new Date(product.expiryDate).toISOString().split('T')[0]
		: undefined;
</script>

<div class="edit-page">
	<div class="edit-header">
		<h1>Edit product</h1>
		<a href="/products/{product.id}" class="cancel-link">Cancel</a>
	</div>

	<ProductForm
		{brands}
		{productTypes}
		actionPath="?/update"
		submitLabel="Save changes"
		initialData={{
			name: product.name,
			brandName: product.brand.name,
			typeName: product.type.name,
			expiryDate,
			repurchaseStatus: product.repurchaseStatus,
			notes: product.notes ?? undefined
		}}
	/>

	<form method="POST" action="?/delete" class="delete-form">
		<button type="submit" class="delete-btn">Delete product</button>
	</form>
</div>
