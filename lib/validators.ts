import { Decimal } from './generated/prisma/internal/prismaNamespace';
import {z} from 'zod';
import { formatNumberWithDecimal } from './utils';
import { Prisma } from './generated/prisma/client';

// Scheme for inserting products

const currency = z
    .string()
    .refine(value => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'لازم تسوي عدد كسري يعني 10.500'
  ).transform(value =>new Prisma.Decimal(value))

export const insertProductSchema = z.object({
  name: z.string().min(3, 'الاسم لازم يكون اكثر من 3 احرف'),
  slug: z.string().min(3, 'slug لازم يكون اكثر من 3 احرف'),
  category: z.string().min(3, 'لازم يكون اكثر من 3 احرف'),
  brand: z.string().min(3, 'لازم يكون اكثر من ثلاث احرف '),
  description: z.string().min(3, 'لازم يكون اكثر من ثلاث احرف '),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'لازم تضيف على الاقل صوره وحده'),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
})