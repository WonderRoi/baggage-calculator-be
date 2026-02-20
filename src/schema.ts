export const typeDefs = `#graphql
  type Item {
    id: ID!
    name: String!
    weight: Float!
    imageUrl: String
  }

  type LimitPreset {
    id: ID!
    name: String!
    maxWeight: Float!
  }

  type Query {
    items: [Item!]!
    limitPresets: [LimitPreset!]!
  }
`;
