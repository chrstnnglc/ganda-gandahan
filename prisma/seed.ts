import { PrismaClient, RepurchaseStatus, Priority, WishlistStatus } from '@prisma/client';
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: "file:./dev.db",
});

export const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding...");

  // -------------------------------------------------------
  // Brands
  // -------------------------------------------------------
  const [cosrx, laneige, innisfree, missha, romand] = await Promise.all([
    prisma.brand.upsert({ where: { name: 'COSRX' },          update: {}, create: { name: 'COSRX' } }),
    prisma.brand.upsert({ where: { name: 'Laneige' },        update: {}, create: { name: 'Laneige' } }),
    prisma.brand.upsert({ where: { name: 'Innisfree' },      update: {}, create: { name: 'Innisfree' } }),
    prisma.brand.upsert({ where: { name: 'Missha' },         update: {}, create: { name: 'Missha' } }),
    prisma.brand.upsert({ where: { name: "rom&nd" },         update: {}, create: { name: "rom&nd" } }),
  ]);

  // -------------------------------------------------------
  // Product types — skincare + makeup
  // -------------------------------------------------------
  const [moisturiser, serum, toner, sunscreen, cleanser, lipTint, cushion, eyecream] = await Promise.all([
    prisma.productType.upsert({ where: { name: 'Moisturiser' }, update: {}, create: { name: 'Moisturiser' } }),
    prisma.productType.upsert({ where: { name: 'Serum' },       update: {}, create: { name: 'Serum' } }),
    prisma.productType.upsert({ where: { name: 'Toner' },       update: {}, create: { name: 'Toner' } }),
    prisma.productType.upsert({ where: { name: 'Sunscreen' },   update: {}, create: { name: 'Sunscreen' } }),
    prisma.productType.upsert({ where: { name: 'Cleanser' },    update: {}, create: { name: 'Cleanser' } }),
    prisma.productType.upsert({ where: { name: 'Lip tint' },    update: {}, create: { name: 'Lip tint' } }),
    prisma.productType.upsert({ where: { name: 'Cushion' },     update: {}, create: { name: 'Cushion' } }),
    prisma.productType.upsert({ where: { name: 'Eye cream' },   update: {}, create: { name: 'Eye cream' } }),
  ]);

  // -------------------------------------------------------
  // Inventory products (5–8 items, mix of statuses)
  // -------------------------------------------------------
  await Promise.all([
    prisma.product.create({
      data: {
        name: 'Advanced Snail 96 Mucin Power Essence',
        brandId: cosrx.id,
        typeId: serum.id,
        expiryDate: new Date('2026-08-01'),
        repurchaseStatus: RepurchaseStatus.BUY_AGAIN,
        notes: 'Holy grail for hydration. Skin feels plump after 2 weeks. Repurchase without question.',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Water Sleeping Mask',
        brandId: laneige.id,
        typeId: moisturiser.id,
        expiryDate: new Date('2026-05-15'),
        repurchaseStatus: RepurchaseStatus.BUY_AGAIN,
        notes: 'Great as an overnight mask. Woke up with noticeably softer skin. A little goes a long way.',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Green Tea Seed Serum',
        brandId: innisfree.id,
        typeId: serum.id,
        expiryDate: new Date('2025-12-01'),
        repurchaseStatus: RepurchaseStatus.MAYBE,
        notes: 'Lightweight and absorbs quickly. Not sure if it is making a visible difference yet. Will finish the bottle before deciding.',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Low pH Good Morning Gel Cleanser',
        brandId: cosrx.id,
        typeId: cleanser.id,
        expiryDate: new Date('2027-01-01'),
        repurchaseStatus: RepurchaseStatus.BUY_AGAIN,
        notes: 'Gentle enough for daily use. Does not strip moisture. Skin feels clean without feeling tight.',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Time Revolution The First Treatment Essence',
        brandId: missha.id,
        typeId: toner.id,
        expiryDate: new Date('2026-03-20'),
        repurchaseStatus: RepurchaseStatus.STOP,
        notes: 'Did not notice much difference after a full bottle. May be too light for my skin type. Not worth the price.',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Dewy Ful Water Tint 04 Daffodil',
        brandId: romand.id,
        typeId: lipTint.id,
        expiryDate: new Date('2027-06-01'),
        repurchaseStatus: RepurchaseStatus.BUY_AGAIN,
        notes: 'Beautiful coral shade, very comfortable wear. Not drying at all. Already want to try more shades.',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Jeju Orchid Eye Cream',
        brandId: innisfree.id,
        typeId: eyecream.id,
        expiryDate: new Date('2026-09-30'),
        repurchaseStatus: RepurchaseStatus.MAYBE,
        notes: 'Texture is nice but hard to tell if it is doing anything yet. Only been using it for 3 weeks.',
      },
    }),
  ]);

  // -------------------------------------------------------
  // Wishlist items (mix of priorities and statuses)
  // -------------------------------------------------------
  await Promise.all([
    prisma.wishlistItem.create({
      data: {
        name: 'Lip Sleeping Mask',
        brandId: laneige.id,
        typeId: moisturiser.id,
        priority: Priority.HIGH,
        status: WishlistStatus.WANTED,
        notes: 'Heard great things about this for dry lips. Want to try the berry scent.',
      },
    }),
    prisma.wishlistItem.create({
      data: {
        name: 'Pure Vitamin C 23% Serum',
        brandId: innisfree.id,
        typeId: serum.id,
        priority: Priority.HIGH,
        status: WishlistStatus.WANTED,
        notes: 'Looking for a vitamin C serum. This one has good reviews for brightening.',
      },
    }),
    prisma.wishlistItem.create({
      data: {
        name: 'Blur Watermill Cushion',
        brandId: missha.id,
        typeId: cushion.id,
        priority: Priority.MEDIUM,
        status: WishlistStatus.WANTED,
        notes: 'Want to try a cushion foundation for a more natural finish. Need to check shade range first.',
      },
    }),
    prisma.wishlistItem.create({
      data: {
        name: 'Han All-in-One Sun Fluid SPF50+',
        brandId: innisfree.id,
        typeId: sunscreen.id,
        priority: Priority.HIGH,
        status: WishlistStatus.WANTED,
        notes: 'Current sunscreen is running out. This one is highly rated for a non-greasy finish.',
      },
    }),
    prisma.wishlistItem.create({
      data: {
        name: 'Zero Velvet Tint 15 Witty Mauve',
        brandId: romand.id,
        typeId: lipTint.id,
        priority: Priority.LOW,
        status: WishlistStatus.SKIPPED,
        notes: 'Decided against this shade — too dark for everyday wear. May revisit for autumn.',
      },
    }),
  ]);

  console.log('Seed complete.');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
