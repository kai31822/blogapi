const express = require('express');
const cors = require('cors');
const sequelize = require('sequelize');
const router = express.Router();
/*-----controller-----*/
const controller = require('../controllers/UserController');
/********************\
        GET
\********************/
router.get('/', cors(), controller.getAllUser);
router.get('/:username', cors(), controller.getOneUser);
/********************\
        POST
\********************/
router.post('/addUser', cors(), controller.addUser);
/********************\
        PUT
\********************/
router.put('/:username', cors(), controller.updateUser);
/********************\
        DELETE
\********************/
router.delete('/:id', cors(), controller.deleteUser);

module.exports = router;
