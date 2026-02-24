import type { Context } from "../../context";

export const limitPresetResolvers = {
  Query: {
    limitPresets: async (_: unknown, __: unknown, ctx: Context) => {
      return ctx.prisma.limitPreset.findMany({ orderBy: { name: "asc" } });
    },
  },
};
