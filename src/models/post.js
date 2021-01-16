module.exports = (sequelize, DataTypes) => {
    const schema = {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'post title is required' }
            }
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'content url is required' }
            }
        },
        content: {
            type: DataTypes.STRING 
        }
    }

    const postModel = sequelize.define('Post', schema);

    return postModel;
}