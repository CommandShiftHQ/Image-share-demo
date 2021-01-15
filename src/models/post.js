module.exports = (sequelize, DataTypes) => {
    const schema = {
        title: DataTypes.STRING,
        contentUrl: DataTypes.STRING,
        date: DataTypes.DATE
    }

    const postModel = sequelize.define('Post', schema);

    return postModel;
}