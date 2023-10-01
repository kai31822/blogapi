const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
/*-----controller-----*/
const controller = require('../controllers/UserController');
/********************\
        GET
\********************/
router.get('/', controller.getAllUser);
router.get('/:username', controller.getOneUser);
/********************\
        POST
\********************/
router.post('/addUser', controller.addUser);
/********************\
        PUT
\********************/
router.put('/:username', controller.updateUser);
/********************\
        DELETE
\********************/
router.delete('/:id', controller.deleteUser);

module.exports = router;
