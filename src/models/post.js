module.exports = (sequelize, DataTypes) => {
    const schema = {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'post title is required' }
            }
        },
        contentUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'content url is required' }
            }
        },
    }

    const postModel = sequelize.define('Post', schema);

    return postModel;
}