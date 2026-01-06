import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';
import { cosmeticsTable } from './db/schema';
  
const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
  const cosmetic: typeof cosmeticsTable.$inferInsert = {
    brand: 'tilnus',
    name: 'Sunlit Pearl Tint',
    category: 'Lip tint',
    price: 1650,
    tone: 'Warm',
    shade: '03 Merry Magnolia',
  };

  await db.insert(cosmeticsTable).values(cosmetic);
  console.log('New cosmetic created!')

  const cosmeticsAll = await db.select().from(cosmeticsTable);
  console.log('Getting all cosmetics from the database: ', cosmeticsAll)

  await db
    .update(cosmeticsTable)
    .set({
      notes: 'Daily use',
    })
    .where(eq(cosmeticsTable.shade, cosmetic.shade));
  console.log('Note updated!')

  const cosmeticOne = await db.select().from(cosmeticsTable).where(eq(cosmeticsTable.shade, cosmetic.shade));
  console.log('Getting all cosmetics from the database: ', cosmeticOne)

  await db.delete(cosmeticsTable).where(eq(cosmeticsTable.shade, cosmetic.shade));
  console.log('Cosmetic deleted!')
}

main();
