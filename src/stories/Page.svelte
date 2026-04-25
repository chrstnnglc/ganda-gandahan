<script lang="ts">
	import './page.css';
	import Header from './Header.svelte';
	import type { Products } from '../routes/+page.server';
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';

	let user = $state<{ name: string }>();

	interface Props {
		title: string;
		products: Products[];
	}

	const { title, products }: Props = $props();
</script>

<article>
	<Header
		{user}
		onLogin={() => (user = { name: 'Jane Doe' })}
		onLogout={() => (user = undefined)}
		onCreateAccount={() => (user = { name: 'Jane Doe' })}
	/>

	<section class="storybook-page">
		<div class="heading">
			<h2>{title}</h2>
			<Button
				label="Add"
				primary={true}
				onclick={() => {
					goto('/add');
				}}
			></Button>
		</div>

		<div>
			<table class="table-products">
				<tbody>
					{#each products as product}
						<tr>
							<td> {product.brand.name} {product.name}</td>
							<td> <Button label="Edit"></Button></td>
							<td> <Button label="Delete" backgroundColor="red"></Button></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</article>
