/********************\
   Import Model
\********************/
const db = require('../models');
const User = db.User;
//main
module.exports = {
    // 1. create User
    addUser: async (req, res) => {
        let info = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
        };
        const newuser = await User.create(info);
        res.status(200).send(`username:${info.userName}, email: ${info.email}`);
    },
    // 2. get all User
    getAllUser: async (req, res) => {
        let users = await User.findALL({});
        res.status(200).send(User.userName);
    },
    // 3. get One User
    getOneUser: async (req, res) => {
        let id = req.params.id;
        let user = await User.findOne({ where: { id: id } });
        res.status(200).send(user.userName);
    },
    // 4.  update User
    updateUser: async (req, res) => {
        let id = req.params.id;
        let user = await User.update(req.body, { where: { id: id } });
        res.status(200).send(User.userName);
    },
    // 5. delete User
    deleteUser: async (req, res) => {
        let id = req.params.id;
        await User.destroy({ where: { id: id } });
        res.status(200).send('User is deleted!!');
    },
};
