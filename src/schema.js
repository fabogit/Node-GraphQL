export const typeDefs = `#graphql
	type Game {
		id: ID!
		title: String!
		platform: [String!]!
		reviews: [Review!]
	}

	type Review {
		id: ID!
		rating: Int!
		content: String!
		game: Game!
		author: Author!
	}

	type Author {
		id: ID!
		name: String!
		isVerified: Boolean!
		reviews: [Review!]
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