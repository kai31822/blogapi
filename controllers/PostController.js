const { Sequelize } = require('sequelize');
/********************\
     Models
\********************/
const db = require('../models');
const User = db.User;
module.exports = {
    // /post
    get: (req, res) => {
        res.json({ content: 'post content' });
    },
    // /post/:id
    getonepost: (req, res) => {
        res.json({ message: 'Get one POST' });
    },
    // /post/:id
    post: (req, res) => {
        res.json({ message: `POST ${req.params.id}` });
    },
    // /post/:id
    put: (req, res) => {
        res.json({ message: `Update${req.params.id}` });
    },
    // /post/:id
    delete: (req, res) => {
        res.json({ message: `Delete${req.params.id}` });
    },
};
