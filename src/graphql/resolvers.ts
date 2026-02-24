import { prisma } from "./prisma";

export const resolvers = {
  Query: {
    items: async () => {
      return prisma.item.findMany({ orderBy: { name: "asc" } });
    },
    limitPresets: async () => {
      return prisma.limitPreset.findMany({ orderBy: { name: "asc" } });
    },
  },
};
