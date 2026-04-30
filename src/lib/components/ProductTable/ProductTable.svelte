<script lang="ts">
	import './producttable.css';
	import Button from '$lib/components/Button/Button.svelte';
	import type { ProductWithBrand } from '../../../routes/+page.server';
	import { goto } from '$app/navigation';

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
					<tr onclick={() => goto(`/products/${product.id}`)} class="product-row">
						<td
							><a href="/products/{product.id}" class="product-link"
								>{product.brand.name} {product.name}</a
							></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
