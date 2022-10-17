const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ItemSchema = new Schema({})

// Virtual for book's URL
ItemSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/item/${this._id}`
})

// Export model
module.exports = mongoose.model('Item', ItemSchema)
