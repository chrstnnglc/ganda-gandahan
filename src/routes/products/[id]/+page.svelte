<script lang="ts">
	import ExpiryPill from '$lib/components/ExpiryPill/ExpiryPill.svelte';
	import type { PageData } from './$types';
	import './+page.css';

	let { data }: { data: PageData } = $props();

	// svelte-ignore state_referenced_locally
	const { product } = data;

	function formatDate(date: Date | null) {
		if (!date) return '—';
		return new Date(date).toLocaleDateString('en-JP', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	const statusLabels: Record<string, string> = {
		BUY_AGAIN: 'Buy again',
		STOP: 'Stop',
		MAYBE: 'Maybe'
	};
</script>

<div class="product-detail">
	<div class="product-header">
		<div>
			<h1>{product.brand.name} {product.name}</h1>
			<p class="product-type">
				{product.type.name}
				<ExpiryPill expiryDate={product.expiryDate} />
			</p>
		</div>
		<a href="/products/{product.id}/edit" class="edit-link">Edit</a>
	</div>

	<dl class="product-fields">
		<div class="field">
			<dt>Brand</dt>
			<dd>{product.brand.name}</dd>
		</div>

		<div class="field">
			<dt>Type</dt>
			<dd>{product.type.name}</dd>
		</div>

		<div class="field">
			<dt>Expiry date</dt>
			<dd>{formatDate(product.expiryDate)}</dd>
		</div>

		<div class="field">
			<dt>Buy again?</dt>
			<dd>
				<span class="status status-{product.repurchaseStatus.toLowerCase()}">
					{statusLabels[product.repurchaseStatus]}
				</span>
			</dd>
		</div>

		<div class="field">
			<dt>Notes</dt>
			<dd class="notes">{product.notes ?? '—'}</dd>
		</div>

		<div class="field">
			<dt>Added on</dt>
			<dd>{formatDate(product.createdAt)}</dd>
		</div>
	</dl>

	<a href="/" class="back-link">← Back to inventory</a>
</div>
