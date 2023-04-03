var express = require('express');
var router = express.Router();
const userModel = require("./users")

router.get('/',(req,res)=>{
  res.render('index')
})

module.exports = router;
