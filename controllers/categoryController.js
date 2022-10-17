// const { body, validationResult } = require('express-validator')
// const async = require('async')
const mongoose = require('mongoose')

// Import Models
const Category = require('../models/category')

// Display list of all Categories
exports.categoryList = (req, res, next) => {
  Category.find()
    .sort([['name', 'ascending']])
    .exec((err, categoryList) => {
      if (err) {
        return next(err)
      }
      // Successful, so render
      res.render('categoryList', {
        title: 'Category List',
        categoryList,
      })
    })
}
