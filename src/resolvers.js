import data from "./data.js";

export const resolvers = {
	Query: {
		authors() {
			return data.reviews;
		},
		games() {
			return data.games;
		},
		reviews() {
			return data.reviews;
		},
	}
};