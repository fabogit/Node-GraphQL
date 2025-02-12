import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
	// typeDefs:
	// resolvers:
});

const port = 4000;
const { url } = await startStandaloneServer(server, {
	listen: { port: port }
});

console.log(`Server ready on port: ${port}`);
