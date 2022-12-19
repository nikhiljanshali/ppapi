const express = require('express');
const mongooes = require('mongoose');
// ...
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



const url = 'mongodb://localhost:27017/mypersonal';

const app = express();

mongooes.connect(url, { useNewUrlParser: true });
const con = mongooes.connection;


con.on('open', () => {
    console.info('Connected...');
});

// Error handling
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

// Middle ware
app.use(express.json());


// create router profile
const _profileRouter = require('../ppapi/routes/profile');
app.use('/profile', _profileRouter);

const _acadamicRouter = require('../ppapi/routes/acadamic');
app.use('/acadamic', _acadamicRouter);

const _commonRouter = require('../ppapi/routes/common');
app.use('/common/', _commonRouter);


app.listen(3000, () => {
    console.log('Server Started');
})

// Swagger documentions
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for PPStory-API',
        version: '1.0.0',
        description:
            'This is a REST API application made with Express. It retrieves data from JSON-Placeholder {PPStory-API}.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
};


const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


