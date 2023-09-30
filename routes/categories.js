const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/CategoriesController');

/********************\
        GET
\********************/
router.get('/', controller.getallCategory);
router.get('/:category', controller.getoneCategory);
/********************\
       POST
\********************/
router.post('/addCategory', controller.addCategory);
/********************\
        PUT
\********************/
router.put('/:category', controller.updateCategory);
/********************\
        DELETE
\********************/
router.delete('/:category', controller.deleteCategory);

module.exports = router;
