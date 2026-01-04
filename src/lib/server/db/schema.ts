import { integer, numeric, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { uuidv4 } from '../utils';

const timestamp = {
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
};

const cosmetics = sqliteTable('cosmetics', {
	...timestamp,
	id: text('id')
		.primaryKey()
		.notNull()
		.$defaultFn(() => uuidv4()),
	brand: text('brand').notNull(),
	name: text('name').notNull(),
	category: text('category').notNull(), // lipstick, lip tint, toner, moisturizer, serum, lip gloss, etc.
	price: numeric('price').notNull(),
	tone: text('tone').notNull(),
	shade: text('shade').notNull(),
	notes: text('notes').notNull(),
});

type InsertCosmeParams = typeof cosmetics.$inferInsert;

export { cosmetics, type InsertCosmeParams };