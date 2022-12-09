/**--------------------------------------------------------
 * File name: server.js
 * Author: YINGJIE ZHOU
 * StudentID: 301179194
 * WebApp for COMP229Assign1
 * Data: 2022/Dec/08
 * --------------------------------------------------------
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Portfolio' });
});

/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('mainpages/aboutme', { title: 'Express Portfolio' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('mainpages/projects', { title: 'Express Portfolio' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('mainpages/services', { title: 'Express Portfolio' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('mainpages/contact', { title: 'Express Portfolio' });
});



module.exports = router;
