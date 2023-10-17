var express = require('express');
const { createServerWs } = require('./websocket');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/add-message", function(req, res, next) {
  const { message } = req.body;
  const io = createServerWs();
  io.emit("notif", message);
  res.send("ok");
})

module.exports = router;
