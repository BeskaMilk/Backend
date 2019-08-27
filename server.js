global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
// const cors = require('cors')


const unsplash =new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

//use this to use Unslash photos
app.get('/api/photos', (req, res) => { 
    unsplash.photos
        .listPhotos(req.query.start, req.query.count)
        .then(toJson)
        .then(json => res.json(json));
});

//const PORT = process.env.PORT || 5000;


const BACKEND = process.env.CALLBACK_URL || 'https://materialmatters.herokuapp.com/'

//app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.listen(BACKEND, () => console.log(`Server started on port ${BACKEND}`));
