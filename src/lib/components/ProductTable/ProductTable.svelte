<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import type { ProductWithBrand } from '../../../routes/+page.server';
	import { goto } from '$app/navigation';
	import ExpiryPill from '../ExpiryPill/ExpiryPill.svelte';

	interface Props {
		products: ProductWithBrand[] | null;
	}

	let { products }: Props = $props();
</script>

<div class="text-md mx-auto my-auto w-1/2 text-[#333333]">
	{#if !products || products.length === 0}
		<p class="color-[#999999] text-md px-24 text-center">No products added yet!</p>
	{:else}
		<table class="w-full border-t-1 border-solid border-accent">
			<tbody>
				{#each products as product}
					<tr
						class="transition-bg-0.15s flex items-center justify-between border-b-1 border-solid border-accent px-3 py-5 hover:cursor-pointer hover:bg-accent"
						onclick={() => goto(`/products/${product.id}`)}
					>
						<td class="align-middle leading-5 font-semibold"
							><a href="/products/{product.id}" class="product-link"
								>{product.brand.name} {product.name}</a
							></td
						>
						<td><ExpiryPill expiryDate={product.expiryDate} /></td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
