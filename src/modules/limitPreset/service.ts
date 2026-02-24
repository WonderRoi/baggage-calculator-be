import type { PrismaClient } from "@prisma/client";

export function createLimitPresetService(prisma: PrismaClient) {
  return {
    list: () => prisma.limitPreset.findMany({ orderBy: { name: "asc" } }),
  };
}
