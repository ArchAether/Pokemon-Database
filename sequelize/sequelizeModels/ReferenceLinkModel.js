const ReferenceLinkModel = (sequelize, DataTypes) => {
    const ReferenceLink = sequelize.define('reference_link', {
        // Do not include ID here!
        title: {
            type: DataTypes.STRING,
        },
        hyperlink: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    })
    return ReferenceLink
}

module.exports = ReferenceLinkModel