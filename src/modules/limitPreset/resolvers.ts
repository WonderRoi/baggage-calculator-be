import type { Context } from "../../context";
import { createLimitPresetService } from "./service";

export const limitPresetResolvers = {
  Query: {
    limitPresets: async (_: unknown, __: unknown, ctx: Context) => {
      return createLimitPresetService(ctx.prisma).list();
    },
  },
};
