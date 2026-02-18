export const typeDefs = `#graphql
  type Category {
    id: ID!
    name: String!
    items: [Item!]!
  }

  type Item {
    id: ID!
    name: String!
    weightGrams: Int!
    categoryId: ID!
    category: Category!
    isCarryOnOk: Boolean!
    isCheckedOk: Boolean!
  }

  type LimitPreset {
    id: ID!
    name: String!
    carryOnMaxGrams: Int
    checkedMaxGrams: Int
    note: String
  }

  type Query {
    categories: [Category!]!
    items: [Item!]!
    limitPresets: [LimitPreset!]!
  }
`;
