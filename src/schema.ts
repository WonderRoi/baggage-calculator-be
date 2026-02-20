export const typeDefs = `#graphql
  type Item {
    id: ID!
    name: String!
    weight: Int!
    imageUrl: String
  }

  type LimitPreset {
    id: ID!
    name: String!
    maxWeight: Int!
  }

  type Query {
    items: [Item!]!
    limitPresets: [LimitPreset!]!
  }
`;
