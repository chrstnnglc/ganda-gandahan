<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../Button/Button.svelte';

	interface Props {
		user?: { name: string };
		onLogin?: () => void;
		onLogout?: () => void;
		onCreateAccount?: () => void;
	}

	const {}: Props = $props();

	const onClick = () => {
		goto('/');
	};
</script>

<header>
	<div
		class="storybook-header bg-secondary flex items-center justify-between border-transparent p-7"
	>
		<div>
			<a href="/"
				><h1 class="align-center mx-3 inline-block text-2xl leading-none font-bold">
					ganda-gandahan cosmetics and skincare list
				</h1></a
			>
		</div>
	</div>
</header>
