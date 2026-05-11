<script lang="ts">
	interface Props {
		expiryDate: Date | null;
	}

	let { expiryDate }: Props = $props();

	const EXPIRY_THRESHOLD_DAYS = 90;

	function getExpiryState(date: Date | null): 'expired' | 'soon' | null {
		if (!date) return null;
		const today = new Date();
		const expiry = new Date(date);
		const diffDays = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
		if (diffDays < 0) return 'expired';
		if (diffDays <= EXPIRY_THRESHOLD_DAYS) return 'soon';
		return null;
	}

	const state = $derived(getExpiryState(expiryDate));

	const labels: Record<string, string> = {
		expired: 'Expired',
		soon: 'Expiring soon'
	};
</script>

{#if state}
	<span class="expiry-pill expiry-pill--{state}">
		{labels[state]}
	</span>
{/if}
