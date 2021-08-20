const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Country {
		id: ID!
		country: String!
		year: Int!
		area: Int!
		population: Int!
	}
	type Query {
		hello: String
		countries: [Country!]!
	}
	type Mutation {
		enterCountry(
			country: String!
			year: Int!
			area: Int!
			population: Int!
		): Country
		updateCountry(
			country: String!
			year: Int!
			area: Int!
			population: Int!
		): Country
		deleteCountry(
			country: String!
			year: Int!
			area: Int
			population: Int
		): Country
	}
`

module.exports = typeDefs
