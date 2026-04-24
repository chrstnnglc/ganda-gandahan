<script>
	import Page from "../stories/Page.svelte";

	let { data } = $props(); 

	const title = "All Products";
</script>

<!-- <Card cosmetic={}></Card>
<Button label="Add Cosmetic" primary={true}></Button> -->
<Page title={title} products={data.products}>
</Page>