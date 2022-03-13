const express = require("express");
const router = express.Router();

// Home page
router.get("/",(req, res, next)=>{
    res.render("index.pug",{ title: "three on a ray"});
});

module.exports = router;