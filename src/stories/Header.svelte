<script lang="ts">
	import './header.css';

	interface Props {
		user?: { name: string };
		onLogin?: () => void;
		onLogout?: () => void;
		onCreateAccount?: () => void;
	}

	const {}: Props = $props();
</script>

<header>
	<div class="storybook-header">
		<div>
			<h1>:D</h1>
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
