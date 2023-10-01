const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/CommentController');

/********************\
        GET
\********************/
router.get('/', controller.getallcomment);
router.get('/:id', controller.getonecomment);
/********************\
       POST
\********************/
router.post('/addcomment', controller.addcomment);
/********************\
        PUT
\********************/
router.put('/:id', controller.updateComment);
/********************\
        DELETE
\********************/
router.delete('/:id', controller.deletePost);

module.exports = router;
