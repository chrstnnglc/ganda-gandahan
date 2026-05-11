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

	const bgColor = $derived(state === 'soon' ? 'bg-[#fff3cd]' : 'bg-[#fde8e8]');

	const textColor = $derived(state === 'soon' ? 'text-[#856404]' : 'text-[#a32d2d]');
</script>

{#if state}
	<span
		class={`border-radius-4 ${bgColor} ${textColor} inline-block rounded-2xl px-3 py-2 text-xs leading-2 font-semibold`}
	>
		{labels[state]}
	</span>
{/if}
