<script lang="ts">
	import ProductForm from '$lib/components/ProductForm/ProductForm.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

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

<!-- TODO: Move to components -->
<!-- <style>
	.edit-page {
		margin: 0 auto;
		padding: 48px 20px;
		max-width: 600px;
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	.edit-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32px;
	}

	h1 {
		font-size: 24px;
		font-weight: 700;
		margin: 0;
	}

	.cancel-link {
		font-size: 13px;
		color: #1ea7fd;
		text-decoration: none;
	}

	.cancel-link:hover {
		text-decoration: underline;
	}

	.delete-form {
		margin-top: 48px;
		padding-top: 24px;
		border-top: 1px solid #e0e0e0;
	}

	.delete-btn {
		padding: 10px 24px;
		font-size: 14px;
		font-weight: 700;
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		color: #fff;
		background: #a32d2d;
		border: none;
		border-radius: 1em;
		cursor: pointer;
		transition: background 0.15s;
	}

	.delete-btn:hover {
		background: #7f1f1f;
	}
</style> -->
