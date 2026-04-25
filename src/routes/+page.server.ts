import type { RepurchaseStatus } from '@prisma/client';
import prisma from '../lib/prisma';

export type Products = {
	brand: {
		id: string;
		name: string;
	};
	id: string;
	name: string;
	brandId: string;
	typeId: string;
	expiryDate?: Date | null;
	repurchaseStatus: RepurchaseStatus;
	notes: string | null;
	createdAt: Date;
	updatedAt?: Date;
	wishlistItemId?: string | null;
};

export async function load() {
	const products: Products[] = await prisma.product.findMany({
		include: {
			brand: true
		}
	});
	return {
		products
	};
}
