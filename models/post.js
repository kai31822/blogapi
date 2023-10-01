'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Post.belongsTo(models.User, { foreignKey: 'userid' });
            Post.belongsTo(models.Comment, { foreignKey: 'commentid' });
            Post.belongsTo(models.Categories, { foreignKey: 'categoryid' });
        }
    }

    Post.init(
        {
            postid: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            title: DataTypes.STRING,
            slug: DataTypes.STRING,
            summary: DataTypes.STRING,
            categoryid: DataTypes.INTEGER,
            content: DataTypes.TEXT,
            userid: DataTypes.INTEGER,
            commentid: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Post',
        }
    );
    return Post;
};
