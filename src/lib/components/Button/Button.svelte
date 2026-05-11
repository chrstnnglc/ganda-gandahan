<script lang="ts">
	interface Props {
		/** Is this the principal call to action on the page? */
		variant: 'primary' | 'secondary' | 'warning';
		/** What background color to use */
		backgroundColor?: string;
		/** How large should the button be? */
		size?: 'small' | 'medium' | 'large';
		/** Button contents */
		label: string;
		/** The onclick event handler */
		onclick?: () => void;
	}

	const {
		variant = 'secondary',
		backgroundColor,
		size = 'medium',
		label,
		...props
	}: Props = $props();

	const primaryStyle = 'bg-primary border-primary';
	const secondaryStyle = 'bg-gandang-white border-primary';
	const warningStyle = 'bg-warning border-warning';

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
	type="button"
	class={`inline-block cursor-pointer rounded-4xl border-2 px-4 py-2 font-semibold ` + style}
	{...props}
>
	{label}
</button>
