var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' );
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render( 'index' );
});

// GET v1 index page.
router.get('/J', function(req, res, next) {
  res.render( 'J/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/J/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'J/' + theView );
});

router.get('/J/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'J/' + theDir + '/' + theView );
});

router.get('/J/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'J/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //


// GET v1 index page.
router.get('/J0', function(req, res, next) {
  res.render( 'J0/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/J0/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'J0/' + theView );
});

router.get('/J0/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'J0/' + theDir + '/' + theView );
});

router.get('/J0/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'J0/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/aire', function(req, res, next) {
  res.render( 'aire/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/aire/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'aire/' + theView );
});

router.get('/aire/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'aire/' + theDir + '/' + theView );
});

router.get('/aire/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'aire/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/spen', function(req, res, next) {
  res.render( 'spen/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/spen/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'spen/' + theView );
});

router.get('/spen/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'spen/' + theDir + '/' + theView );
});

router.get('/spen/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'spen/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //


// GET v1 index page.
router.get('/calder', function(req, res, next) {
  res.render( 'calder/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/calder/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'calder/' + theView );
});

router.get('/calder/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'calder/' + theDir + '/' + theView );
});

router.get('/calder/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'calder/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //


// GET v1 index page.
router.get('/don', function(req, res, next) {
  res.render( 'don/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/don/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'don/' + theView );
});

router.get('/don/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'don/' + theDir + '/' + theView );
});

router.get('/don/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'don/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

module.exports = router;
