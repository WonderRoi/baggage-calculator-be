import { itemTypeDefs } from "./typeDefs";
import { itemResolvers } from "./resolvers";

export const itemModule = {
  typeDefs: itemTypeDefs,
  resolvers: itemResolvers,
};

export { itemTypeDefs, itemResolvers };
