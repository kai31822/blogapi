const express = require('express');
const cors = require('cors');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/CommentController');

/********************\
        GET
\********************/
router.get('/', cors(), controller.getallcomment);
router.get('/:id', cors(), controller.getonecomment);
/********************\
       POST
\********************/
router.post('/addcomment', cors(), controller.addcomment);
/********************\
        PUT
\********************/
router.put('/:id', cors(), controller.updateComment);
/********************\
        DELETE
\********************/
router.delete('/:id', cors(), controller.deletePost);

module.exports = router;
