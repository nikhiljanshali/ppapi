const mongooes = require('mongoose');

const educationsSchema = new mongooes.Schema({
    type: {
        type: String,
        required: true
    },
});

module.exports = mongooes.model('Educations', educationsSchema);