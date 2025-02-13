import data from "./data.js";
// Resolvers for entry points to the graph

export const resolvers = {
	Query: {
		authors() {
			return data.authors;
		},
		author(parent, args) {
			return data.authors.find((author) => author.id === args.id);
		},
		games() {
			return data.games;
		},
		game(parent, args) {
			return data.games.find((game) => game.id === args.id);
		},
		reviews() {
			return data.reviews;
		},
		review(parent, args) {
			return data.reviews.find((review) => review.id === args.id);
		}
	},

	Game: {
		reviews(parent, args) {
			return data.reviews.filter((review) => review.game_id === parent.id);
		}
	},
	Author: {
		reviews(parent, args) {
			return data.reviews.filter((review) => review.author_id === parent.id);
		}
	},
	Review: {
		author(parent, args) {
			return data.authors.find((author) => author.id === parent.author_id);
		},
		game(parent, args) {
			return data.games.find((game) => game.id === parent.game_id);
		}
	}
};