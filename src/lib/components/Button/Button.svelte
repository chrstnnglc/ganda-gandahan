<script lang="ts">
	interface Props {
		variant: 'primary' | 'secondary' | 'warning';
		backgroundColor?: string;
		size?: 'small' | 'medium' | 'large';
		label: string;
		type?: 'button' | 'submit' | 'reset';
		onclick?: () => void;
		disabled: boolean;
	}

	const {
		variant = 'secondary',
		backgroundColor,
		size = 'medium',
		label,
		type = 'button',
		disabled = false,
		...props
	}: Props = $props();

	const primaryStyle = 'bg-primary border-primary';
	const secondaryStyle = 'bg-gandang-white border-primary';
	const warningStyle = 'bg-gandang-white border-warning text-warning';

	let style = $derived(
		variant === 'primary'
			? primaryStyle
			: variant === 'secondary'
				? secondaryStyle
				: variant === 'warning'
					? warningStyle
					: ''
	);
</script>

<button
	{type}
	class={`inline-block cursor-pointer rounded-4xl border-2 px-4 py-2 font-semibold ` +
		style +
		` ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
	{disabled}
	{...props}
>
	{label}
</button>
