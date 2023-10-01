const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/TagController');

/********************\
        GET
\********************/
router.get('/', controller.getallTag);
router.get('/:tag', controller.getoneTag);
/********************\
       POST
\********************/
router.post('/addTag', controller.addTag);
/********************\
        PUT
\********************/
router.put('/:tag', controller.updateTag);
/********************\
        DELETE
\********************/
router.delete('/:tag', controller.deleteTag);

module.exports = router;
