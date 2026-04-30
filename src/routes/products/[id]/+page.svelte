<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

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
			<p class="product-type">{product.type.name}</p>
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
			<dt>Repurchase status</dt>
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

<!-- TODO: move to components I Guess -->
<!-- <style>
	.product-detail {
		margin: 0 auto;
		padding: 48px 20px;
		max-width: 600px;
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #333;
		line-height: 24px;
	}

	.product-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 32px;
	}

	h1 {
		font-size: 24px;
		font-weight: 700;
		margin: 0 0 4px;
		line-height: 1.2;
	}

	.product-type {
		font-size: 13px;
		color: #999;
		margin: 0;
	}

	.edit-link {
		padding: 8px 20px;
		font-size: 13px;
		font-weight: 700;
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		color: #fff;
		background: #1ea7fd;
		border-radius: 1em;
		text-decoration: none;
		white-space: nowrap;
		transition: background 0.15s;
	}

	.edit-link:hover {
		background: #0d8de0;
	}

	.product-fields {
		display: flex;
		flex-direction: column;
		gap: 0;
		margin: 0 0 32px;
	}

	.field {
		display: flex;
		padding: 14px 0;
		border-bottom: 1px solid #e0e0e0;
		gap: 16px;
	}

	.field:last-child {
		border-bottom: none;
	}

	dt {
		width: 160px;
		min-width: 160px;
		font-weight: 700;
		font-size: 13px;
		color: #999;
	}

	dd {
		margin: 0;
		flex: 1;
	}

	.notes {
		white-space: pre-wrap;
		line-height: 1.6;
	}

	.status {
		display: inline-block;
		padding: 2px 10px;
		border-radius: 1em;
		font-size: 12px;
		font-weight: 700;
	}

	.status-buy_again {
		background: #e7fdd8;
		color: #357a14;
	}

	.status-maybe {
		background: #fff3cd;
		color: #856404;
	}

	.status-stop {
		background: #fde8e8;
		color: #a32d2d;
	}

	.back-link {
		font-size: 13px;
		color: #1ea7fd;
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}
</style> -->
