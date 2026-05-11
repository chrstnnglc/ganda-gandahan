<script lang="ts">
	import type { Brand, ProductType } from '@prisma/client';
	import type { RepurchaseStatus } from '@prisma/client';
	import Button from '../Button/Button.svelte';

	export let brands: Brand[] = [];
	export let productTypes: ProductType[] = [];
	export let initialData: {
		name?: string;
		brandName?: string;
		typeName?: string;
		expiryDate?: string;
		repurchaseStatus?: RepurchaseStatus;
		notes?: string;
	} = {};
	export let submitLabel = 'Add product';
	export let actionPath = '?/create';

	const formGroupClass = 'form-group flex flex-col';
</script>

<div class="w-max-[1000px]">
	<form method="POST" action={actionPath} class="flex flex-col gap-5">
		<div class={formGroupClass}>
			<label for="name">Product name</label>
			<input id="name" name="name" type="text" value={initialData.name ?? ''} required />
		</div>

		<div class={formGroupClass}>
			<label for="brandName">Brand</label>
			<input
				id="brandName"
				name="brandName"
				type="text"
				list="brand-options"
				value={initialData.brandName ?? ''}
				placeholder="Search or add a new brand"
				required
				autocomplete="off"
			/>
			<datalist id="brand-options">
				{#each brands as brand}
					<option value={brand.name}></option>
				{/each}
			</datalist>
		</div>

		<div class={formGroupClass}>
			<label for="typeName">Product type</label>
			<input
				id="typeName"
				name="typeName"
				type="text"
				list="type-options"
				value={initialData.typeName ?? ''}
				placeholder="Search or add a new product type"
				required
				autocomplete="off"
			/>
			<datalist id="type-options">
				{#each productTypes as type}
					<option value={type.name}></option>
				{/each}
			</datalist>
		</div>

		<div class={formGroupClass}>
			<label for="expiryDate">Expiry date (optional)</label>
			<input id="expiryDate" name="expiryDate" type="date" value={initialData.expiryDate ?? ''} />
		</div>

		<div class={formGroupClass}>
			<label for="repurchaseStatus">Repurchase status</label>
			<select id="repurchaseStatus" name="repurchaseStatus">
				<option value="MAYBE" selected={initialData.repurchaseStatus === 'MAYBE'}>Maybe</option>
				<option value="BUY_AGAIN" selected={initialData.repurchaseStatus === 'BUY_AGAIN'}
					>Buy again</option
				>
				<option value="STOP" selected={initialData.repurchaseStatus === 'STOP'}>Stop</option>
			</select>
		</div>

		<div class={formGroupClass}>
			<label for="notes">Notes (optional)</label>
			<textarea id="notes" name="notes" rows="4">{initialData.notes ?? ''}</textarea>
		</div>

		<Button type="submit" label={submitLabel} variant="primary" />
	</form>
</div>
