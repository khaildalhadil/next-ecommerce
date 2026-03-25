
'use server';

import { PrismaClient } from "../generated/prisma/client";
import { LATEST_PRODUCTS_LIMIT } from "@/app/lib/constants";

// Get latest products 
export async function getLatesProducts() {

  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {createAt: "desc"}
  });

  return data;
  
}