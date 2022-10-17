// const { body, validationResult } = require('express-validator')
// const async = require('async')
const mongoose = require('mongoose')

// Import Models
const Item = require('../models/item')

// Display list of all items
exports.itemList = (req, res, next) => {
  Item.find()
    .sort([['name', 'ascending']])
    .exec((err, itemList) => {
      if (err) {
        return next(err)
      }
      // Successful, so render
      res.render('itemList', {
        title: 'Item List',
        itemList,
      })
    })
}
