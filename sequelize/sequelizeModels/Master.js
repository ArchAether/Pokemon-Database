const MasterModel = (sequelize, DataTypes) => {
    const Master = sequelize.define('master', {
        SKU: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Component_1: {
            type: DataTypes.STRING,

        },
        Component_2: {
            type: DataTypes.STRING,

        },
        Internal_Remarks: {
            type: DataTypes.STRING,

        },

    }, { freezeTableName: true, })

    Master.associate = models => {
        const { Category, Color } = models
        Master.belongsTo(Category, {
            foreignKey: {
                name: 'category_id',
                allowNull: false,
            },
            onDelete: 'CASCADE'
        })
        Master.belongsTo(Color, {
            foreignKey: {
                name: 'color_id',
                allowNull: false,
            },
            onDelete: 'CASCADE'
        })
    }

    return Master
}

module.exports = MasterModel