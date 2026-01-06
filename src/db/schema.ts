import { int, numeric, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const cosmeticsTable = sqliteTable('cosmetics', {
	id: int().primaryKey({ autoIncrement: true }),
	brand: text().notNull(),
	name: text().notNull(),
	category: text().notNull(), // lipstick, lip tint, toner, moisturizer, serum, lip gloss, etc.
	price: int().notNull(),
	tone: text(),
	shade: text().notNull().unique(),
	notes: text(),
});

type InsertCosmeParams = typeof cosmeticsTable.$inferInsert;

export { cosmeticsTable, type InsertCosmeParams };