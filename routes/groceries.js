var express = require('express');
var router = express.Router();
const GroceryModel = require('../models/GroceryModel.js');

/* GET groceries listing. */
router.get('/', function(req, res, next) {
  GroceryModel.find((err, groceries) => {
    res.json(groceries);
  });
});

// post new model return model json
router.post('/', function(req, res, next) {
    const model = new GroceryModel({
      text: req.body.text,
      number: req.body.number
    });

    model.save((err, model) => {
      res.json(model);
    });


}); //end of router.post

module.exports = router;
