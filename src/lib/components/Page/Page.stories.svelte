<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, waitFor, within } from 'storybook/test';
	import Page from './Page.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/Page',
		component: Page,
		parameters: {
			// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
			layout: 'fullscreen'
		}
	});
</script>

<Story
	name="Home"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const addButton = canvas.getByRole('button', { name: /Add/i });
		const productsTable = canvasElement.querySelector('.table-products');

		await expect(addButton).toBeInTheDocument();
		await expect(productsTable).toBeInTheDocument();

		await userEvent.click(addButton);
		await waitFor(() => expect(addButton).not.toBeInTheDocument());
	}}
/>

<Story
	name="Add Product"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const addProductForm = canvasElement.querySelector('.form-add-product');

		await expect(addProductForm).toBeInTheDocument();
	}}
/>
