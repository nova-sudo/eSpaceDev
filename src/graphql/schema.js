export const typeDefs = `#graphql
  type Report {
    id: ID!
    title: String!
    createdAt: String!
  }
  type Query {
    reports(page: Int = 1, size: Int = 20): [Report!]!
  }
`;
