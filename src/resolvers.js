import data from "./data.js";
// Resolvers for entry points to the graph

export const resolvers = {
	Query: {
		/**
		 * Fetches a list of all authors.
		 * @returns {Promise<Array<Author>>} - An array of author objects.
		 */
		authors() {
			return data.authors;
		},
		/**
		 * Fetches a single author by their ID.
		 * @param {object} parent - The parent resolver object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @param {string} args.id - The ID of the author to fetch.
		 * @returns {Promise<Author | undefined>} - An author object matching the provided ID, or undefined if not found.
		 */
		author(parent, args) {
			return data.authors.find((author) => author.id === args.id);
		},
		/**
		 * Fetches a list of all games.
		 * @returns {Promise<Array<Game>>} - An array of game objects.
		 */
		games() {
			return data.games;
		},
		/**
		 * Fetches a single game by its ID.
		 * @param {object} parent - The parent resolver object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @param {string} args.id - The ID of the game to fetch.
		 * @returns {Promise<Game | undefined>} - A game object matching the provided ID, or undefined if not found.
		 */
		game(parent, args) {
			return data.games.find((game) => game.id === args.id);
		},
		/**
		 * Fetches a list of all reviews.
		 * @returns {Promise<Array<Review>>} - An array of review objects.
		 */
		reviews() {
			return data.reviews;
		},
		/**
		 * Fetches a single review by its ID.
		 * @param {object} parent - The parent resolver object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @param {string} args.id - The ID of the review to fetch.
		 * @returns {Promise<Review | undefined>} - A review object matching the provided ID, or undefined if not found.
		 */
		review(parent, args) {
			return data.reviews.find((review) => review.id === args.id);
		}
	},

	Game: {
		/**
		 * Fetches reviews associated with a specific game.
		 * @param {object} parent - The parent Game object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @returns {Promise<Array<Review>>} - An array of review objects associated with the game.
		 */
		reviews(parent, args) {
			return data.reviews.filter((review) => review.game_id === parent.id);
		}
	},
	Author: {
		/**
		 * Fetches reviews associated with a specific author.
		 * @param {object} parent - The parent Author object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @returns {Promise<Array<Review>>} - An array of review objects associated with the author.
		 */
		reviews(parent, args) {
			return data.reviews.filter((review) => review.author_id === parent.id);
		}
	},
	Review: {
		/**
		 * Fetches the author of a specific review.
		 * @param {object} parent - The parent Review object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @returns {Promise<Author | undefined>} - An author object associated with the review, or undefined if not found.
		 */
		author(parent, args) {
			return data.authors.find((author) => author.id === parent.author_id);
		},
		/**
		 * Fetches the game of a specific review.
		 * @param {object} parent - The parent Review object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @returns {Promise<Game | undefined>} - A game object associated with the review, or undefined if not found.
		 */
		game(parent, args) {
			return data.games.find((game) => game.id === parent.game_id);
		}
	},

	Mutation: {
		/**
		 * Adds a new game to the data source.
		 * @param {object} parent - The parent resolver object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @param {object} args.game - The game object to add.
		 * @returns {object} - The newly created game object with a generated ID.
		 */
		addGame(parent, args) {
			let game = {
				...args.game,
				id: Math.floor(Math.random() * 1000).toString()
			};
			data.games.push(game);
			return game;
		},

		/**
		 * Updates an existing game in the data source.
		 * @param {object} parent - The parent resolver object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @param {string} args.id - The ID of the game to update.
		 * @param {object} args.edits - An object containing the fields to update and their new values.
		 * @returns {void} - Returns the updated game object for confirmation.
		 */
		updateGame(parent, args) {
			data.games = data.games.map(
				(game) => {
					if (game.id === args.id) {
						return { ...game, ...args.edits };
					}
					return game;
				}
			);
			return data.games.find((game) => game.id === args.id);
		},

		/**
		 * Deletes a game from the data source.
		 * @param {object} parent - The parent resolver object.
		 * @param {object} args - An object containing the arguments for the resolver.
		 * @param {string} args.id - The ID of the game to delete.
		 * @returns {Array<object>} - Returns the updated array of games after deletion.
		 */
		deleteGame(parent, args) {
			data.games = data.games.filter((game) => game.id !== args.id);
			return data.games;
		}
	}
};