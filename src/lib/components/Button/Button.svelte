<script lang="ts">
	interface Props {
		/** Is this the principal call to action on the page? */
		primary?: boolean;
		/** What background color to use */
		backgroundColor?: string;
		/** How large should the button be? */
		size?: 'small' | 'medium' | 'large';
		/** Button contents */
		label: string;
		/** The onclick event handler */
		onclick?: () => void;
	}

	const { primary = false, backgroundColor, size = 'medium', label, ...props }: Props = $props();

	let mode = $derived(primary ? 'bg-primary border-primary' : '');
	let style = $derived(backgroundColor ? `bg-${backgroundColor} border-${backgroundColor}` : '');
</script>

<button
	type="button"
	class={`inline-block cursor-pointer rounded-4xl border-2 px-4 py-2 font-semibold ` + mode + style}
	{...props}
>
	{label}
</button>
