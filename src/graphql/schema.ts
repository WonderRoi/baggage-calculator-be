import { itemModule } from "../modules/item";
import { limitPresetModule } from "../modules/limitPreset";

const baseTypeDefs = `#graphql
  type Query
`;

const modules = [itemModule, limitPresetModule];

export const typeDefs = [baseTypeDefs, ...modules.map((m) => m.typeDefs)];
