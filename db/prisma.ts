import { Product } from '@/types/type';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaNeon({ connectionString });

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product: Product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product: Product) {
          return product.rating.toString();
        },
      },
    },
  },
});