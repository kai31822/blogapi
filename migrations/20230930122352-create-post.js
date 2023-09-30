'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Posts', {
            id: {
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
            //content
            content: {
                type: Sequelize.TEXT,
            },
            //updatedAt
            updatedAt: {
                type: Sequelize.DATE,
            },
            //
            userid: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users', // 引用的 table
                    key: 'id', // 引用的欄位
                },
            },
            commentid: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'comments', // 引用的 table
                    key: 'id', // 引用的欄位
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
