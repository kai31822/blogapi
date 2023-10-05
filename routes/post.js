const express = require('express');
const cors = require('cors');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/PostController');

/********************\
        GET
\********************/
router.get('/', cors(), controller.get);
router.get('/:title', cors(), controller.getonepost);
/********************\
       POST
\********************/
router.post('/addpost', cors(), controller.addpost);
/********************\
        PUT
\********************/
router.put('/:title', cors(), controller.updatePost);
/********************\
        DELETE
\********************/
router.delete('/:title', cors(), controller.deletePost);

module.exports = router;
