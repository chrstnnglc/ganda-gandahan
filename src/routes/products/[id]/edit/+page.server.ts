import { prisma } from '$lib/prisma';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { RepurchaseStatus } from '@prisma/client';

export const load: PageServerLoad = async ({ params }) => {
	const [product, brands, productTypes] = await Promise.all([
		prisma.product.findUnique({
			where: { id: params.id },
			include: { brand: true, type: true }
		}),
		prisma.brand.findMany({ orderBy: { name: 'asc' } }),
		prisma.productType.findMany({ orderBy: { name: 'asc' } })
	]);

	if (!product) {
		error(404, 'Product not found');
	}

	return { product, brands, productTypes };
};

export const actions: Actions = {
	update: async ({ params, request }) => {
		const data = await request.formData();

		const name = data.get('name')?.toString().trim();
		const brandName = data.get('brandName')?.toString().trim();
		const typeName = data.get('typeName')?.toString().trim();
		const expiryDate = data.get('expiryDate')?.toString();
		const repurchaseStatus = data.get('repurchaseStatus')?.toString() as RepurchaseStatus;
		const notes = data.get('notes')?.toString().trim();

		if (!name || !brandName || !typeName) {
			return fail(400, { error: 'Name, brand, and type are required.' });
		}

		const [brand, productType] = await Promise.all([
			prisma.brand.upsert({
				where: { name: brandName },
				update: {},
				create: { name: brandName }
			}),
			prisma.productType.upsert({
				where: { name: typeName },
				update: {},
				create: { name: typeName }
			})
		]);

		await prisma.product.update({
			where: { id: params.id },
			data: {
				name,
				brandId: brand.id,
				typeId: productType.id,
				expiryDate: expiryDate ? new Date(expiryDate) : null,
				repurchaseStatus,
				notes: notes || null
			}
		});

		redirect(303, '/products/' + params.id);
	},

	delete: async ({ params }) => {
		await prisma.product.delete({
			where: { id: params.id }
		});

		redirect(303, '/');
	}
};
