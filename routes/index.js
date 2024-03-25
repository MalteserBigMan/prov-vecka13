const express = require("express");
const router = express.Router();



router.get("/", function (req, res) {
    res.render('index.njk', { title: 'Detta är titeln' });
});

router.get("/about", function (req, res) {
    res.render('about.njk', { title: 'Detta är about' });
});

router.get("/help", function (req,res) {
    res.render('help.njk',{title :'Detta är help' });
});

module.exports = router;
