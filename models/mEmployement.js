const mongooes = require('mongoose');

const employementSchema = new mongooes.Schema({
    companyName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        required: true
    },
    startYear: {
        type: String,
        required: true
    },
    isPresent:{
        type: Boolean,
        required: false,
    },
    endMonth: {
        type: String,
        required: false
    },
    endYear: {
        type: String,
        required: false
    },
    role:{
        types: String,
        required: true
    },
    responsibility:{
        type: String,
        required: true
    }
});

module.exports = mongooes.model('Employement', employementSchema);