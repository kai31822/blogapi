const express = require('express');
const cors = require('cors');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/CategoriesController');

/********************\
        GET
\********************/
router.get('/', cors(), controller.getallCategory);
router.get('/:category', cors(), controller.getoneCategory);
/********************\
       POST
\********************/
router.post('/addCategory', cors(), controller.addCategory);
/********************\
        PUT
\********************/
router.put('/:category', cors(), controller.updateCategory);
/********************\
        DELETE
\********************/
router.delete('/:category', cors(), controller.deleteCategory);

module.exports = router;
