<script lang="ts">
	import Header from '../Header/Header.svelte';
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

	<section class="w-max-full text-md mx-0 my-auto px-[48px] py-[20px] text-[#333333]">
		{@render children()}
	</section>
</article>
