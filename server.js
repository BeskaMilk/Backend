global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');

// const request = require('request');
// const cors = require('cors')


const unsplash =new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // added
// app.get('/api/photos', (req, res) => {
//     request(
//       { url: 'https://material-matters.appspot.com/api/photos' },
//       unsplash.photos
//          .listPhotos(req.query.start, req.query.count)
//          .then(toJson)
//          .then(json => res.json(json)),
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           return res.status(500).json({ type: 'error', message: err.message });
//         }
  
//         res.json(JSON.parse(body));
//       }
//     )
//   });

  app.use(express.static(__dirname));



//use this to use Unslash photos
app.get('/api/photos', (req, res) => {    
    unsplash.photos
        .listPhotos(req.query.start, req.query.count)
        .then(toJson)
        .then(json => res.json(json));
});

app.get("/material-matters", function(req, res) { //in the tut, it's "/", not "/material-matters"
    res.render("index");
})

const PORT = process.env.PORT || 5000;

//const BACKEND = process.env.CALLBACK_URL || 'http://beskamilk.github.io/backend/' //'Access-Control-Allow-Origin: https://materialmatters.herokuapp.com/'

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//app.listen(BACKEND, () => console.log(`Server started on port ${BACKEND}`));
