var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {



    res.render('index', { title:'Login' });

});


router.post('/', function(req, res) {
    var user;
    var pass;
    user = req.body.userName;
    pass = req.body.password;
    if(user == 'user' && pass == 'password' ) {
        res.redirect("/home");
    } else {
        res.send("There was a problem adding the information to the database.");
    }
});



router.get('/home', function(req, res) {
    res.render('home', {
        title : "Other page",
        user: "Here goes a user name"
    });
});

module.exports = router;
