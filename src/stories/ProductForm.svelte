<script lang="ts">
	import './productform.css';
	import type { Brand, ProductType } from '@prisma/client';
	import type { RepurchaseStatus } from '@prisma/client';

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
</script>

<form method="POST" action={actionPath}>
	<div>
		<label for="name">Product name</label>
		<input id="name" name="name" type="text" value={initialData.name ?? ''} required />
	</div>

	<div class="form-group">
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

	<div class="form-group">
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

	<div>
		<label for="expiryDate">Expiry date (optional)</label>
		<input id="expiryDate" name="expiryDate" type="date" value={initialData.expiryDate ?? ''} />
	</div>

	<div>
		<label for="repurchaseStatus">Repurchase status</label>
		<select id="repurchaseStatus" name="repurchaseStatus">
			<option value="MAYBE" selected={initialData.repurchaseStatus === 'MAYBE'}>Maybe</option>
			<option value="BUY_AGAIN" selected={initialData.repurchaseStatus === 'BUY_AGAIN'}
				>Buy again</option
			>
			<option value="STOP" selected={initialData.repurchaseStatus === 'STOP'}>Stop</option>
		</select>
	</div>

	<div>
		<label for="notes">Notes (optional)</label>
		<textarea id="notes" name="notes" rows="4">{initialData.notes ?? ''}</textarea>
	</div>

	<button type="submit">{submitLabel}</button>
</form>
