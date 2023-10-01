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
            'posts',
            [
                {
                    title: 'post1',
                    slug: '',
                    summary: 'summary1',
                    category: 1,
                    content:
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolores aspernatur maiores officiis reprehenderit deserunt eos itaque illo vero ducimus.',
                    userid: 1,
                    commentid: 1,
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
        await queryInterface.bulkDelete('posts', null, {});
    },
};
