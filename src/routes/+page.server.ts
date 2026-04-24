import prisma from "../../lib/prisma";

export async function load() {
  const product = await prisma.product.findMany({
    include: {
        brand: true, 
    }, 
  });
  return {
    product,
  };
}
