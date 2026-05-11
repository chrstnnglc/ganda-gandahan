<script module lang="ts">
	import { within, expect } from 'storybook/test';
	import ExpiryPill from './ExpiryPill.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	export const meta = {
		title: 'Components/ExpiryPill',
		component: ExpiryPill,
		tags: ['autodocs']
	};

	const { Story } = defineMeta({
		title: 'Components/ExpiryPill',
		component: ExpiryPill,
		tags: ['autodocs'],
		argTypes: {
			expiryDate: { control: 'date' }
		}
	});

	const today = new Date();

	function daysFromToday(days: number): Date {
		const date = new Date(today);
		date.setDate(date.getDate() + days);
		return date;
	}
</script>

<!-- No pill rendered — product is not expiring soon -->
<Story
	name="Not expiring"
	args={{ expiryDate: daysFromToday(180) }}
	play={async ({ canvasElement }) => {
		const pill = canvasElement.querySelector('.expiry-pill');
		await expect(pill).not.toBeInTheDocument();
	}}
/>

<!-- Expiring soon — within 90 days -->
<Story
	name="Expiring soon"
	args={{ expiryDate: daysFromToday(45) }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const pill = canvas.getByText('Expiring soon');
		await expect(pill).toBeInTheDocument();
		await expect(pill).toHaveClass('expiry-pill--soon');
	}}
/>

<!-- Expired — past expiry date -->
<Story
	name="Expired"
	args={{ expiryDate: daysFromToday(-10) }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const pill = canvas.getByText('Expired');
		await expect(pill).toBeInTheDocument();
		await expect(pill).toHaveClass('expiry-pill--expired');
	}}
/>

<!-- No expiry date set -->
<Story
	name="No expiry date"
	args={{ expiryDate: null }}
	play={async ({ canvasElement }) => {
		const pill = canvasElement.querySelector('.expiry-pill');
		await expect(pill).not.toBeInTheDocument();
	}}
/>
