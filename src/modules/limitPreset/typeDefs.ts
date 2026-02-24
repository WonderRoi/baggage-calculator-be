export const limitPresetTypeDefs = `#graphql
  type LimitPreset {
    id: ID!
    name: String!
    maxWeight: Int!
  }

  extend type Query {
    limitPresets: [LimitPreset!]!
  }
`;
