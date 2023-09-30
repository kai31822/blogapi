const { Sequelize } = require('sequelize');
/********************\
     Models  待跟新 缺少關聯哪個post
\********************/
const db = require('../models');
const Comment = db.Comment;

module.exports = {
    // 1. get all Post
    getallcomment: async (req, res) => {
        let posts = await Post.findALL({});
        res.status(200).send(Post.title);
    },
    // 2. get One Post title
    getonecomment: async (req, res) => {
        let id = req.params.id;
        let comment = await Comment.findOne({ where: { title: title } });
        res.status(200).send(comment.title);
    },
    // 3. new post
    addcomment: async (req, res) => {
        let info = {
            //content
            content: req.body.content,
            //userid
            userid: req.body.userid,
        };
        const newcomment = await Comment.create(info);
        res.status(200).send(`content:${info.content}, userid: ${info.userid}`);
    },
    // 4. update post
    updateComment: async (req, res) => {
        let id = req.params.id;
        let comment = await Comment.update(req.body, { where: { id: id } });
        res.status(200).send(Post.title);
    },
    //  5. delete post
    deletePost: async (req, res) => {
        let id = req.params.id;
        await Comment.destroy({ where: { id: id } });
        res.status(200).send('Comment is deleted!!');
    },
};
