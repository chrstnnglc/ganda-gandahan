<script lang="ts">
	import './producttable.css';
	import Button from '$lib/components/Button/Button.svelte';
	import type { Product, Brand } from '@prisma/client';

	type ProductWithBrand = Product & { brand: Brand };

	interface Props {
		products: ProductWithBrand[] | null;
	}

	let { products }: Props = $props();
</script>

<div class="product-table-wrapper">
	{#if !products || products.length === 0}
		<p class="empty-state">No products added yet!</p>
	{:else}
		<table class="table-products">
			<tbody>
				{#each products as product}
					<tr>
						<td>{product.brand.name} {product.name}</td>
						<td><Button label="Edit" /></td>
						<td><Button label="Delete" backgroundColor="red" /></td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
