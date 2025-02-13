/**
 * @typedef Game
 * @property {string} id
 * @property {string} title
 * @property {string[]} platform
 */

/**
 * @typedef Author
 * @property {string} id
 * @property {string} name
 * @property {boolean} isVerified
 */

/**
 * @typedef Review
 * @property {string} id
 * @property {number} rating
 * @property {string} content
 * @property {string} author_id
 * @property {string} game_id
 */

/**
 * An array of game objects.
 * @type {Game[]}
 */
let games = [
	{ id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
	{ id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox'] },
	{ id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
	{ id: '4', title: 'Mario Kart', platform: ['Switch'] },
	{ id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC'] },
];

/**
 * An array of author objects.
 * @type {Author[]}
 */
let authors = [
	{ id: '1', name: 'mario', isVerified: true },
	{ id: '2', name: 'yoshi', isVerified: false },
	{ id: '3', name: 'peach', isVerified: true },
];

/**
 * An array of review objects.
 * @type {Review[]}
 */
let reviews = [
	{ id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2' },
	{ id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1' },
	{ id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3' },
	{ id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4' },
	{ id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5' },
	{ id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2' },
	{ id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1' },
];

/**
 * Exported data containing games, authors, and reviews.
 * @property {Game[]} games - Array of games.
 * @property {Author[]} authors - Array of authors.
 * @property {Review[]} reviews - Array of reviews.
 */
export default { games, authors, reviews };