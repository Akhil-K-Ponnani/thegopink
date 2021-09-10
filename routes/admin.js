var express = require('express');
var router = express.Router();

/* GET user home page */
router.get('/', (req, res)=> {
    res.render('admin/home')
})

module.exports = router;