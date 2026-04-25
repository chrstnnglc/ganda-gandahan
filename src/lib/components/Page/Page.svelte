<script lang="ts">
	import './page.css';
	import Header from '../Header/Header.svelte';
	import type { Products } from '../../../routes/+page.server';
	import type { Snippet } from 'svelte';

	let user = $state<{ name: string }>();

	interface Props {
		title: string;
		children: Snippet;
	}

	const { title, children }: Props = $props();
</script>

<article>
	<Header {user} />

	<section class="storybook-page">
		{@render children()}
	</section>
</article>
