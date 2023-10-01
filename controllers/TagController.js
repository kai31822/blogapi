const { Sequelize } = require('sequelize');
/********************\
     Models
\********************/
const db = require('../models');
const Tag = db.Tag;

module.exports = {
    // 1. get all tag
    getallTag: async (req, res) => {
        let tag = await Tag.findALL({});
        res.status(200).send(Tag.tag);
    },
    // 2. get One tag
    getoneTag: async (req, res) => {
        let tag = req.params.tag;
        let findtag = await Tag.findOne({ where: { tagname: tag } });
        res.status(200).send(findcategory.category);
    },
    // 3. new tag
    addTag: async (req, res) => {
        let info = {
            // category
            tagname: req.body.tagname,
        };
        const newtag = await Tag.create(info);
        res.status(200).send(`Tag:${info.tagname}`);
    },
    // 4. update tag
    updateTag: async (req, res) => {
        let tag = req.params.tag;
        let updatetag = await Tag.update(req.body, { where: { tagname: tag } });
        res.status(200).send(updatetag.tag);
    },
    //  5. delete tag
    deleteTag: async (req, res) => {
        let tag = req.params.tag;
        await Tag.destroy({ where: { tagname: tag } });
        res.status(200).send('Tag is deleted!!');
    },
};
