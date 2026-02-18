import { prisma } from "./prisma";

export const resolvers = {
  Query: {
    categories: () => prisma.category.findMany(),
    items: () => prisma.item.findMany(),
    limitPresets: () => prisma.limitPreset.findMany(),
  },

  Category: {
    items: (parent: { id: string }) => prisma.item.findMany({ where: { categoryId: parent.id } }),
  },

  Item: {
    category: (parent: { categoryId: string }) => prisma.category.findUnique({ where: { id: parent.categoryId } }),
  },
};
