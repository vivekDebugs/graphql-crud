const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

const startServer = async () => {
	const app = express()
	apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
	})
	await apolloServer.start()
	apolloServer.applyMiddleware({ app })

	await mongoose.connect('mongodb://localhost:27017/test', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})

	app.listen({ port: 4000 }, () =>
		console.log('http://localhost:4000' + apolloServer.graphqlPath)
	)
}
startServer()
