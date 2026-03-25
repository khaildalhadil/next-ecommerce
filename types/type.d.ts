import { insertProductSchema } from "@/lib/validators";
import z from "zod";

type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: Decimal;
  createAt: Date;
};

