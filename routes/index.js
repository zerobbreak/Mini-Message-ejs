var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!", 
    user: "Amando", 
    added: new Date(),
  }, 
  {
    text: "Hello World!", 
    user: "Charles", 
    added: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Message board", messages: messages});
});

router.post("/new", (req, res, next) => {
  const author = req.body.author;
  const message = req.body.message;

  messages.push({ text: message, user: author, added: new Date() });  // Fixed typo: changed `addded` to `added`
  res.redirect("/");
});


module.exports = router;
