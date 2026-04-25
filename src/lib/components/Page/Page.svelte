<script lang="ts">
	import './page.css';
	import Header from '../Header/Header.svelte';
	import type { Products } from '../../../routes/+page.server';
	import Button from '../Button/Button.svelte';
	import { goto } from '$app/navigation';

	let user = $state<{ name: string }>();

	interface Props {
		title: string;
		products: Products[] | null;
		pageType: 'HOME' | 'ADD_PRODUCTS';
	}

	const { title, products, pageType }: Props = $props();
</script>

<article>
	<Header {user} />

	<!-- content -->

	<section class="storybook-page">
		<div>
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
		</div>
	</section>
</article>
