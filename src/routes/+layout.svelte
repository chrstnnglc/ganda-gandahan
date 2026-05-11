<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	import Page from '$lib/components/Page/Page.svelte';
	import '../app.css';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	const titles: Record<string, string> = {
		'/': 'My Skincare',
		'/products/new': 'Add a product',
		'/products/[id]': 'View product',
		'/products/[id]/edit': 'Edit product'
	};

	const title = $derived(titles[$page.url.pathname] ?? 'My Skincare');
</script>

<Page {title}>
	{@render children()}
</Page>
