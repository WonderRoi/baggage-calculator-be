import type { Context } from "../../context";
import { createItemService } from "./service";

export const itemResolvers = {
  Query: {
    items: async (_: unknown, __: unknown, ctx: Context) => {
      return createItemService(ctx.prisma).list();
    },
  },
};
