import { buildSchema } from "graphql";

const schema = buildSchema(`
type Location {
    type: String!,
    coordinates: [Float!]!
    }
type AvailableResource {
    _id: ID!,
    name: String!,
    type: Int!,
    description: String!,
    contactName: String!,
    phoneNumber: String!,
    location: Location!,
    available: Int!,
    city: String!,
    address: String!,
    verified: Int!,
    source: String!,
    like: Int!,
    created: String!,
}
type ResourceRequest {
    _id: ID!,
    name: String!,
    type: Int!,
    description: String!,
    location: Location!,
    city: String!,
    address: String!,
    contactName: String!,
    phoneNumber: String!,
    quantity: String!,
    like: Int!,
    created: String!,
}
type RootQuery {
    availableResources(lat: Float!, long: Float!): [AvailableResource!]!,
    resourceRequests(lat: Float!, long: Float!): [ResourceRequest!]!
}
type RootMutation {}
type schema {
    query: RootQuery,
    mutation: RootMutation
}
`);

export default schema;
