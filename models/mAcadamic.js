const mongooes = require('mongoose');

const acadamicSchema = new mongooes.Schema({
    university: {
        type: String,
        required: true
    },
    uLink: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    cLink: {
        type: String,
        required: true
    },
    educationType: {
        type: String,
        requestd: true,
    },
    subject: {
        type: String,
        required: true,
    },
    startMonth: {
        type: String,
        required: true
    },
    startYear: {
        type: String,
        required: true
    },
    endMonth: {
        type: String,
        required: true
    },
    endYear: {
        type: String,
        required: true
    },
    percentage: {
        type: String,
        required: true
    },
});

module.exports = mongooes.model('Acadamic', acadamicSchema);