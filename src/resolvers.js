const Country = require('./models/Country')

const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		countries: () => Country.find(),
	},
	Mutation: {
		enterCountry: async (_, { country, area, population, year }) => {
			const newEntry = new Country({
				country: country,
				area: area,
				population: population,
				year: year,
			})
			await newEntry.save()
			return newEntry
		},
		updateCountry: async (_, { country, area, population, year }) => {
			const update = await Country.findOneAndUpdate(
				{ country: country, year: year },
				{ area: area, population: population },
				{ new: true }
			)
			return update
		},
		deleteCountry: async (_, { country, area, population, year }) => {
			const _delete = await Country.findOneAndDelete({
				country: country,
				year: year,
			})
			return _delete
		},
	},
}

module.exports = resolvers
