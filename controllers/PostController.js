const { Sequelize } = require('sequelize');
/********************\
     Models
\********************/
const db = require('../models');
const Post = db.Post;

module.exports = {
    // 1. get all Post
    get: async (req, res) => {
        let posts = await Post.findAll({});
        res.status(200).send(posts);
    },
    // 2. get One Post title
    getonepost: async (req, res) => {
        let id = req.params.id;
        let post = await Post.findOne({ where: { title: title } });
        res.status(200).send(post);
    },
    // 3. new post
    addpost: async (req, res) => {
        let info = {
            //title
            title: req.body.title,
            //slug
            slug: req.body.slug,
            //category
            category: req.body.category,
            //summary
            summary: req.body.summary,
            //content
            content: req.body.content,
            //userid
            userid: req.body.userid,
            //commentid
            commentid: req.body.commentid,
        };
        const newpost = await Post.create(info);
        res.status(200).send(`title:${info.title}, summary: ${info.summary}`);
    },
    // 4. update post
    updatePost: async (req, res) => {
        let id = req.params.id;
        let post = await Post.update(req.body, { where: { id: id } });
        res.status(200).send(post);
    },
    //  5. delete post
    deletePost: async (req, res) => {
        let id = req.params.id;
        await User.destroy({ where: { id: id } });
        res.status(200).send('Post is deleted!!');
    },
};
