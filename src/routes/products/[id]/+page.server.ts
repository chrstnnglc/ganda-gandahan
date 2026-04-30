import { prisma } from '$lib/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const product = await prisma.product.findUnique({
		where: { id: params.id },
		include: { brand: true, type: true }
	});

	if (!product) {
		error(404, 'Product not found');
	}

	return { product };
};
