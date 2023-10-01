'use strict';
const { Model } = require('sequelize');
const useBcrypt = require('sequelize-bcrypt');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Comment, { foreignKey: 'userid' });
            User.hasMany(models.Post, { foreignKey: 'userid' });
            // define association here
        }
    }
    User.init(
        {
            userid: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            userName: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        }
    );
    useBcrypt(User, {
        field: 'password', // secret field to hash, default: 'password'
        rounds: 12, // used to generate bcrypt salt, default: 12
        compare: 'authenticate', // method used to compare secrets, default: 'authenticate'
    });
    return User;
};
