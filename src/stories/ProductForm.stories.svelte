<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, waitFor, within } from 'storybook/test';
	import ProductForm from './ProductForm.svelte';
	import { fn } from 'storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/ProductForm',
		component: ProductForm,
		parameters: {
			// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
			layout: 'fullscreen'
		}
	});

	const mockBrands = [
		{ id: 'brand-1', name: 'COSRX' },
		{ id: 'brand-2', name: 'Laneige' },
		{ id: 'brand-3', name: 'Innisfree' }
	];

	const mockProductTypes = [
		{ id: 'type-1', name: 'Serum' },
		{ id: 'type-2', name: 'Moisturiser' },
		{ id: 'type-3', name: 'Cleanser' }
	];
</script>

<Story
	name="Empty"
	args={{
		brands: mockBrands,
		productTypes: mockProductTypes,
		submitLabel: 'Add product'
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const nameInput = canvas.getByLabelText(/product name/i);
		const submitButton = canvas.getByRole('button', { name: /add product/i });

		await expect(nameInput).toBeInTheDocument();
		await expect(submitButton).toBeInTheDocument();
	}}
/>

<!-- Pre-filled form — simulates the edit flow -->
<Story
	name="Prefilled"
	args={{
		brands: mockBrands,
		productTypes: mockProductTypes,
		submitLabel: 'Save changes',
		actionPath: '?/update',
		// Prefilled story — update brandId to brandName
		initialData: {
			name: 'Advanced Snail 96 Mucin Power Essence',
			brandName: 'COSRX',
			typeName: 'Serum',
			expiryDate: '2026-08-01',
			repurchaseStatus: 'BUY_AGAIN',
			notes: 'Holy grail for hydration.'
		}
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const nameInput = canvas.getByLabelText(/product name/i);
		const submitButton = canvas.getByRole('button', { name: /save changes/i });

		await expect(nameInput).toBeInTheDocument();
		await expect(nameInput).toHaveValue('Advanced Snail 96 Mucin Power Essence');
		await expect(submitButton).toBeInTheDocument();

		await userEvent.clear(nameInput);
		await userEvent.type(nameInput, 'Updated Product Name');
		await waitFor(() => expect(nameInput).toHaveValue('Updated Product Name'));
	}}
/>
