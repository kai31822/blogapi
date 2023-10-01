const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/PostController');

/********************\
        GET
\********************/
router.get('/', controller.get);
router.get('/:id', controller.getonepost);
/********************\
       POST
\********************/
router.post('/addpost', controller.addpost);
/********************\
        PUT
\********************/
router.put('/:id', controller.updatePost);
/********************\
        DELETE
\********************/
router.delete('/:id', controller.deletePost);

module.exports = router;
