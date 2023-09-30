const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
/*-----controller-----*/
const controller = require('../controllers/TagController');

/********************\
        GET
\********************/
router.get('/', controller.get);
router.get('/:id', controller.getonepost);
/********************\
       POST
\********************/
router.post('/:id', controller.post);
/********************\
        PUT
\********************/
router.put('/:id', controller.put);
/********************\
        DELETE
\********************/
router.delete('/:id', controller.delete);

module.exports = router;
