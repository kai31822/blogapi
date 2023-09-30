'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    firstName: 'test1',
                    lastName: 'test01',
                    userName: 'admin',
                    password: 'test1',
                    email: '1example.com',
                },
                {
                    firstName: 'test2',
                    lastName: 'test03',
                    userName: 'user2',
                    password: 'test2',
                    email: '2example.com',
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
        await queryInterface.bulkDelete('users', null, {});
    },
};
