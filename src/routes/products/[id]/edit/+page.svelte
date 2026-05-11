<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ProductForm from '$lib/components/ProductForm/ProductForm.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// svelte-ignore state_referenced_locally
	const { product, brands, productTypes } = data;

	const expiryDate = product.expiryDate
		? new Date(product.expiryDate).toISOString().split('T')[0]
		: undefined;
</script>

<div class="mt-7 mb-36">
	<div class="flex flex-col items-center justify-center">
		<h1 class="mx-0 my-2 text-2xl font-bold">Edit product</h1>
		<a href="/products/{product.id}" class="text-[#333333] hover:text-primary hover:underline"
			>Cancel</a
		>

		<div class="w-1/2">
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
			<form method="POST" action="?/delete" class="mt-5 flex flex-col">
				<Button type="submit" label="Delete product" variant="warning" />
			</form>
		</div>
	</div>
</div>
