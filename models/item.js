const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 1000,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    // required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
})

// Virtual for book's URL
ItemSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/item/${this._id}`
})

// Export model
module.exports = mongoose.model('Item', ItemSchema)
