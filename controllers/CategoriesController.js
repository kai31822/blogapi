const { Sequelize } = require('sequelize');
/********************\
     Models
\********************/
const db = require('../models');
const Category = db.Categories;

module.exports = {
    // 1. get all category
    getallCategory: async (req, res) => {
        let category = await Category.findAll({});
        res.status(200).send(category);
    },
    // 2. get One category
    getoneCategory: async (req, res) => {
        let category = req.params.category;
        let findcategory = await Category.findOne({ where: { category: category } });
        res.status(200).send(findcategory);
    },
    // 3. new category
    addCategory: async (req, res) => {
        let info = {
            // category
            Category: req.body.Category,
        };
        const newcomment = await Category.create(info);
        res.status(200).send(`category:${info.Category}`);
    },
    // 4. update category
    updateCategory: async (req, res) => {
        let category = req.params.category;
        let updatecategory = await Category.update(req.body, { where: { category: category } });
        res.status(200).send(`${updatecategory} , ${category}`);
    },
    //  5. delete category
    deleteCategory: async (req, res) => {
        let category = req.params.category;
        await Category.destroy({ where: { category: category } });
        res.status(200).send('Category is deleted!!');
    },
};
