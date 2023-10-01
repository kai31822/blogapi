const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/PostController');

/********************\
        GET
\********************/
router.get('/', controller.get);
router.get('/:title', controller.getonepost);
/********************\
       POST
\********************/
router.post('/addpost', controller.addpost);
/********************\
        PUT
\********************/
router.put('/:title', controller.updatePost);
/********************\
        DELETE
\********************/
router.delete('/:title', controller.deletePost);

module.exports = router;
