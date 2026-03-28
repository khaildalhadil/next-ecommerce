
'use server';

import { prisma } from "@/db/prisma";
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

// Get single product by it's slug
export async function getpRODUCTBySlug(slug:string) {
  return await prisma.product.findFirst({
    where: {slug: slug}
  })
}