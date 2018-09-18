const express = require('express');
const router = express.Router();

// Add this line
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  // Add the following 5 lines (be sure to add _your_ API key to the URL)
  const url = "http://api.giphy.com/v1/gifs/random?api_key=71pVXTFjq39gwDH1WkXDC6cqTMJMS4Q3";
  request.get(url, (err, response, body) => {
    if(err) { console.error(err) }

    body = JSON.parse(body);

    // Add this line to get the .gif's URL from the Giphy response body:
    const imgUrl = body.data.image_original_url

    // And pass it to our view as imgUrl:
    res.render('index', { title: 'Giphy Search', imgUrl: imgUrl });
  });
});

module.exports = router;
