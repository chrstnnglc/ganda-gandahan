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

	const bgColor = $derived(state === 'soon' ? '#fff3cd' : '#fde8e8');

	const textColor = $derived(state === 'soon' ? '#856404' : '#a32d2d');
</script>

{#if state}
	<span
		class="border-radius-4 inline-block px-1 py-4 text-xs leading-2 font-semibold bg-[{bgColor}] text-[{textColor}]"
	>
		{labels[state]}
	</span>
{/if}
