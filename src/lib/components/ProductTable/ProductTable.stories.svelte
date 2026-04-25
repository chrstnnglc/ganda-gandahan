<script module>
	import { within, expect } from 'storybook/test';
	import ProductTable from './ProductTable.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/ProductTable',
		component: ProductTable,
		parameters: {
			// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
			layout: 'fullscreen'
		}
	});

	const mockProducts = [
		{
			id: 'product-1',
			name: 'Advanced Snail 96 Mucin Power Essence',
			brand: { id: 'brand-1', name: 'COSRX' },
			typeId: 'type-1',
			expiryDate: new Date('2026-08-01'),
			repurchaseStatus: 'BUY_AGAIN',
			notes: 'Holy grail for hydration.',
			wishlistItemId: null,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 'product-2',
			name: 'Water Sleeping Mask',
			brand: { id: 'brand-2', name: 'Laneige' },
			typeId: 'type-2',
			expiryDate: new Date('2026-05-15'),
			repurchaseStatus: 'BUY_AGAIN',
			notes: 'Great overnight mask.',
			wishlistItemId: null,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 'product-3',
			name: 'Green Tea Seed Serum',
			brand: { id: 'brand-3', name: 'Innisfree' },
			typeId: 'type-1',
			expiryDate: new Date('2025-12-01'),
			repurchaseStatus: 'MAYBE',
			notes: 'Not sure yet.',
			wishlistItemId: null,
			createdAt: new Date(),
			updatedAt: new Date()
		}
	];
</script>

<!-- Populated table -->
<Story
	name="With products"
	args={{ products: mockProducts }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const table = canvasElement.querySelector('.table-products');
		const rows = canvasElement.querySelectorAll('.table-products tbody tr');

		await expect(table).toBeInTheDocument();
		await expect(rows.length).toBe(3);
	}}
/>

<!-- Empty state -->
<Story
	name="Empty"
	args={{ products: [] }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const emptyMessage = canvas.getByText('No products added yet!');
		const table = canvasElement.querySelector('.table-products');

		await expect(emptyMessage).toBeInTheDocument();
		await expect(table).not.toBeInTheDocument();
	}}
/>

<!-- Null state -->
<Story
	name="Null"
	args={{ products: null }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const emptyMessage = canvas.getByText('No products added yet!');

		await expect(emptyMessage).toBeInTheDocument();
	}}
/>
