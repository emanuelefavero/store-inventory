const express = require('express')
const router = express.Router()

// Require controllers
const categoryController = require('../controllers/categoryController')
const itemController = require('../controllers/itemController')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Store Inventory' })
})

// Category Routes
router.get('/category', categoryController.categoryList)
// router.get('/category/create', categoryController.categoryCreateGet)
// router.post('/category/create', categoryController.categoryCreatePost)
// router.get('/category/:id', categoryController.categoryDetail)
// router.get('/category/:id/delete', categoryController.categoryDeleteGet)
// router.post('/category/:id/delete', categoryController.categoryDeletePost)
// router.get('/category/:id/update', categoryController.categoryUpdateGet)
// router.post('/category/:id/update', categoryController.categoryUpdatePost)

// Item Routes
router.get('/item', itemController.itemList)
// router.get('/item/create', itemController.itemCreateGet)
// router.post('/item/create', itemController.itemCreatePost)
// router.get('/item/:id', itemController.itemDetail)
// router.get('/item/:id/delete', itemController.itemDeleteGet)
// router.post('/item/:id/delete', itemController.itemDeletePost)
// router.get('/item/:id/update', itemController.itemUpdateGet)
// router.post('/item/:id/update', itemController.itemUpdatePost)

module.exports = router
