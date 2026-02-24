import { itemModule } from "../modules/item";
import { limitPresetModule } from "../modules/limitPreset";

const modules = [itemModule, limitPresetModule];

export const resolvers = {
  Query: Object.assign({}, ...modules.map((m) => m.resolvers.Query ?? {})),
};
