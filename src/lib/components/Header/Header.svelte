<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../Button/Button.svelte';
	import './header.css';

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
	<div class="storybook-header">
		<div>
			<a href="/"><h1>:D</h1></a>
		</div>
		<!-- <div>
      {#if user}
        <span class="welcome">
          Welcome, <b>{user.name}</b>!
        </span>
        <Button size="small" onclick={onLogout} label="Log out" />
      {:else}
        <Button size="small" onclick={onLogin} label="Log in" />
        <Button primary size="small" onclick={onCreateAccount} label="Sign up" />
      {/if}
    </div> -->
	</div>
</header>
