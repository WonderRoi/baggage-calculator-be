export const itemTypeDefs = `#graphql
  type Item {
    id: ID!
    name: String!
    weight: Int!
    imageUrl: String
  }

  extend type Query {
    items: [Item!]!
  }
`;
