<script>
	import { goto } from '$app/navigation';
	import Button from '../lib/components/Button/Button.svelte';

	let { data } = $props();

	const title = 'All Products';
</script>

<!-- <Page {title} products={data.products}></Page> -->
<div>
	<div class="heading">
		<h2>{title}</h2>
		<Button
			label="Add"
			primary={true}
			onclick={() => {
				goto('/products/add');
			}}
		></Button>
	</div>

	<div>
		<table class="table-products">
			<tbody>
				{#each data.products as product}
					<tr>
						<td> {product.brand.name} {product.name}</td>
						<td> <Button label="Edit"></Button></td>
						<td> <Button label="Delete" backgroundColor="red"></Button></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
