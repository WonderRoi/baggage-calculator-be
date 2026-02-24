import { itemTypeDefs } from "../modules/item";
import { limitPresetTypeDefs } from "../modules/limitPreset";

export const typeDefs =
  `#graphql
  type Query
` +
  itemTypeDefs +
  limitPresetTypeDefs;
