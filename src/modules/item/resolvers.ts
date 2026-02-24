import type { Context } from "../../context";

export const itemResolvers = {
  Query: {
    items: async (_: unknown, __: unknown, ctx: Context) => {
      return ctx.prisma.item.findMany({ orderBy: { name: "asc" } });
    },
  },
};
