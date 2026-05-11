<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button/Button.svelte';
	import ExpiryPill from '$lib/components/ExpiryPill/ExpiryPill.svelte';
	import type { PageData } from './$types';

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

	const trClass = 'border-accent border-b-1 border-solid';
	const tdFieldClass = 'px-4 py-3 font-semibold text-[#333333]';
	const tdValueClass = 'px-4 py-3 text-[#333333]';
</script>

<div class="mx-36 mt-7 flex flex-col items-center justify-center">
	<div class="mb-12 flex w-full items-center justify-between">
		<div class="text-md mx-0 my-auto w-1/2">
			<h1 class="mx-0 my-2 text-lg font-bold">{product.brand.name} {product.name}</h1>
			<p class="text-sm text-[#999999]">
				{product.type.name}
				<ExpiryPill expiryDate={product.expiryDate} />
			</p>
		</div>
		<Button
			onclick={() => {
				goto(`/products/${product.id}/edit`);
			}}
			label="Edit"
			variant="secondary"
		/>
	</div>

	<div class="mb-8 flex items-center justify-center">
		<table class="border-accent w-2xl border-t-1">
			<tbody>
				<tr class={trClass}>
					<td class={tdFieldClass}>Brand</td>
					<td class={tdValueClass}>{product.brand.name}</td>
				</tr>

				<tr class={trClass}>
					<td class={tdFieldClass}>Type</td>
					<td class={tdValueClass}>{product.type.name}</td>
				</tr>

				<tr class={trClass}>
					<td class={tdFieldClass}>Expiry date</td>
					<td class={tdValueClass}>{formatDate(product.expiryDate)}</td>
				</tr>

				<tr class={trClass}>
					<td class={tdFieldClass}>Buy again?</td>
					<td class={tdValueClass}>
						<span class="status status-{product.repurchaseStatus.toLowerCase()}">
							{statusLabels[product.repurchaseStatus]}
						</span>
					</td>
				</tr>

				<tr class={trClass}>
					<td class={tdFieldClass}>Notes</td>
					<td class={tdValueClass}>{product.notes ?? '—'}</td>
				</tr>

				<tr class={trClass}>
					<td class={tdFieldClass}>Added on</td>
					<td class={tdValueClass}>{formatDate(product.createdAt)}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<a href="/" class="hover:text-primary text-[#333333] hover:underline">← Back to inventory</a>
</div>
