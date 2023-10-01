'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Posts', {
            postid: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            //title
            title: {
                type: Sequelize.STRING,
            },
            //
            slug: {
                type: Sequelize.STRING,
            },
            //summary
            summary: {
                type: Sequelize.STRING,
            },
            //category
            categoryid: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categories', // 引用的 table
                    key: 'categoryid', // 引用的欄位
                },
            },
            //content
            content: {
                type: Sequelize.TEXT,
            },
            //
            userid: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users', // 引用的 table
                    key: 'userid', // 引用的欄位
                },
            },
            //
            commentid: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'comments', // 引用的 table
                    key: 'commentid', // 引用的欄位
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Posts');
    },
};
