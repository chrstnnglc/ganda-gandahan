import { PrismaClient, RepurchaseStatus, Priority, WishlistStatus } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
	url: 'file:./dev.db'
});

export const prisma = new PrismaClient({ adapter });

async function main() {
	console.log('Seeding...');

	// -------------------------------------------------------
	// Brands
	// -------------------------------------------------------
	const [innisfree, clio, peripera, romand, tilnus] = await Promise.all([
		prisma.brand.upsert({
			where: { name: 'Innisfree' },
			update: {},
			create: { name: 'Innisfree' }
		}),
		prisma.brand.upsert({ where: { name: 'Clio' }, update: {}, create: { name: 'COSRX' } }),
		prisma.brand.upsert({ where: { name: 'Peripera' }, update: {}, create: { name: 'Peripera' } }),
		prisma.brand.upsert({ where: { name: 'rom&nd' }, update: {}, create: { name: 'rom&nd' } }),
		prisma.brand.upsert({ where: { name: 'Tilnus' }, update: {}, create: { name: 'Tilnus' } })
	]);

	// -------------------------------------------------------
	// Product types — skincare + makeup
	// -------------------------------------------------------
	const [cleanser, lipGloss, lipTint, lipBalm, cushionFoundation] = await Promise.all([
		prisma.productType.upsert({
			where: { name: 'Cleanser' },
			update: {},
			create: { name: 'Cleanser' }
		}),
		prisma.productType.upsert({
			where: { name: 'Lip gloss' },
			update: {},
			create: { name: 'Lip gloss' }
		}),
		prisma.productType.upsert({
			where: { name: 'Lip tint' },
			update: {},
			create: { name: 'Lip tint' }
		}),
		prisma.productType.upsert({
			where: { name: 'Lip balm' },
			update: {},
			create: { name: 'Lip balm' }
		}),
		prisma.productType.upsert({
			where: { name: 'Cushion foundation' },
			update: {},
			create: { name: 'Cushion foundation' }
		})
	]);

	// -------------------------------------------------------
	// Inventory products (5–8 items, mix of statuses)
	// -------------------------------------------------------
	await Promise.all([
		prisma.product.create({
			data: {
				name: 'Kill Cover Mesh Glow Cushion (Ginger)',
				brandId: clio.id,
				typeId: cushionFoundation.id,
				expiryDate: new Date('2026-12-31'),
				repurchaseStatus: RepurchaseStatus.BUY_AGAIN,
				notes: 'Yan ang kulay mo ses'
			}
		}),
		prisma.product.create({
			data: {
				name: 'Ink Glasting Lip Gloss (12 So What)',
				brandId: peripera.id,
				typeId: lipGloss.id,
				expiryDate: new Date('2026-08-31'),
				repurchaseStatus: RepurchaseStatus.BUY_AGAIN,
				notes: 'Smells and tastes nice. Lightens lips.'
			}
		}),
		prisma.product.create({
			data: {
				name: 'Rice Water Bright Cleansing Foam',
				brandId: innisfree.id,
				typeId: cleanser.id,
				repurchaseStatus: RepurchaseStatus.MAYBE,
				notes: "Been using this ever since but I'm thinking of switching it up, so tignan natin."
			}
		}),
		prisma.product.create({
			data: {
				name: 'The Juicy Lasting Tint 02 Nucadamia',
				brandId: romand.id,
				typeId: lipTint.id,
				expiryDate: new Date('2026-06-30'),
				repurchaseStatus: RepurchaseStatus.STOP,
				notes: 'Buy a lighter shade na pang-spring'
			}
		}),
		prisma.product.create({
			data: {
				name: 'Sunlit Pearl Lip Glow 02 Honey Sunset',
				brandId: tilnus.id,
				typeId: lipGloss.id,
				repurchaseStatus: RepurchaseStatus.MAYBE,
				notes: 'Sakto lang'
			}
		})
	]);

	// -------------------------------------------------------
	// Wishlist items
	// -------------------------------------------------------
	await Promise.all([
		prisma.wishlistItem.create({
			data: {
				name: 'Zero Velvet Tint 15 Witty Mauve',
				brandId: romand.id,
				typeId: lipTint.id,
				priority: Priority.LOW,
				status: WishlistStatus.SKIPPED,
				notes: 'Decided against this shade — too dark for everyday wear. May revisit for autumn.'
			}
		})
	]);

	console.log('Seed complete.');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
