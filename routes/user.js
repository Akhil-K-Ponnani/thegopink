var express = require('express');
var router = express.Router();

/* GET user home page */
router.get('/', (req, res)=> {
    res.render('user/home', {home:'active'})
})

/* GET user service page */
router.get('/service', (req, res)=> {
    res.render('user/service', {service:'active'})
})

/* GET user about page */
router.get('/about', (req, res)=> {
    res.render('user/about', {about:'active'})
})

/* GET user contact page */
router.get('/contact', (req, res)=> {
    res.render('user/contact', {contact:'active'})
})

module.exports = router;