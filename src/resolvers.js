import data from "./data.js";

export const resolvers = {
	Query: {
		authors() {
			return data.reviews;
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
	}
};