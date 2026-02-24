import { itemResolvers } from "../modules/item";
import { limitPresetResolvers } from "../modules/limitPreset";

export const resolvers = {
  Query: {
    ...itemResolvers.Query,
    ...limitPresetResolvers.Query,
  },
};
