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

	type Mutation {
		addGame(game: AddGameInput!): Game
		updateGame(id: ID!, edits: EditGameInput!): Game
		deleteGame(id: ID!): [Game]
	}

	input AddGameInput{
		title: String!
		platform: [String!]!
	}

	input EditGameInput{
		title: String
		platform: [String!]
	}
`;