<script>
	// TODO: Add Storybook components
	let { data } = $props(); 
</script>

<!-- <Page></Page> -->
<h1>All Products</h1>
{#each data.product as product}
<ul>
  <li>{product.brand.name} {product.name}</li>
</ul>
{/each}