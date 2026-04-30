import type { RepurchaseStatus } from '@prisma/client';
import prisma from '../lib/prisma';
import type { Product, Brand } from '@prisma/client';

export type ProductWithBrand = Product & { brand: Brand };

export async function load() {
	const products: ProductWithBrand[] = await prisma.product.findMany({
		include: {
			brand: true
		}
	});
	return {
		products
	};
}
