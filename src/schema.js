export const typeDefs = `#graphql
	type Game {
		id: ID!
		title: String!
		platform: [String!]!
	}

	type Review {
		id: ID!
		rating: Int!
		content: String!
	}

	type Author {
		id: ID!
		name: String!
		isVerified: Boolean!
	}

	type Query {
		authors: [Author]
		author(id: ID!): Author
		games: [Game]
		game(id: ID!): Game
		reviews: [Review]
		review(id: ID!): Review
	}
`;