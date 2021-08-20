const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
	country: String,
	year: Number,
	area: Number,
	population: Number,
})

const Country = mongoose.model('Population', countrySchema)

module.exports = Country
