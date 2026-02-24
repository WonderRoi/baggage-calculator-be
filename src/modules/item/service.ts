import type { PrismaClient } from "@prisma/client";

export function createItemService(prisma: PrismaClient) {
  return {
    list: () => prisma.item.findMany({ orderBy: { sortOrder: "asc" } }),
  };
}
