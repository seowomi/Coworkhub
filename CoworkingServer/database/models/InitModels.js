const { DataTypes} = require("sequelize");


module.exports = (sequelize, User, Coworking) => {
    User.init({
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW()
        }
    }, {
        sequelize: sequelize,
        modelName: 'user',
        timestamps: false
    })

    Coworking.init({
        owner: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('Час', 'День'),
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW()
        }
    }, {
        sequelize: sequelize,
        modelName: 'coworking',
        timestamps: false,
        indexes: [{
            unique: true,
            fields: ['name', 'address']
        }]
    })

    User.hasMany(Coworking, {
        foreignKey: 'owner'
    });
};