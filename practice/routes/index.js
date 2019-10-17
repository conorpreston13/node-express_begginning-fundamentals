var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res) {
    // res.send({
    //     users: ['Conor', 'Preston']
    // });
    res.render('index', {
        title: 'My App!',
        age: 22
    })
})



module.exports = router;
