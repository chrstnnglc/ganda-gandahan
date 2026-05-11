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

	const formGroupClass = 'flex flex-col gap-1';
	const labelClass = 'mb-1 font-medium';
	const inputClass = 'border border-gray-300 rounded px-3 py-2';
</script>

<div class="w-max-[1000px]">
	<form method="POST" action={actionPath} class="flex flex-col gap-5">
		<div class={formGroupClass}>
			<label for="name" class={labelClass}> Product name </label>
			<input
				id="name"
				name="name"
				type="text"
				value={initialData.name ?? ''}
				required
				class={inputClass}
			/>
		</div>

		<div class={formGroupClass}>
			<label for="brandName" class={labelClass}> Brand </label>
			<input
				id="brandName"
				name="brandName"
				type="text"
				list="brand-options"
				value={initialData.brandName ?? ''}
				placeholder="Search or add a new brand"
				required
				autocomplete="off"
				class={inputClass}
			/>
			<datalist id="brand-options">
				{#each brands as brand}
					<option value={brand.name}></option>
				{/each}
			</datalist>
		</div>

		<div class={formGroupClass}>
			<label for="typeName" class={labelClass}> Product type </label>
			<input
				id="typeName"
				name="typeName"
				type="text"
				list="type-options"
				value={initialData.typeName ?? ''}
				placeholder="Search or add a new product type"
				required
				autocomplete="off"
				class={inputClass}
			/>
			<datalist id="type-options">
				{#each productTypes as type}
					<option value={type.name}></option>
				{/each}
			</datalist>
		</div>

		<div class={formGroupClass}>
			<label for="expiryDate" class={labelClass}> Expiry date (optional) </label>
			<input
				id="expiryDate"
				name="expiryDate"
				type="date"
				value={initialData.expiryDate ?? ''}
				class={inputClass}
			/>
		</div>

		<div class={formGroupClass}>
			<label for="repurchaseStatus" class={labelClass}> Repurchase status </label>
			<select id="repurchaseStatus" name="repurchaseStatus" class={inputClass + ' pr-4'}>
				<option value="MAYBE" selected={initialData.repurchaseStatus === 'MAYBE'}>Maybe</option>
				<option value="BUY_AGAIN" selected={initialData.repurchaseStatus === 'BUY_AGAIN'}
					>Buy again</option
				>
				<option value="STOP" selected={initialData.repurchaseStatus === 'STOP'}>Stop</option>
			</select>
		</div>

		<div class={formGroupClass}>
			<label for="notes" class={labelClass}> Notes (optional) </label>
			<textarea id="notes" name="notes" rows="4" class={inputClass}
				>{initialData.notes ?? ''}</textarea
			>
		</div>

		<Button type="submit" label={submitLabel} variant="primary" />
	</form>
</div>
