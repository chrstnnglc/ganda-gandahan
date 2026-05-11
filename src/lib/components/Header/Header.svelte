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
		class="storybook-header flex items-center justify-between border-transparent bg-[#ffcef3] p-5"
	>
		<div>
			<a href="/"><h1>:D</h1></a>
		</div>
	</div>
</header>
