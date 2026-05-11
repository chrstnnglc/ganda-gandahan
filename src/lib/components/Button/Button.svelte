<script lang="ts">
	interface Props {
		variant: 'primary' | 'secondary' | 'warning';
		backgroundColor?: string;
		size?: 'small' | 'medium' | 'large';
		label: string;
		type?: 'button' | 'submit' | 'reset';
		onclick?: () => void;
	}

	const {
		variant = 'secondary',
		backgroundColor,
		size = 'medium',
		label,
		type = 'button',
		...props
	}: Props = $props();

	const primaryStyle = 'bg-primary border-primary';
	const secondaryStyle = 'bg-gandang-white border-primary';
	const warningStyle = 'bg-warning border-warning text-white';

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
	class={`inline-block cursor-pointer rounded-4xl border-2 px-4 py-2 font-semibold ` + style}
	{...props}
>
	{label}
</button>
