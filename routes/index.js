var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index-app', { title: 'Express' });
});

module.exports = router;

// var routes = [
//   {
//     url:'',

//   }
// ]