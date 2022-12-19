const mongooes = require('mongoose');

const profileSchema = new mongooes.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    }
});

module.exports = mongooes.model('Profile', profileSchema);