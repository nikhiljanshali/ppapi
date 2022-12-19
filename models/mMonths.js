const mongooes = require('mongoose');

const monthsSchema = new mongooes.Schema({
    abbreviation: {
        type: String,
        required: false
    },
    name:{
        type:String,
        required: true
    }
});

module.exports = mongooes.model('Months', monthsSchema);