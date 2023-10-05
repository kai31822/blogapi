const express = require('express');
const cors = require('cors');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/TagController');

/********************\
        GET
\********************/
router.get('/', cors(), controller.getallTag);
router.get('/:tag', cors(), controller.getoneTag);
/********************\
       POST
\********************/
router.post('/addTag', cors(), controller.addTag);
/********************\
        PUT
\********************/
router.put('/:tag', cors(), controller.updateTag);
/********************\
        DELETE
\********************/
router.delete('/:tag', cors(), controller.deleteTag);

module.exports = router;
